import Image from "next/image";

import { cn } from "@/lib/utils";

/** Lockup "Powered by Mindstorm" com link para o site da Mindstorm. */
export function PoweredByMindstorm({
  tone = "light",
}: {
  /** `dark` para fundos escuros, `light` (padrão) para fundos claros. */
  tone?: "dark" | "light";
}) {
  return (
    <a
      href="https://mindstorm.com.br"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex items-center gap-3 transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2",
        tone === "dark"
          ? "focus-visible:ring-white/60"
          : "focus-visible:ring-zinc-400",
      )}
    >
      <Image
        src="/logos/logo-mindstorm.png"
        alt="Mindstorm"
        width={64}
        height={32}
        className="h-8 w-auto"
      />
      <span className="flex flex-col">
        <span
          className={cn(
            "text-[10px] font-medium uppercase leading-none tracking-[0.22em]",
            tone === "dark" ? "text-white/40" : "text-zinc-400",
          )}
        >
          Powered by
        </span>
        <span
          className={cn(
            "mt-1 text-base font-semibold leading-none tracking-tight group-hover:underline group-hover:underline-offset-4",
            tone === "dark" ? "text-white" : "text-zinc-900",
          )}
        >
          Mindstorm
        </span>
      </span>
    </a>
  );
}
