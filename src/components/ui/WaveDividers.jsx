export function WaveTop({
  fill = "#FBF8F3",
  className = "",
  height = "h-12 md:h-20 lg:h-24",
}) {
  return (
    <div className={`w-full overflow-hidden leading-none ${height} ${className} pointer-events-none select-none`}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        preserveAspectRatio="none"
        className="w-full h-full block"
      >
        <path
          d="M0,0 C320,85 540,115 820,60 C1100,5 1280,75 1440,30 L1440,120 L0,120 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

export function WaveBottom({
  fill = "#FBF8F3",
  className = "",
  height = "h-12 md:h-20 lg:h-24",
}) {
  return (
    <div className={`w-full overflow-hidden leading-none ${height} ${className} pointer-events-none select-none`}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        preserveAspectRatio="none"
        className="w-full h-full block"
      >
        <path
          d="M0,120 C320,35 540,5 820,60 C1100,115 1280,45 1440,90 L1440,0 L0,0 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

export function WaveHeroBottom({
  fill = "#FBF8F3",
  className = "",
}) {
  return (
    <div className={`w-full overflow-hidden leading-none h-14 md:h-20 lg:h-24 ${className} pointer-events-none select-none`}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        preserveAspectRatio="none"
        className="w-full h-full block"
      >
        <path
          d="M0,45 C280,110 580,120 860,65 C1140,10 1340,55 1440,25 L1440,120 L0,120 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

export function WaveDarkIn({
  fill = "#3A2A1F",
  className = "",
  height = "h-14 md:h-20 lg:h-24",
}) {
  return (
    <div className={`w-full overflow-hidden leading-none ${height} ${className} pointer-events-none select-none`}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        preserveAspectRatio="none"
        className="w-full h-full block"
      >
        <path
          d="M0,60 C360,120 720,20 1080,85 C1260,110 1380,80 1440,60 L1440,120 L0,120 Z"
          fill={fill}
        />
        <path
          d="M0,60 C360,120 720,20 1080,85 C1260,110 1380,80 1440,60"
          stroke="#A67C52"
          strokeOpacity="0.45"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    </div>
  );
}

export function WaveDarkOut({
  fill = "#FBF8F3",
  className = "",
}) {
  return (
    <div className={`w-full overflow-hidden leading-none h-14 md:h-20 lg:h-24 ${className} pointer-events-none select-none`}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        preserveAspectRatio="none"
        className="w-full h-full block"
      >
        <path
          d="M0,40 C340,115 680,105 1020,40 C1200,5 1350,30 1440,65 L1440,120 L0,120 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
