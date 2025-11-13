import React from 'react'
import Spline from '@splinetool/react-spline'
import { Rocket, Shield, Zap, Star, ArrowRight } from 'lucide-react'

function App() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Sticky top nav */}
      <header className="fixed top-0 inset-x-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <div className="size-6 rounded-sm bg-gradient-to-br from-orange-500 to-red-600" />
            Vibe Landing
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <button onClick={() => scrollTo('section-1')} className="hover:text-orange-600 transition-colors">Hero</button>
            <button onClick={() => scrollTo('section-2')} className="hover:text-orange-600 transition-colors">Minimal</button>
            <button onClick={() => scrollTo('section-3')} className="hover:text-orange-600 transition-colors">Glass</button>
            <button onClick={() => scrollTo('section-4')} className="hover:text-orange-600 transition-colors">Neon</button>
          </nav>
          <a href="/test" className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium bg-gray-900 text-white hover:bg-gray-800 transition-colors">Test Backend <ArrowRight className="size-4"/></a>
        </div>
      </header>

      {/* Section 1: Hero – Tech/Abstract with Spline cover */}
      <section id="section-1" className="relative h-[90vh] min-h-[640px] w-full overflow-hidden">
        {/* Spline 3D background */}
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Dark overlay gradient for contrast - pointer-events-none so Spline remains interactive */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/70" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl text-white">
              <p className="inline-flex items-center gap-2 text-xs sm:text-sm px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur">
                <span className="size-2 rounded-full bg-orange-400 animate-pulse" />
                Live, interactive 3D hero
              </p>
              <h1 className="mt-4 text-4xl sm:text-6xl font-black tracking-tight leading-tight">
                Bold experiences meet
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-400 to-red-400"> immersive design</span>
              </h1>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-white/80">
                A modern, abstract hero with red–orange slanted tiles over a deep, moody canvas. Move your cursor and explore.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button onClick={() => scrollTo('section-2')} className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white text-gray-900 font-semibold shadow-sm hover:shadow transition-shadow">
                  Explore Sections <ArrowRight className="size-4"/>
                </button>
                <a href="#section-4" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-transparent text-white ring-1 ring-white/40 hover:ring-white/70">
                  Jump to Neon
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Minimalist / Editorial */}
      <section id="section-2" className="relative py-24 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-gray-900">
                Minimalist clarity
              </h2>
              <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                Clean typography, generous whitespace, and a calm palette focus attention on your core value. Perfect for product storytelling and case studies.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                {[
                  { icon: <Rocket className='size-5' />, title: 'Fast setup' },
                  { icon: <Shield className='size-5' />, title: 'Secure by design' },
                  { icon: <Zap className='size-5' />, title: 'Lightning UX' },
                  { icon: <Star className='size-5' />, title: 'Loved by teams' },
                ].map((f, i) => (
                  <div key={i} className="group p-5 rounded-lg border border-gray-200 hover:border-gray-900 transition-colors">
                    <div className="flex items-center gap-3 font-medium">
                      <span className="grid place-items-center size-8 rounded-md bg-gray-900 text-white">{f.icon}</span>
                      {f.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="aspect-[4/3] rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 grid place-items-center">
                <div className="text-center">
                  <div className="mx-auto size-16 rounded-full bg-gray-900/90 text-white grid place-items-center mb-4">
                    <Rocket className="size-7" />
                  </div>
                  <p className="text-sm uppercase tracking-widest text-gray-500">Minimal Mock</p>
                  <p className="text-xl font-semibold mt-1">Frictionless layout preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Vibrant Gradient + Glassmorphism */}
      <section id="section-3" className="relative py-24 sm:py-28 bg-gradient-to-br from-fuchsia-500 via-rose-500 to-amber-400 text-white overflow-hidden">
        <div className="absolute -bottom-20 -right-20 w-[36rem] h-[36rem] rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-5xl font-black leading-tight">Vibrant energy</h2>
            <p className="mt-4 text-white/90 text-lg">
              A lively, high-contrast section with glass cards floating over a radiant gradient.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="relative rounded-xl p-6 bg-white/15 backdrop-blur-xl ring-1 ring-white/20 hover:ring-white/40 transition-all">
                <div className="flex items-start justify-between">
                  <div className="size-10 rounded-lg grid place-items-center bg-white/20 ring-1 ring-white/30">
                    <Star className="size-5" />
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-black/20 ring-1 ring-white/20">Card {i}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold">Glass card heading</h3>
                <p className="mt-2 text-sm text-white/85">
                  Subtle transparency and blur give depth while keeping content perfectly legible.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Dark Neon / Cyberpunk */}
      <section id="section-4" className="relative py-24 sm:py-28 bg-[#0b0d12] text-[#e2e8f0]">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, #0ea5e9 0, transparent 35%), radial-gradient(circle at 80% 10%, #a855f7 0, transparent 35%), radial-gradient(circle at 70% 80%, #22d3ee 0, transparent 30%)' }} />
          <div className="absolute inset-0 mix-blend-overlay" style={{ backgroundImage: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1">
              <p className="text-xs font-mono tracking-widest text-cyan-300/80">MODE: NEON</p>
              <h2 className="mt-3 text-3xl sm:text-5xl font-black leading-tight">
                Night drive aesthetics
              </h2>
              <p className="mt-4 text-lg text-slate-300/90 max-w-xl">
                A moody, cyberpunk-inspired section with glowing accents, soft scanlines, and cool-toned bursts.
              </p>
              <div className="mt-8 grid sm:grid-cols-3 gap-4 max-w-2xl">
                {[
                  { c: 'from-cyan-400 to-blue-500', t: 'Realtime glow' },
                  { c: 'from-fuchsia-400 to-violet-500', t: 'Holographic UI' },
                  { c: 'from-emerald-400 to-teal-500', t: 'Zero-lag input' },
                ].map((b, i) => (
                  <div key={i} className={`p-0.5 rounded-xl bg-gradient-to-r ${b.c}`}>
                    <div className="rounded-[10px] bg-[#0b0d12] p-4 h-full">
                      <p className="font-semibold">{b.t}</p>
                      <p className="text-sm text-slate-400 mt-1">Optimized pipelines for crisp, responsive visuals.</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href="#section-1" className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">
                  Back to top <ArrowRight className="size-4 rotate-180"/>
                </a>
                <a href="/test" className="inline-flex items-center gap-2 text-fuchsia-300 hover:text-fuchsia-200">
                  Check backend
                </a>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="relative rounded-2xl p-0.5 bg-gradient-to-br from-cyan-400/70 via-fuchsia-500/70 to-blue-500/70">
                <div className="rounded-[15px] bg-[#0b0d12] p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="relative h-28 rounded-xl bg-[#0f1320] border border-white/10 overflow-hidden">
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 8px)' }} />
                        <div className="absolute -inset-8 opacity-30 blur-2xl" style={{ background: 'conic-gradient(from 180deg at 50% 50%, #06b6d4, #a78bfa, #60a5fa, #06b6d4)' }} />
                        <div className="relative p-3">
                          <p className="text-xs text-slate-300/80">Module {i + 1}</p>
                          <p className="text-sm font-semibold">Neon block</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-black/5 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Vibe Landing. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#section-2" className="hover:text-gray-900">Minimal</a>
            <a href="#section-3" className="hover:text-gray-900">Glass</a>
            <a href="#section-4" className="hover:text-gray-900">Neon</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
