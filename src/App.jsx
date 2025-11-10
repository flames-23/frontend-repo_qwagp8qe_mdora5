import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import Typewriter from './components/Typewriter'
import ScanlineUnderline from './components/ScanlineUnderline'
import GlyphGrid from './components/GlyphGrid'
import ProjectCard from './components/ProjectCard'

const BRAND = {
  background: '#FAFAFA',
  text: '#111111',
  accent: '#00E676',
}

export default function App() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <div
      className="min-h-screen"
      style={{
        background: BRAND.background,
        color: BRAND.text,
        fontFamily: 'VT323, IBM Plex Mono, monospace',
        '--accent-color': BRAND.accent,
      }}
    >
      {/* Page flash like terminal refresh */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        className="pointer-events-none fixed inset-0 bg-white"
      />

      {/* Hero */}
      <section className="relative flex items-center justify-center py-28 px-6">
        <div className="max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl sm:text-7xl tracking-tight"
            style={{ fontFamily: 'VT323, monospace', letterSpacing: '-0.02em' }}
          >
            REVNOIR LABS
          </motion.h1>
          <div className="mt-2 inline-flex"><ScanlineUnderline /></div>
          <p className="mt-4 text-xl" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>
            Retro Logic. Modern Vision.
          </p>
          <p className="mt-6 text-base max-w-2xl mx-auto text-black/80" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>
            <Typewriter
              start={mounted}
              text={
                'A monochrome tech lab reimagining the retro computer aesthetic through modern AI and digital design.'
              }
              speed={18}
            />
          </p>
          <div className="mt-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 border border-black/40 px-5 py-2 rounded-md font-mono text-sm transition-all hover:shadow-[0_0_0_3px_var(--accent-color)] focus-visible:shadow-[0_0_0_3px_var(--accent-color)]"
            >
              Explore Work
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="relative py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl" style={{ fontFamily: 'VT323, monospace' }}>Who We Are</h2>
            <p className="mt-4 text-black/80 font-mono leading-relaxed">
              We build intelligent systems and design-driven digital experiences, inspired by the raw elegance of old computers. Revnoir Labs merges nostalgia with next-gen engineering.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-[linear-gradient(to_bottom,#0000000d_1px,transparent_1px),linear-gradient(to_right,#0000000d_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            <GlyphGrid className="relative" />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl" style={{ fontFamily: 'VT323, monospace' }}>Projects</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <ProjectCard
              title="Orbit"
              subtitle="AI Reflection Engine"
              description="A Qdrant-powered AI system enabling reflective multimodal understanding."
              link="#"
            />
            <ProjectCard
              title="Lumina"
              subtitle="E-commerce Platform"
              description="A minimalist storefront blending AI-driven recommendations with clean UI."
              link="#"
            />
            <ProjectCard
              title="NeuraPort"
              subtitle="Personal Portfolio Generator"
              description="A modern builder that crafts animated portfolio sites with retro precision."
              link="#"
            />
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl" style={{ fontFamily: 'VT323, monospace' }}>System Stack</h2>
          <div className="mt-6 font-mono text-sm bg-white border border-black/20 rounded-md p-6">
            <div className="space-y-1">
              <Typewriter start={mounted} speed={14} text={'> stack list'} />
              <div className="opacity-0 animate-fade-in [animation-delay:200ms]">- Next.js</div>
              <div className="opacity-0 animate-fade-in [animation-delay:300ms]">- Tailwind CSS</div>
              <div className="opacity-0 animate-fade-in [animation-delay:400ms]">- FastAPI</div>
              <div className="opacity-0 animate-fade-in [animation-delay:500ms]">- Qdrant</div>
              <div className="opacity-0 animate-fade-in [animation-delay:600ms]">- Supabase</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl" style={{ fontFamily: 'VT323, monospace' }}>Let's Collaborate</h2>
          <p className="mt-2 font-mono text-sm text-black/70">contact@revnoirlabs.com</p>
          <div className="mt-6 flex items-center border border-black/30 rounded-md overflow-hidden bg-white">
            <span className="px-3 text-black/60">$</span>
            <input
              placeholder="Type your message here..."
              className="w-full p-3 font-mono text-sm outline-none bg-transparent placeholder-black/40"
            />
            <button className="px-4 py-2 border-l border-black/20 hover:bg-black/5">Send</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-black/60 font-mono text-xs">
        © 2025 Revnoir Labs — Intelligence in Monochrome.
      </footer>
    </div>
  )
}
