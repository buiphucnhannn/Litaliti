export default function HueCitadelSketch({ className = "", color = "#A67C52", opacity = 0.4 }) {
  return (
    <svg
      viewBox="0 0 500 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ color }}
    >
      <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity={opacity}>
        {/* Base stone bastion walls */}
        <path d="M 40 230 L 110 190 L 390 190 L 460 230" />
        <path d="M 60 230 L 120 195 L 380 195 L 440 230" strokeDasharray="3 3" />
        <path d="M 110 190 L 110 145 L 390 145 L 390 190" />
        <path d="M 125 190 L 125 145" />
        <path d="M 375 190 L 375 145" />

        {/* Central main archway (Cửa Ngọ Môn) */}
        <path d="M 220 190 L 220 160 C 220 145 280 145 280 160 L 280 190" strokeWidth="1.5" />
        <path d="M 230 190 L 230 165 C 230 152 270 152 270 165 L 270 190" />
        {/* Side gateways */}
        <path d="M 160 190 L 160 168 C 160 158 190 158 190 168 L 190 190" />
        <path d="M 310 190 L 310 168 C 310 158 340 158 340 168 L 340 190" />

        {/* Terrace platform & balustrade */}
        <line x1="90" y1="145" x2="410" y2="145" strokeWidth="1.5" />
        <line x1="95" y1="138" x2="405" y2="138" />
        {/* Balustrade pillars */}
        <line x1="105" y1="138" x2="105" y2="145" />
        <line x1="135" y1="138" x2="135" y2="145" />
        <line x1="170" y1="138" x2="170" y2="145" />
        <line x1="205" y1="138" x2="205" y2="145" />
        <line x1="240" y1="138" x2="240" y2="145" />
        <line x1="260" y1="138" x2="260" y2="145" />
        <line x1="295" y1="138" x2="295" y2="145" />
        <line x1="330" y1="138" x2="330" y2="145" />
        <line x1="365" y1="138" x2="365" y2="145" />
        <line x1="395" y1="138" x2="395" y2="145" />

        {/* Lầu Ngũ Phụng - Lower tier roof */}
        <path d="M 70 138 C 110 120 180 122 250 122 C 320 122 390 120 430 138" strokeWidth="1.6" />
        <path d="M 60 135 C 75 135 85 130 95 125 L 405 125 C 415 130 425 135 440 135" strokeWidth="1.2" />

        {/* Lower Pavilion Pillars */}
        <line x1="140" y1="125" x2="140" y2="95" />
        <line x1="180" y1="125" x2="180" y2="95" />
        <line x1="220" y1="125" x2="220" y2="95" />
        <line x1="280" y1="125" x2="280" y2="95" />
        <line x1="320" y1="125" x2="320" y2="95" />
        <line x1="360" y1="125" x2="360" y2="95" />

        {/* Middle decorative frieze */}
        <line x1="130" y1="95" x2="370" y2="95" />
        <line x1="125" y1="90" x2="375" y2="90" />

        {/* Upper tier roof with curved eaves (mái cong ngũ phụng) */}
        <path d="M 100 90 C 130 75 190 76 250 76 C 310 76 370 75 400 90" strokeWidth="1.6" />
        <path d="M 90 87 C 110 85 125 78 140 70 L 360 70 C 375 78 390 85 410 87" />

        {/* Upper pavilion columns & doors */}
        <line x1="170" y1="70" x2="170" y2="45" />
        <line x1="210" y1="70" x2="210" y2="45" />
        <line x1="250" y1="70" x2="250" y2="45" />
        <line x1="290" y1="70" x2="290" y2="45" />
        <line x1="330" y1="70" x2="330" y2="45" />

        {/* Top royal roof with crest ornament */}
        <path d="M 130 45 C 160 30 210 32 250 32 C 290 32 340 30 370 45" strokeWidth="1.6" />
        <path d="M 120 42 C 145 38 170 26 250 26 C 330 26 355 38 380 42" strokeWidth="1.5" />

        {/* Central pinnacle / Dragon ridge finials */}
        <path d="M 250 26 L 250 12" strokeWidth="1.8" />
        <circle cx="250" cy="10" r="3" fill="none" strokeWidth="1.2" />
        <path d="M 120 42 C 115 35 125 30 130 32" />
        <path d="M 380 42 C 385 35 375 30 370 32" />

        {/* Subtle cloud and water swirls */}
        <path d="M 20 220 C 50 215 70 225 100 222" strokeDasharray="2 3" opacity="0.6" />
        <path d="M 400 222 C 430 225 450 215 480 220" strokeDasharray="2 3" opacity="0.6" />
      </g>
    </svg>
  );
}
