import React from "react";
import { UserPlus, Linkedin } from "lucide-react";
import { useTheme } from "../context/ThemeContext.jsx";
import { useLang } from "../context/LanguageContext.jsx";
import Eyebrow from "../components/ui/Eyebrow.jsx";
import Card from "../components/ui/Card.jsx";
import Section from "../components/ui/Section.jsx";
import Reveal from "../components/ui/Reveal.jsx";

// Number of open placeholder slots to show for the board. Change this to
// match your actual board size.
const BOARD_SLOTS = 3;

function initials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

// A confirmed leader — real name, title, bio, and area tags.
function LeaderCard({ member, theme }) {
  return (
    <Card className="p-8">
      <div className="flex items-start justify-between mb-5">
        <div
          className={`w-16 h-16 rounded-xl flex items-center justify-center font-mono text-base font-semibold text-gray-950 bg-gradient-to-br from-violet-500 to-cyan-400`}
        >
          {initials(member.name)}
        </div>
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} on LinkedIn`}
            className={`w-9 h-9 rounded-lg border ${theme.borderStrong} flex items-center justify-center hover:border-cyan-400 transition-colors`}
          >
            <Linkedin size={16} className={theme.cyanText} />
          </a>
        )}
      </div>
      <h3 className="text-xl font-semibold">{member.name}</h3>
      <p className={`font-mono text-xs mt-1 ${theme.cyanText}`}>{member.role}</p>
      <p className={`text-sm mt-4 ${theme.muted}`}>{member.bio}</p>
      {member.tags && member.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-5">
          {member.tags.map((tag) => (
            <span key={tag} className={`font-mono text-xs px-3 py-1.5 rounded-full border ${theme.border} ${theme.muted}`}>
              {tag}
            </span>
          ))}
        </div>
      )}
    </Card>
  );
}

// An empty slot for a board member who hasn't been added yet.
function TeamSlotCard({ p, theme }) {
  return (
    <div className={`rounded-2xl p-7 border-2 border-dashed ${theme.borderStrong}`}>
      <div className={`w-14 h-14 rounded-xl ${theme.iconChipBg} flex items-center justify-center mb-4`}>
        <UserPlus size={22} className={theme.muted} />
      </div>
      <h3 className={`text-base font-semibold italic ${theme.muted}`}>{p.placeholderName}</h3>
      <p className={`font-mono text-xs mt-1 italic ${theme.muted}`}>{p.placeholderRole}</p>
      <p className={`text-sm mt-3 italic ${theme.muted}`}>{p.placeholderBio}</p>
    </div>
  );
}

export default function TeamPage() {
  const { theme } = useTheme();
  const { t } = useLang();
  const p = t.teamPage;
  const leaders = p.leaders || [];

  return (
    <>
      <Section className="pb-6">
        <Eyebrow>{p.eyebrow}</Eyebrow>
        <h1 className="text-3xl md:text-5xl font-bold max-w-2xl mb-4">{p.title}</h1>
        <p className={`max-w-2xl text-lg ${theme.muted}`}>{p.lead}</p>
      </Section>

      <Section className="pt-0">
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {leaders.map((member) => (
            <Reveal key={member.linkedin || member.name}>
              <LeaderCard member={member} theme={theme} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <Card className="p-10">
            <h2 className="text-xl md:text-2xl font-bold mb-3">{p.commitmentTitle}</h2>
            <p className={`max-w-3xl ${theme.muted}`}>{p.commitmentBody}</p>
          </Card>
        </Reveal>
      </Section>

      <Section>
        <Reveal className="mb-6">
          <h2 className="text-2xl font-bold">{p.boardTitle}</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: BOARD_SLOTS }).map((_, i) => (
            <Reveal key={`board-${i}`}>
              <TeamSlotCard p={p} theme={theme} />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
