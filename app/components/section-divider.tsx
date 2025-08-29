import React from "react";

type Props = {
  /** largura máxima (ex.: 'max-w-5xl'), deixe vazio para ocupar toda a largura */
  maxWidthClass?: string;
  /** opacidade geral (0–1) */
  opacity?: number;
};

export default function SectionSeparator({ maxWidthClass = "", opacity = 0.9 }: Props) {
  return (
    <div className={`w-full ${maxWidthClass} mx-auto py-2`} aria-hidden="true">
      {/* linha central 1px com gradiente sutil */}
      <div
        style={{
          height: 1,
          background:
            "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(20,14,8,0.7) 15%, rgba(28,18,12,0.8) 50%, rgba(20,14,8,0.7) 85%, rgba(0,0,0,0) 100%)",
          opacity,
        }}
      />
      {/* glow muito leve para suavizar (blur) */}
      <div
        style={{
          height: 8,
          marginTop: -4,
          filter: "blur(6px)",
          background:
            "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(26,14,0,0.20) 20%, rgba(27,18,0,0.25) 50%, rgba(26,14,0,0.20) 80%, rgba(0,0,0,0) 100%)",
          opacity: Math.min(opacity, 0.6),
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
