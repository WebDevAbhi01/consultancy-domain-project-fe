import {
  FaLinkedinIn,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import type { TeamMember } from "@/types/team.types"
import { cn } from "../../lib/utils/utils"

interface TeamMemberCardProps {
  member: TeamMember
  index: number
}

export function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  // Subtle staggered accent colour based on position
  const accentColors = [
    "bg-[var(--color-green-500)]",
    "bg-[var(--color-teal-400)]",
    "bg-[var(--color-forest-700)]",
    "bg-[var(--color-green-700)]",
  ]
  const accent = accentColors[index % accentColors.length]

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--color-grey-200)] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]">
      {/* Photo area */}
      <div className="relative">
        <img
          src={member.photoUrl}
          alt={member.name}
          className="h-56 w-full object-cover"
        />
        {/* Accent bar on bottom of photo */}
        <div className={cn("absolute bottom-0 left-0 right-0 h-1", accent)} />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div>
          <h3 className="font-semibold text-[var(--color-forest-900)]">{member.name}</h3>
          <p className="mt-0.5 text-sm font-medium text-[var(--color-green-500)]">{member.role}</p>
        </div>
        <p className="flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
          {member.bio}
        </p>

        {/* Social links */}
        <div className="flex items-center gap-2 border-t border-[var(--color-grey-100)] pt-4">
          <a
            href={`mailto:hello@sanctionandco.in`}
            aria-label={`Email ${member.name}`}
            className="flex size-8 items-center justify-center rounded-lg border border-[var(--color-grey-200)] text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-green-500)] hover:text-[var(--color-green-500)]"
          >
            <MdEmail className="size-3.5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label={`${member.name} on LinkedIn`}
            className="flex size-8 items-center justify-center rounded-lg border border-[var(--color-grey-200)] text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-green-500)] hover:text-[var(--color-green-500)]"
          >
            <FaLinkedinIn className="size-3.5" />
          </a>
        </div>
      </div>
    </div>
  )
}