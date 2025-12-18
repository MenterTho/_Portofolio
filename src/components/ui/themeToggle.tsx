"use client";

import { Sun, Moon } from "lucide-react";
import { cn } from "@/src/lib/utils";

export function ThemeToggle({
  isDarkMode,
  onToggle,
  className,
}: {
  isDarkMode: boolean;
  onToggle: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onToggle}
      className={cn(
        "rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-muted",
        className
      )}
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-400" />
      ) : (
        <Moon className="h-6 w-6 text-zinc-800 dark:text-zinc-200" />
      )}
    </button>
  );
}
