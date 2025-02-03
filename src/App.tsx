import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Brain, Wallet, Database, Trophy, ChevronDown } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/50 to-indigo-900/80"></div>
        </div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 animate-pulse"></div>
        <div className="z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8 relative">
            <h1 className="text-7xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              Stevan Bogosavljević
            </h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 blur-xl opacity-20 -z-10"></div>
          </div>
          <p className="text-3xl text-purple-200 mb-12 font-light tracking-wide">Senior Software Engineer</p>
          <div className="flex justify-center gap-8 mb-12">
            <a href="https://github.com/stevyhacker" className="p-4 bg-white/10 rounded-2xl backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_4px_8px_rgba(0,0,0,0.3)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_6px_12px_rgba(0,0,0,0.4)] transition-all hover:scale-110 hover:bg-white/20">
              <Github size={28} className="text-purple-300" />
            </a>
            <a href="https://linkedin.com/in/stevan-bogosavljevic/" className="p-4 bg-white/10 rounded-2xl backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_4px_8px_rgba(0,0,0,0.3)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_6px_12px_rgba(0,0,0,0.4)] transition-all hover:scale-110 hover:bg-white/20">
              <Linkedin size={28} className="text-purple-300" />
            </a>
            <a href="mailto:stevan.bogosavljevic@gmail.com" className="p-4 bg-white/10 rounded-2xl backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_4px_8px_rgba(0,0,0,0.3)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_6px_12px_rgba(0,0,0,0.4)] transition-all hover:scale-110 hover:bg-white/20">
              <Mail size={28} className="text-purple-300" />
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {['Solidity', 'Smart Contracts', 'DeFi', 'React'].map((skill) => (
              <span key={skill} className="px-6 py-3 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-2xl backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_4px_8px_rgba(0,0,0,0.3)] border border-white/10">
                {skill}
              </span>
            ))}
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown size={40} className="text-purple-300" />
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/80 to-purple-900/80 backdrop-blur-xl"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: <Code2 size={32} className="text-pink-400" />,
                title: "Smart Contract Expert",
                description: "4+ years of experience with Solidity, EVM, Hardhat, and Foundry"
              },
              {
                icon: <Wallet size={32} className="text-indigo-400" />,
                title: "DeFi Enthusiast",
                description: "Specialized in DeFi protocols and NFT implementations"
              },
              {
                icon: <Database size={32} className="text-pink-400" />,
                title: "Full Stack Developer",
                description: "Proficient in React/Next.js and TypeScript"
              },
              {
                icon: <Brain size={32} className="text-purple-400" />,
                title: "Team Lead",
                description: "Led mobile development teams and mentored Android developers"
              },
            ].map((item, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_4px_8px_rgba(0,0,0,0.3)] border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-white/10 to-transparent rounded-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-purple-200">{item.title}</h3>
                    <p className="text-purple-300">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 to-pink-900/80 backdrop-blur-xl"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Side Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-2xl overflow-hidden backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_4px_8px_rgba(0,0,0,0.3)] border border-white/10">
                  <div className="aspect-video relative overflow-hidden">
                    <img src={project.image} alt={project.title} className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent opacity-60"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-purple-200">{project.title}</h3>
                      {/* <Trophy className="text-pink-400" size={24} /> */}
                    </div>
                    <p className="text-purple-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className="text-xs px-3 py-1 bg-white/10 rounded-full backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">{tech}</span>
                      ))}
                    </div>
                    <a href="#" className="inline-flex items-center text-pink-400 hover:text-pink-300 transition-colors">
                      View Project <ExternalLink size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/80 to-indigo-900/80 backdrop-blur-xl"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Let's Connect</h2>
          <p className="text-purple-200 mb-12 text-lg">
            Always open for new opportunities and interesting projects
          </p>
          <a
            href="mailto:stevan.bogosavljevic@gmail.com"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full font-semibold text-lg shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.4)] transition-all hover:scale-105"
          >
            stevan.bogosavljevic@gmail.com
            <Mail size={24} className="ml-2" />
          </a>
        </div>
      </footer>
    </div>
  );
}

const projects = [
  {
    title: "Aimons",
    description: "Digital character AI-assisted generator tool with NFT minting as a saving mechanism.",
    image: "https://images.unsplash.com/photo-1675426513824-7f1d3020b7d5?auto=format&fit=crop&q=80",
    tech: ["React", "Next.js", "Solidity", "Hardhat", "OpenZeppelin"]
  },
  {
    title: "Chain Art",
    description: "NFT minting tool with on-chain art generation capabilities.",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80",
    tech: ["Solidity", "Hardhat", "React", "TypeScript", "ERC721"]
  },
  {
    title: "Token Locker",
    description: "Simple protocol for locking ERC20 tokens with a user-friendly interface.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80",
    tech: ["React", "TypeScript", "Solidity", "Hardhat", "ethers.js"]
  }
];

export default App;