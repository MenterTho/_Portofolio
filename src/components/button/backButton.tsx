"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push('/#projects')}  
      className="
        inline-flex items-center gap-2
        text-sm font-medium
        text-muted-foreground
        hover:text-primary
        transition-colors
      "
    >
      <ArrowLeft size={18} />
      Back
    </button>
  );
}