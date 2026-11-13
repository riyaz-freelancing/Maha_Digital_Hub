import React from "react"

export function Logo({ className = "", size = "default", onClick }) {
  const isLarge = size === "large"

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-3 select-none cursor-pointer group ${className}`}
    >
      {/* Official Dynamic 3D M Mark (Cyan Orbit + Purple Arrow) */}
      <div className="relative shrink-0 flex items-center justify-center">
        <img
          src="/images/logo-mark.png?v=2"
          alt="Maha Digital Hub Logo"
          className={`${
            isLarge ? "h-11 sm:h-12" : "h-9 sm:h-10"
          } w-auto object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105`}
          onError={(e) => {
            e.target.onerror = null
            e.target.src = "/images/logo-full.png"
          }}
        />
      </div>

      {/* Typography Hierarchy matching Official Logo: MAHA — DIGITAL HUB — */}
      <div className="flex flex-col tracking-tight justify-center">
        <div className="flex items-center">
          <span
            className={`${
              isLarge ? "text-2xl sm:text-[1.65rem]" : "text-xl sm:text-2xl"
            } font-black tracking-tight text-[#0B132B] font-display uppercase leading-none group-hover:text-blue-600 transition-colors`}
          >
            MAHA
          </span>
        </div>
        <div className="flex items-center gap-1.5 mt-1">
          <span className="w-2.5 h-[1.5px] bg-blue-600/70 inline-block rounded-full" />
          <span
            className={`${
              isLarge ? "text-[11px] tracking-[0.22em]" : "text-[9.5px] tracking-[0.2em]"
            } font-black uppercase text-blue-600 font-mono leading-none`}
          >
            DIGITAL HUB
          </span>
          <span className="w-2.5 h-[1.5px] bg-blue-600/70 inline-block rounded-full" />
        </div>
      </div>
    </div>
  )
}
