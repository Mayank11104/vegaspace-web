export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-white/10 flex flex-col items-center justify-center relative overflow-hidden font-sans">
      {/* Dynamic Background Glow Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-gradient-to-b from-blue-600/20 via-purple-600/10 to-transparent blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 to-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-4xl px-6 text-center">
        {/* Animated Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-10 shadow-xl shadow-black/50">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
          </span>
          <span className="text-sm font-medium tracking-wide text-zinc-300">Early Access Coming Soon</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight mb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
            Vegaspace
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-zinc-400 mb-12 max-w-2xl leading-relaxed font-medium">
          The AI-orchestrated unified developer workspace. Bridges your IDE, terminal, and DevOps pipelines into a single, high-performance interface.
        </p>

        {/* Email Signup Form */}
        <div className="w-full max-w-md relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-purple-600/30 rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
          <form className="relative flex w-full bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-xl p-1.5 focus-within:border-white/30 transition-colors shadow-2xl">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-transparent px-4 py-3 text-base text-white placeholder-zinc-500 focus:outline-none"
              required
            />
            <button 
              type="submit"
              className="px-6 py-3 rounded-lg bg-white text-zinc-950 font-semibold text-sm hover:bg-zinc-200 hover:scale-[0.98] active:scale-95 transition-all duration-200"
            >
              Get Notified
            </button>
          </form>
        </div>

        {/* Links or Socials */}
        <div className="mt-20 text-sm text-zinc-500 flex items-center gap-6 font-medium">
          <a href="#" className="hover:text-white transition-colors duration-200">X (Twitter)</a>
          <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
          <a href="#" className="hover:text-white transition-colors duration-200">GitHub</a>
          <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
          <a href="#" className="hover:text-white transition-colors duration-200">Documentation</a>
        </div>
      </div>
    </main>
  );
}