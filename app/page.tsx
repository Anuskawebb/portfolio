import { Card } from "@/components/ui/card"
import Image from "next/image"
import projectImg1 from "@/app/screenPreviews/image.png"
import projectImg2 from "@/app/screenPreviews/image2.jpg"
import projectImg3 from "@/app/screenPreviews/image3.jpg"

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
        <nav className="flex gap-12">
          <a href="#" className="text-white hover:text-[#9857d3] transition-colors text-lg">
            Home
          </a>
          <a href="#" className="text-white hover:text-[#9857d3] transition-colors text-lg">
            About
          </a>
          <a href="#" className="text-white hover:text-[#9857d3] transition-colors text-lg">
            Lab
          </a>
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
              <div className="absolute inset-0 bg-gradient-to-br from-[#9857d3] to-[#a362ff] rounded-3xl blur-2xl opacity-60 scale-110"></div>
              <img
                src="/female-developer-avatar-3d-style-with-laptop.jpg"
                alt="Profile"
                className="w-48 h-48 rounded-3xl object-cover relative z-10 shadow-2xl"
              />
            </div>
          </div>

          <div className="text-left">
            <p className="text-[#ccd6f6] text-lg mb-4 font-medium">A Web Developer</p>
            <h1 className="text-6xl font-bold mb-4 leading-tight text-white">
              Who Builds
              <br />
              Ideas Into{" "}
              <span className="relative">
                <span className="text-[#a362ff] font-bold">Reality</span>
                {/* Hand-drawn circle around Reality */}
                <svg className="absolute -inset-4 w-full h-full" viewBox="0 0 200 80" fill="none">
                  <ellipse
                    cx="100"
                    cy="40"
                    rx="90"
                    ry="35"
                    stroke="#9857d3"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="3,2"
                    opacity="0.8"
                  />
                </svg>
              </span>
              ...
            </h1>
            <p className="text-[#ccd6f6] text-lg font-medium">Because reality looks better when powered by code.</p>
          </div>
        </div>

        {/* About Section */}
        <div className="max-w-3xl text-left mb-20">
          <h2 className="text-4xl font-bold mb-8 text-white">I'm a Web2/Web3 Dev .</h2>
          <p className="text-[#ccd6f6] mb-6 leading-relaxed text-lg">
            Recently graduated with a BCA (9.01 CGPA), exploring Web2 & Web3 development through projects and
            hackathons.
          </p>
          <p className="text-[#ccd6f6] leading-relaxed text-lg">
            A self-taught web developer passionate about designing responsive websites and building full-stack
            applications. Currently expanding into Web3, learning Solidity, and exploring how to craft DApps for the
            future of the web.
          </p>
        </div>

        {/* Academic Background */}
        <div className="max-w-2xl mb-20">
          <h3 className="text-2xl font-bold mb-8">Academic Background</h3>
          <Card className="bg-gradient-to-r from-[#2b215a] to-[#2b0b3a] border-[#4f228d] p-8 rounded-2xl">
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

        {/* Team Section */}
        <div className="text-center mb-20">
          <p className="text-[#b5bddb] mb-2 text-lg">
            I'm currently looking to join a <span className="text-[#9857d3]">cross-functional</span> team
          </p>
          <p className="text-[#b5bddb] text-sm mb-12">That values improving people's lives through accessible design</p>

          <div className="flex justify-center gap-3 flex-wrap mb-4">
            <div className="w-12 h-12 bg-[#2b215a] rounded-xl flex items-center justify-center border border-[#4f228d]">
              <span className="text-[#9857d3] text-lg">⚛</span>
            </div>
            <div className="w-12 h-12 bg-[#2b215a] rounded-xl flex items-center justify-center border border-[#4f228d]">
              <span className="text-[#9857d3] text-sm font-bold">JS</span>
            </div>
            <div className="w-12 h-12 bg-[#2b215a] rounded-xl flex items-center justify-center border border-[#4f228d]">
              <span className="text-[#9857d3] text-sm font-bold">TS</span>
            </div>
            <div className="w-12 h-12 bg-[#2b215a] rounded-xl flex items-center justify-center border border-[#4f228d]">
              <span className="text-[#9857d3] text-lg">N</span>
            </div>
            <div className="w-12 h-12 bg-[#2b215a] rounded-xl flex items-center justify-center border border-[#4f228d]">
              <span className="text-[#9857d3] text-lg">🐍</span>
            </div>
            <div className="w-12 h-12 bg-[#2b215a] rounded-xl flex items-center justify-center border border-[#4f228d]">
              <span className="text-[#9857d3] text-lg">⚡</span>
            </div>
          </div>
          <div className="flex justify-center gap-3 flex-wrap">
            <div className="w-12 h-12 bg-[#2b215a] rounded-xl flex items-center justify-center border border-[#4f228d]">
              <span className="text-[#9857d3] text-lg">📱</span>
            </div>
            <div className="w-12 h-12 bg-[#2b215a] rounded-xl flex items-center justify-center border border-[#4f228d]">
              <span className="text-[#9857d3] text-lg">🌐</span>
            </div>
            <div className="w-12 h-12 bg-[#2b215a] rounded-xl flex items-center justify-center border border-[#4f228d]">
              <span className="text-[#9857d3] text-lg">🔗</span>
            </div>
            <div className="w-12 h-12 bg-[#2b215a] rounded-xl flex items-center justify-center border border-[#4f228d]">
              <span className="text-[#9857d3] text-lg">💾</span>
            </div>
            <div className="w-12 h-12 bg-[#2b215a] rounded-xl flex items-center justify-center border border-[#4f228d]">
              <span className="text-[#9857d3] text-lg">🎨</span>
            </div>
            <div className="w-12 h-12 bg-[#2b215a] rounded-xl flex items-center justify-center border border-[#4f228d]">
              <span className="text-[#9857d3] text-lg">🔧</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-40 relative">
          <div className="relative">
            {/* Main logo circle */}
            <div className="w-40 h-40 bg-gradient-to-br from-[#9857d3] to-[#a362ff] rounded-full flex items-center justify-center relative z-10 shadow-2xl">
              <span className="text-white text-5xl font-bold">Ʃ</span>
            </div>
            {/* Glow effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#9857d3] to-[#a362ff] rounded-full blur-2xl opacity-60 scale-125 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#9857d3] to-[#a362ff] rounded-full blur-3xl opacity-30 scale-150"></div>
            {/* Orbital elements */}
            <div className="absolute -inset-20">
              <div className="w-2 h-2 bg-[#9857d3] rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 opacity-60"></div>
              <div className="w-1 h-1 bg-[#a362ff] rounded-full absolute bottom-0 right-1/4 opacity-40"></div>
              <div className="w-1.5 h-1.5 bg-[#9857d3] rounded-full absolute left-0 top-1/3 opacity-50"></div>
              <div className="w-1 h-1 bg-[#a362ff] rounded-full absolute right-0 bottom-1/3 opacity-60"></div>
            </div>
          </div>
        </div>

        {/* Example Projects */}
        <div className="space-y-32">
          {/* Project 1 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center relative">
            <div>
              <p className="text-[#9857d3] text-sm font-medium mb-2 uppercase tracking-wider">Featured Project</p>
              <h3 className="text-4xl font-bold mb-8 text-white">Example Project</h3>

              <div className="relative z-20 lg:-mr-24">
                <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/15 shadow-2xl">
                  <p className="text-[#ccd6f6] leading-relaxed text-base">
                    A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently
                    played tracks, and detailed audio information about each track. Create and save new playlists of
                    recommended tracks based on your existing playlists and more.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-[#2b0b3a] to-[#1a0b2e] rounded-3xl blur-2xl opacity-70"></div>
              <div className="relative bg-gradient-to-br from-[#2b0b3a] to-[#1a0b2e] p-6 rounded-3xl">
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
            </div>
          </div>

          {/* Project 2 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center relative">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-[#2b0b3a] to-[#1a0b2e] rounded-3xl blur-2xl opacity-70"></div>
              <div className="relative bg-gradient-to-br from-[#2b0b3a] to-[#1a0b2e] p-6 rounded-3xl">
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
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-[#9857d3] text-sm font-medium mb-2 uppercase tracking-wider">Featured Project</p>
              <h3 className="text-4xl font-bold mb-8 text-white">Example Project</h3>

              <div className="relative z-20 lg:-ml-24">
                <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl mb-0 border border-white/15 shadow-2xl">
                  <p className="text-[#ccd6f6] leading-relaxed text-base">
                    A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently
                    played tracks, and detailed audio information about each track. Create and save new playlists of
                    recommended tracks based on your existing playlists and more.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center relative">
            <div>
              <p className="text-[#9857d3] text-sm font-medium mb-2 uppercase tracking-wider">Featured Project</p>
              <h3 className="text-4xl font-bold mb-8 text-white">Example Project</h3>

              <div className="relative z-20 lg:-mr-24">
                <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/15 shadow-2xl">
                  <p className="text-[#ccd6f6] leading-relaxed text-base">
                    A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently
                    played tracks, and detailed audio information about each track. Create and save new playlists of
                    recommended tracks based on your existing playlists and more.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-[#2b0b3a] to-[#1a0b2e] rounded-3xl blur-2xl opacity-70"></div>
              <div className="relative bg-gradient-to-br from-[#2b0b3a] to-[#1a0b2e] p-6 rounded-3xl">
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
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-32 pb-16">
          <div className="w-4 h-4 bg-[#9857d3] rounded-full"></div>
          <div className="w-4 h-4 bg-[#2b215a] rounded-full border border-[#4f228d]"></div>
          <div className="w-4 h-4 bg-[#2b215a] rounded-full border border-[#4f228d]"></div>
        </div>
      </section>
    </div>
  )
}
