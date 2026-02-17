import React from 'react';
import { Github, Linkedin, Mail, Download, ExternalLink, Briefcase, Terminal, Code, Cpu } from 'lucide-react';

export default function App() {
  const featuredProjects = [
    {
      title: "BioScout Islamabad",
      role: "Hackathon Participant",
      desc: "Built a biodiversity platform in a 2-hour hackathon. Uses AI to identify flora/fauna, aligning with UN SDG 13 & 15. Integrated RAG Q&A system for localized data.",
      tech: ["Python", "GenAI (RAG)", "Rapid Prototyping", "React"],
      link: "#" // Update this link!
    },
    {
      title: "End-to-End Event Management",
      role: "Commercial Paid Project",
      desc: "A comprehensive booking and management system built for a real-world client. Handles scheduling, resource allocation, and user bookings with a secure backend.",
      tech: ["Full Stack Web", "Database Management", "Authentication"],
      link: "#" // Update this link!
    },
    {
      title: "Sivo (Final Year Project)",
      role: "Lead Developer",
      desc: "An advanced web platform designed for AI-driven analytics. Features secure authentication, real-time data processing, and a responsive UI.",
      tech: ["React.js", "Node.js", "MongoDB", "AI Integration"],
      link: "#" // Update this link!
    }
  ];

  const otherProjects = [
    {
      title: "COVID-19 Visualization",
      desc: "Analyzed global pandemic data using Pandas & Matplotlib.",
      tech: ["Python", "Pandas", "Seaborn"],
      link: "https://colab.research.google.com/github/saail1/COVID19-Data-Visualization/blob/main/covid_visualization.ipynb"
    },
    {
      title: "Movie Rec. System",
      desc: "Content-based filtering engine using Cosine Similarity.",
      tech: ["Python", "Flask", "Scikit-learn"],
      link: "#"
    },
    {
      title: "Info Security - SHA-1",
      desc: "Custom implementation of the SHA-1 hashing algorithm.",
      tech: ["Python", "Cryptography", "Security"],
      link: "#"
    },
    {
      title: "Personal Finance Manager",
      desc: "Expense tracking tool with SQL backend.",
      tech: ["HTML/CSS", "SQL", "Database"],
      link: "#"
    },
    {
      title: "Wall Ball Game",
      desc: "Console-based game built with C++ and OOP logic.",
      tech: ["C++", "OOP", "Game Logic"],
      link: "#"
    }
  ];

  return (
    // THEME: Dark "Coder" Background with Grid Pattern
    <div className="min-h-screen bg-[#0a0a0a] text-slate-300 font-sans selection:bg-green-500 selection:text-black relative overflow-x-hidden">
      
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold font-mono text-green-400">
            &lt;Saail.dev /&gt;
          </h1>
          <a 
            href="/resume.pdf" 
            download="resume.pdf"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-mono transition-all border border-white/10"
          >
            <Download size={16} /> Download_CV
          </a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-40 pb-20 space-y-32 relative z-10">

        {/* --- HERO SECTION --- */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-8">
            {/* BADGE: HIRE & INTERNSHIP */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              AVAILABLE FOR HIRE & INTERNSHIPS
            </div>
            
            <div className="space-y-2">
              <p className="text-xl text-slate-400 font-mono">Hi, I am</p>
              <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-none">
                SAAIL<span className="text-green-500">.</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-mono text-slate-400 pt-2">
                Full_Stack_Developer <span className="text-green-500 animate-pulse">|</span>
              </h2>
            </div>

            <p className="text-lg text-slate-400 max-w-lg leading-relaxed border-l-2 border-green-500/50 pl-6">
              Software Engineering student at <strong>CUST</strong>. I build commercial-grade web apps and 
              AI solutions. Recently hacked <strong className="text-white">BioScout</strong> in 2 hours.
            </p>
            
            <div className="flex gap-6 text-slate-400 pt-4">
              <a href="https://github.com" target="_blank" className="hover:text-green-400 transition transform hover:scale-110"><Github size={28} /></a>
              <a href="https://www.linkedin.com/in/saailabbas" target="_blank" className="hover:text-blue-400 transition transform hover:scale-110"><Linkedin size={28} /></a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=maliksaail342@gmail.com" className="hover:text-white transition transform hover:scale-110"><Mail size={28} /></a>
            </div>
          </div>
          
          {/* PROFILE IMAGE */}
          <div className="relative group">
            <div className="absolute -inset-4 border-2 border-dashed border-slate-700 rounded-full animate-[spin_10s_linear_infinite] group-hover:border-green-500/50 transition"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#0a0a0a] shadow-2xl bg-slate-800">
              <img 
                src="/profile.png" 
                alt="Saail" 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition duration-500"
              />
            </div>
          </div>
        </section>

        {/* --- SKILLS MATRIX (Added Back!) --- */}
        <section className="border border-white/10 bg-black/50 rounded-xl p-8 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
            <Terminal size={18} className="text-green-500" />
            <span className="text-sm text-slate-500 font-mono">root@saail-pc:~/skills-matrix</span>
          </div>

          <div className="grid md:grid-cols-2 gap-10 font-mono">
             <div>
                <h3 className="text-green-400 mb-4 text-lg flex items-center gap-2">
                  <span className="animate-pulse">_</span>Frontend
                </h3>
                <div className="space-y-2 text-slate-400 pl-4 border-l-2 border-green-500/20">
                   <p className="hover:text-white transition cursor-default">["React.js", "Tailwind CSS", "Vite"]</p>
                   <p className="hover:text-white transition cursor-default">["JavaScript (ES6+)", "TypeScript"]</p>
                   <p className="hover:text-white transition cursor-default">["HTML5", "CSS3", "Figma"]</p>
                </div>
             </div>
             <div>
                <h3 className="text-blue-400 mb-4 text-lg flex items-center gap-2">
                  <span className="animate-pulse">_</span>Backend_&_AI
                </h3>
                <div className="space-y-2 text-slate-400 pl-4 border-l-2 border-blue-500/20">
                   <p className="hover:text-white transition cursor-default">["Python", "Node.js", "Express"]</p>
                   <p className="hover:text-white transition cursor-default">["OpenCV", "Machine Learning", "RAG"]</p>
                   <p className="hover:text-white transition cursor-default">["MongoDB", "SQL", "REST APIs"]</p>
                </div>
             </div>
          </div>
        </section>

        {/* --- EDUCATION LOG (Added Back!) --- */}
        <section className="flex flex-col md:flex-row gap-8 items-start py-10">
           <div className="md:w-1/3">
              <h2 className="text-3xl font-bold text-white mb-2 font-mono">
                <span className="text-green-500">./</span>Education
              </h2>
              <p className="text-slate-500 text-sm font-mono">Loading academic history...</p>
           </div>

           <div className="flex-1 space-y-6 border-l border-white/10 pl-8 relative">
              <span className="absolute -left-[5px] top-2 h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]"></span>
              <div>
                 <h3 className="text-xl font-bold text-white font-mono">BS Software Engineering</h3>
                 <div className="flex flex-wrap justify-between items-center text-slate-400 font-mono text-sm mt-1 mb-2">
                    <span>Capital University of Science & Technology (CUST)</span>
                    <span className="text-green-500 bg-green-500/10 px-2 py-1 rounded">2022 - 2026</span>
                 </div>
                 <p className="text-slate-500 text-sm leading-relaxed border-l-2 border-white/5 pl-4">
                    Major in Software Engineering. <br/>
                    <span className="text-slate-400">Key Coursework:</span> OOP, Data Structures (DSA), Web Engineering, Artificial Intelligence.
                 </p>
              </div>
           </div>
        </section>

        {/* --- FEATURED PROJECTS --- */}
        <section>
           <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3 font-mono">
              <Code className="text-green-500" /> Featured_Work
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <div key={index} className="group flex flex-col justify-between p-6 bg-[#111] rounded-xl border border-white/5 hover:border-green-500/50 transition-all hover:-translate-y-2">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs font-bold text-green-400 font-mono border border-green-500/20 px-2 py-1 rounded">{project.role}</span>
                      <a href={project.link} className="text-slate-500 hover:text-white"><ExternalLink size={18}/></a>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                      {project.desc}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-2 py-1 bg-[#1a1a1a] text-slate-300 text-xs rounded font-mono border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
        </section>

        {/* --- TECHNICAL PROJECTS --- */}
        <section>
           <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3 font-mono">
              <Terminal className="text-green-500" /> /bin/projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherProjects.map((project, index) => (
                <div key={index} className="p-5 bg-[#111] rounded-lg border border-white/5 hover:border-green-500/30 transition hover:bg-[#151515]">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-white font-mono">{project.title}</h3>
                    <a href={project.link} className="text-slate-600 hover:text-green-400"><ExternalLink size={16}/></a>
                  </div>
                  <p className="text-slate-500 text-sm mb-3 line-clamp-2">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs text-green-500/60 font-mono">#{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
        </section>

        {/* --- CONTACT (Updated for Hiring & Internships) --- */}
        <section className="border-t border-white/10 pt-20 text-center pb-20">
           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
              Ready to <span className="text-green-500">Collaborate?</span>
           </h2>
           <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              I am available for <strong>immediate hiring</strong> and <strong>internship roles</strong>. 
              Let's discuss how I can contribute to your engineering team.
           </p>
           
           <div className="flex justify-center gap-6">
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=maliksaail342@gmail.com" 
                target="_blank"
                className="group relative px-8 py-4 bg-green-600 hover:bg-green-500 text-black font-bold font-mono rounded overflow-hidden transition-all"
              >
                <div className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative flex items-center gap-2">
                   <Mail size={20} /> Send_Email
                </span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/saailabbas" 
                target="_blank"
                className="px-8 py-4 border border-white/10 hover:border-white/30 text-white font-mono rounded transition-all hover:bg-white/5"
              >
                LinkedIn_Profile
              </a>
              {/* Footer Section */}
      <footer className="bg-black/50 backdrop-blur-md border-t border-white/10 mt-20 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 font-mono text-sm">
            © {new Date().getFullYear()} <span className="text-green-400 font-bold">Saail</span>. 
            All rights reserved.
          </p>
          <div className="flex justify-center gap-6 mt-4 opacity-70">
            <a href="https://github.com/YOUR_GITHUB" className="hover:text-green-400 transition-colors text-sm">GitHub</a>
            <a href="https://linkedin.com/in/YOUR_LINKEDIN" className="hover:text-green-400 transition-colors text-sm">LinkedIn</a>
            <a href="mailto:YOUR_EMAIL@gmail.com" className="hover:text-green-400 transition-colors text-sm">Email</a>
          </div>
        </div>
      </footer>
           </div>
        </section>

      </main>

      <footer className="py-8 text-center text-slate-600 text-sm border-t border-white/5 font-mono">
        <p>git commit -m "2026 Portfolio" | Built by Saail</p>
      </footer>
    </div>
  );
}