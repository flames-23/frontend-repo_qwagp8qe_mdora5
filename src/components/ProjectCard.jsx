import { ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ title, subtitle, description, link }) {
  return (
    <a
      href={link}
      className="group block border border-black/20 rounded-md bg-white p-5 transition-shadow hover:shadow-[0_0_0_3px_#00E676] focus-visible:shadow-[0_0_0_3px_#00E676] outline-none"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-mono text-lg tracking-tight text-[#111111]">{title}</h3>
          <p className="font-mono text-sm text-black/60">{subtitle}</p>
        </div>
        <ArrowUpRight className="h-4 w-4 text-black/60 group-hover:text-[#00E676]" />
      </div>
      <p className="mt-3 text-sm text-black/70 leading-relaxed">{description}</p>
    </a>
  )
}
