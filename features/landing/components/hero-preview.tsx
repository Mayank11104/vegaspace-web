import { cn } from "@/lib/utils";

interface HeroPreviewProps {
  name: string;
  vibe: string;
  baseColor: string;
  surfaceColor: string;
  accentColor: string;
  textColor: string;
  mutedColor: string;
}

export function HeroPreview({
  name,
  vibe,
  baseColor,
  surfaceColor,
  accentColor,
  textColor,
  mutedColor,
}: HeroPreviewProps) {
  return (
    <section 
      className="w-full min-h-[90vh] flex flex-col items-center justify-center p-8 transition-colors duration-700 relative overflow-hidden"
      style={{ backgroundColor: baseColor }}
    >
      {/* Dynamic Glow using the accent color */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] blur-[120px] rounded-full pointer-events-none opacity-20"
        style={{ backgroundColor: accentColor }}
      />
      
      <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Copy */}
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border shadow-sm backdrop-blur-sm self-start"
               style={{ backgroundColor: surfaceColor, borderColor: `${accentColor}40` }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: accentColor }} />
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: mutedColor }}>
              {name}
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]"
              style={{ color: textColor }}>
            Unified Dev Workspace
          </h1>
          
          <p className="text-lg leading-relaxed max-w-xl" style={{ color: mutedColor }}>
            {vibe}. Showcasing the 60-30-10 ratio.
          </p>
          
          <div className="flex items-center gap-4 mt-4">
            <button 
              className="px-6 py-3 rounded-lg font-semibold transition-transform hover:scale-105 shadow-md"
              style={{ backgroundColor: accentColor, color: baseColor }}
            >
              Request Access
            </button>
            <button 
              className="px-6 py-3 rounded-lg font-medium border transition-colors hover:bg-black/5 dark:hover:bg-white/5"
              style={{ borderColor: surfaceColor, color: textColor, backgroundColor: `${surfaceColor}50` }}
            >
              Documentation
            </button>
          </div>
        </div>
        
        {/* Right Side: Mock UI (The 30% Surface) */}
        <div 
          className="rounded-2xl border shadow-2xl p-6 flex flex-col gap-4 relative w-full h-[400px] transition-transform hover:scale-[1.02] duration-500"
          style={{ backgroundColor: surfaceColor, borderColor: `${textColor}15` }}
        >
          {/* Mock Window Header */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          
          {/* Mock Content */}
          <div className="space-y-4">
            <div className="h-4 rounded-md w-3/4 opacity-50" style={{ backgroundColor: mutedColor }} />
            <div className="h-4 rounded-md w-1/2 opacity-50" style={{ backgroundColor: mutedColor }} />
            <div className="h-32 rounded-lg mt-4 border border-dashed flex items-center justify-center"
                 style={{ borderColor: `${accentColor}50`, backgroundColor: `${accentColor}10` }}>
              <span className="font-mono text-sm" style={{ color: accentColor }}>
                System Orchestration Active
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
