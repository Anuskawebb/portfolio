"use client"

import Image from "next/image"
import { useEffect, useMemo, useRef, useState } from "react"

type Tech = {
  name: string
  url: string
}

const techs: Tech[] = [
  { name: "Figma", url: "https://cdn.simpleicons.org/figma/F24E1E" },
  { name: "React", url: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "C", url: "https://cdn.simpleicons.org/c/00599C" },
  { name: "Node.js", url: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "Redux", url: "https://cdn.simpleicons.org/redux/764ABC" },
  { name: "JavaScript", url: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "CSS3", url: "https://cdn.simpleicons.org/css3/1572B6" },
  { name: "XD", url: "https://cdn.simpleicons.org/adobexd/FF61F6" },
  { name: "Next.js", url: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
  { name: "Gatsby", url: "https://cdn.simpleicons.org/gatsby/663399" },
  { name: "Illustrator", url: "https://cdn.simpleicons.org/adobeillustrator/FF9A00" },
  { name: "Express", url: "https://cdn.simpleicons.org/express/ffffff" },
  { name: "MongoDB", url: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "Solidity", url: "https://cdn.simpleicons.org/solidity/363636" },
  { name: "Ethereum", url: "https://cdn.simpleicons.org/ethereum/627EEA" },
  { name: "MetaMask", url: "https://cdn.simpleicons.org/metamask/F6851B" }
]

export default function TechNetwork() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => setInView(e.isIntersecting)),
      { threshold: 0.2 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // Layout: icons in a horizontal row near the top, all paths converge to center (0,0)
  const layout = useMemo(() => {
    const width = 900
    const topY = -200
    const gap = width / (techs.length + 1)
    const items = techs.map((t, i) => ({
      tech: t,
      x: -width / 2 + gap * (i + 1),
      y: topY
    }))
    return { items, width }
  }, [])

  return (
    <div ref={containerRef} className="relative w-full flex items-center justify-center py-10">
      <div className="relative" style={{ width: 900, height: 560 }}>
        <svg className="absolute inset-0 w-full h-full" viewBox="-450 -280 900 560" aria-hidden>
          {/* Curved paths from each icon to center */}
          {layout.items.map((p, idx) => {
            // Bezier control points: start at icon, curve down into center
            const cx1 = p.x * 0.6
            const cy1 = p.y * 0.5
            const cx2 = p.x * 0.2
            const cy2 = -60
            const d = `M ${p.x} ${p.y} C ${cx1} ${cy1}, ${cx2} ${cy2}, 0 0`
            return (
              <path
                key={`path-${idx}`}
                d={d}
                fill="none"
                stroke="#8b5cf6"
                strokeOpacity={0.45}
                strokeWidth={1.8}
                className={inView ? "animate-[draw_900ms_ease-out_forwards]" : "opacity-0"}
                style={{ animationDelay: `${idx * 45}ms` }}
              />
            )
          })}

          {/* Orbital arcs under center */}
          {[140, 200, 260, 320].map((r, i) => (
            <ellipse
              key={`orb-${r}`}
              cx={0}
              cy={80 + i * 6}
              rx={r}
              ry={r / 3}
              fill="none"
              stroke="#6d28d9"
              strokeOpacity={0.35 - i * 0.05}
              strokeWidth={1.2}
              className={inView ? "animate-[fadein_800ms_ease-out_forwards]" : "opacity-0"}
              style={{ animationDelay: `${600 + i * 80}ms` }}
            />
          ))}

          <defs>
            <style>{`
              @keyframes draw { from { stroke-dasharray: 0 600; opacity: .0 } to { stroke-dasharray: 600 0; opacity: 1 } }
              @keyframes fadein { from { opacity: 0 } to { opacity: .9 } }
            `}</style>
          </defs>
        </svg>

        {/* Top icon row */}
        {layout.items.map((p, idx) => (
          <div
            key={`logo-${idx}`}
            className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all ${inView ? "opacity-100" : "opacity-0"}`}
            style={{
              left: 450 + (inView ? p.x : 0),
              top: 280 + (inView ? p.y : 0),
              transitionDuration: "700ms",
              transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
              transitionDelay: `${idx * 40}ms`
            }}
          >
            <div className="w-10 h-10 rounded-full overflow-hidden shadow-[0_0_12px_rgba(163,98,255,.25)]">
              <Image src={layout.items[idx].tech.url} alt={layout.items[idx].tech.name} width={40} height={40} className="w-10 h-10 object-contain" />
            </div>
          </div>
        ))}

        {/* Center node (single glow) */}
        <div className={`pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#a78bfa] shadow-2xl ${inView ? "scale-100" : "scale-95"}`} style={{ width: 120, height: 120 }} />
      </div>
    </div>
  )
}
