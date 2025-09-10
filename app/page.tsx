import { Card } from "@/components/ui/card"
import Image from "next/image"
import projectImg1 from "@/app/screenPreviews/image.png"
import projectImg2 from "@/app/screenPreviews/image2.jpg"
import projectImg3 from "@/app/screenPreviews/image3.jpg"
import heroAvatar from "@/app/screenPreviews/c4be3ecb-cb44-4687-866a-0940ef600153.jpg"
import TechNetwork from "@/components/TechNetwork"
import TypingAnimation from "@/components/TypingAnimation"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#11071f] text-white relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(152, 87, 211, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(152, 87, 211, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Header */}
      <header className="flex items-center justify-between p-6 max-w-7xl mx-auto relative z-10">
        <div className="text-3xl font-bold text-white">Ʃ</div>
        <nav className="flex gap-10">
          <a href="#about" className="text-white/90 hover:text-white transition-colors text-lg">About</a>
          <a href="#projects" className="text-white/90 hover:text-white transition-colors text-lg">Projects</a>
          <a href="#skills" className="text-white/90 hover:text-white transition-colors text-lg">Skills</a>
          <a href="#contact" className="text-white/90 hover:text-white transition-colors text-lg">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="flex items-center justify-center gap-20 mb-32">
          <div className="relative">
            {/* Curved arrow and hello text */}
            <div className="absolute -top-16 -left-8 text-[#ccd6f6] text-sm">
              Hello! I Am Anuska Sarkar
              <svg className="absolute -bottom-8 left-20 w-16 h-12" viewBox="0 0 64 48" fill="none">
                <path d="M2 2C20 2 40 20 62 46" stroke="#ccd6f6" strokeWidth="1" fill="none" strokeDasharray="2,2" />
                <path d="M58 42L62 46L58 50" stroke="#ccd6f6" strokeWidth="1" fill="none" />
              </svg>
            </div>

            {/* Avatar with purple glow */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#9857d3] to-[#a362ff] rounded-full blur-2xl opacity-70 scale-110"></div>
              <Image
                src={heroAvatar}
                alt="Profile"
                width={192}
                height={192}
                className="w-48 h-48 rounded-full object-cover relative z-10 shadow-2xl bg-transparent"
                priority
              />
            </div>
          </div>

          <div className="text-left">
            <p className="text-[#ccd6f6] text-lg mb-4 font-medium">A Web Developer</p>
            <h1 className="text-6xl font-bold mb-4 leading-tight text-white">
              Who Builds
              <br />
              <TypingAnimation 
                text="Ideas Into Reality..."
                speed={150}
                delay={1000}
                className="text-[#a362ff] font-bold"
              />
            </h1>
            <p className="text-[#ccd6f6] text-lg font-medium">Because reality looks better when powered by code.</p>
          </div>
        </div>

        {/* About Section */}
        <div id="about" className="max-w-3xl text-left mb-20 scroll-mt-24">
          <h2 className="text-4xl font-bold mb-8 text-white">I'm a Web2/Web3 Dev .</h2>
          <p className="text-[#ccd6f6] leading-relaxed text-lg">
            A self-taught web developer passionate about designing responsive websites and building full-stack
            applications. Currently expanding into Web3, learning Solidity, and exploring how to craft DApps for the
            future of the web.
          </p>
        </div>

        {/* Academic Background */}
        <div className="max-w-2xl mb-20 mx-auto text-center">
          <h3 className="text-2xl font-bold mb-8">Academic Background</h3>
          <Card className="bg-gradient-to-r from-[#2b215a] to-[#2b0b3a] border-[#4f228d] p-8 rounded-2xl card-glow cursor-pointer">
            <div className="flex items-center gap-6">
              <div className="w-16 h-20 bg-[#9857d3] rounded-xl flex items-center justify-center relative">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-[#9857d3] text-lg font-bold">★</span>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-4 bg-[#9857d3] rounded-b-lg"></div>
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg">Bachelor of Computer Applications</h4>
                <p className="text-[#b5bddb] text-sm">2022 - 2025 | CGPA: 9.01</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Skills Section */}
        <div id="skills" className="text-center mb-20 scroll-mt-24">
          <p className="text-[#b5bddb] mb-2 text-lg">
            I'm enhancing my skills in <span className="text-[#9857d3]">modern full-stack</span> and decentralized app development.
          </p>
          <p className="text-[#b5bddb] text-sm mb-12">I'm passionate about learning and shaping innovative Web3 solutions.</p>

          <TechNetwork />
        </div>

        {/* Example Projects */}
        <div id="projects" className="space-y-32 scroll-mt-24">
          {/* Project 1 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center relative">
            <div>
              <p className="text-[#9857d3] text-sm font-medium mb-2 uppercase tracking-wider">Featured Project</p>
              <h3 className="text-4xl font-bold mb-8 text-white">GridAPP</h3>

              <div className="relative z-20 lg:-mr-24">
                <a href="https://grindapp.vercel.app/" target="_blank" rel="noreferrer" className="block">
                  <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/15 shadow-2xl card-glow cursor-pointer">
                    <p className="text-[#ccd6f6] leading-relaxed text-base">
                      A skill-tracking app to set learning goals, track progress, and stay organized with an interactive dashboard. Powered by Gemini AI, it helps users generate quizzes, take notes, and get study support. Built with Next.js and Supabase (Postgres).
                    </p>
                  </div>
                </a>
              </div>

              <a
                href="https://grindapp.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-white/80 hover:text-white transition-colors group"
              >
                <svg
                  className="w-6 h-6 text-[#a362ff] transition-all group-hover:drop-shadow-[0_0_10px_rgba(163,98,255,0.9)]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 2l7.5 16.5 2.2-6.1 6.1-2.2L3 2zm8.6 12.1l-2.7 7.3 2.8-1.8 3.3 4.4 2.4-1.8-3.3-4.4 2.8-1.8-7.3 2.7z" />
                </svg>
                <span className="text-sm font-medium tracking-wide">Live Demo</span>
              </a>
            </div>
            <div className="relative">
              <a href="https://grindapp.vercel.app/" target="_blank" rel="noreferrer" className="block">
                <div className="absolute -inset-8 bg-gradient-to-br from-[#2b0b3a] to-[#1a0b2e] rounded-3xl blur-2xl opacity-70"></div>
                <div className="relative bg-gradient-to-br from-[#2b0b3a] to-[#1a0b2e] p-6 rounded-3xl card-glow cursor-pointer">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={projectImg1}
                      alt="Project mockup"
                      width={1200}
                      height={700}
                      className="w-full h-auto"
                      priority
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center relative">
            <div className="order-2 lg:order-1 relative">
              <a href="https://polytix.vercel.app/" target="_blank" rel="noreferrer" className="block">
                <div className="absolute -inset-8 bg-gradient-to-br from-[#2b0b3a] to-[#1a0b2e] rounded-3xl blur-2xl opacity-70"></div>
                <div className="relative bg-gradient-to-br from-[#2b0b3a] to-[#1a0b2e] p-6 rounded-3xl card-glow cursor-pointer">
                  <div className="bg-[#1a0b2e] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={projectImg3}
                      alt="Voting app mockup"
                      width={1200}
                      height={700}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </a>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-[#9857d3] text-sm font-medium mb-2 uppercase tracking-wider">Featured Project</p>
              <h3 className="text-4xl font-bold mb-8 text-white">Polytix</h3>

              <div className="relative z-20 lg:-ml-24">
                <a href="https://polytix.vercel.app/" target="_blank" rel="noreferrer" className="block">
                  <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl mb-0 border border-white/15 shadow-2xl card-glow cursor-pointer">
                    <p className="text-[#ccd6f6] leading-relaxed text-base">
                     It's a decentralized voting dApp where I led the frontend and smart contract integration. The platform supports token-gated, open, and registration-based campaigns with proposal and candidate voting, NFT ticketing, role-based dashboards, and live on-chain results via The Graph.
                    </p>
                  </div>
                </a>
              </div>

              <a
                href="https://polytix.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-white/80 hover:text-white transition-colors group"
              >
                <svg
                  className="w-6 h-6 text-[#a362ff] transition-all group-hover:drop-shadow-[0_0_10px_rgba(163,98,255,0.9)]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 2l7.5 16.5 2.2-6.1 6.1-2.2L3 2zm8.6 12.1l-2.7 7.3 2.8-1.8 3.3 4.4 2.4-1.8-3.3-4.4 2.8-1.8-7.3 2.7z" />
                </svg>
                <span className="text-sm font-medium tracking-wide">Live Demo</span>
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center relative">
            <div>
              <p className="text-[#9857d3] text-sm font-medium mb-2 uppercase tracking-wider">Featured Project</p>
              <h3 className="text-4xl font-bold mb-8 text-white">EduPayChain</h3>

              <div className="relative z-20 lg:-mr-24">
                <a href="https://edu-pay-chain.vercel.app/" target="_blank" rel="noreferrer" className="block">
                  <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/15 shadow-2xl card-glow cursor-pointer">
                    <p className="text-[#ccd6f6] leading-relaxed text-base">
                      Decentralized tuition payment via ERC-20 tokens & escrow contracts. Features portals, auto fee disbursement, immutable IPFS receipts. Integrated smart contracts with frontend.
                    </p>
                  </div>
                </a>
              </div>

              <a
                href="https://edu-pay-chain.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-white/80 hover:text-white transition-colors group"
              >
                <svg
                  className="w-6 h-6 text-[#a362ff] transition-all group-hover:drop-shadow-[0_0_10px_rgba(163,98,255,0.9)]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 2l7.5 16.5 2.2-6.1 6.1-2.2L3 2zm8.6 12.1l-2.7 7.3 2.8-1.8 3.3 4.4 2.4-1.8-3.3-4.4 2.8-1.8-7.3 2.7z" />
                </svg>
                <span className="text-sm font-medium tracking-wide">Live Demo</span>
              </a>
            </div>
            <div className="relative">
              <a href="https://edu-pay-chain.vercel.app/" target="_blank" rel="noreferrer" className="block">
                <div className="absolute -inset-8 bg-gradient-to-br from-[#2b0b3a] to-[#1a0b2e] rounded-3xl blur-2xl opacity-70"></div>
                <div className="relative bg-gradient-to-br from-[#2b0b3a] to-[#1a0b2e] p-6 rounded-3xl card-glow cursor-pointer">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={projectImg2}
                      alt="Skills app mockup"
                      width={1200}
                      height={700}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <section id="contact" className="mt-32">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Me</h3>
          <p className="text-[#b5bddb] mb-8 max-w-3xl">I’m available for internships, freelance work, and collaborations. Reach out via email or connect on socials.</p>
          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/in/anuska-s/" target="_blank" rel="noreferrer" className="transition-transform hover:-translate-y-1">
              <img src="https://cdn.simpleicons.org/linkedin/0A66C2" alt="LinkedIn" className="w-10 h-10 drop-shadow-[0_0_10px_rgba(163,98,255,0.6)] hover:drop-shadow-[0_0_16px_rgba(163,98,255,0.9)]" />
            </a>
            <a href="https://x.com/ThizisAnuska?t=6POE1GIs8NU1PD4qBAwXCQ&s=09" target="_blank" rel="noreferrer" className="transition-transform hover:-translate-y-1">
              <img src="https://cdn.simpleicons.org/x/ffffff" alt="Twitter/X" className="w-10 h-10 drop-shadow-[0_0_10px_rgba(163,98,255,0.6)] hover:drop-shadow-[0_0_16px_rgba(163,98,255,0.9)]" />
            </a>
            <a href="https://github.com/Anuskawebb" target="_blank" rel="noreferrer" className="transition-transform hover:-translate-y-1">
              <img src="https://cdn.simpleicons.org/github/ffffff" alt="GitHub" className="w-10 h-10 drop-shadow-[0_0_10px_rgba(163,98,255,0.6)] hover:drop-shadow-[0_0_16px_rgba(163,98,255,0.9)]" />
            </a>
            <a href="mailto:anuskaa0003@gmail.com" className="transition-transform hover:-translate-y-1">
              <img src="https://cdn.simpleicons.org/minutemailer/EA4335" alt="Email" className="w-10 h-10 drop-shadow-[0_0_10px_rgba(163,98,255,0.6)] hover:drop-shadow-[0_0_16px_rgba(163,98,255,0.9)]" />
            </a>
          </div>
        </section>
      </section>
    </div>
  )
}
