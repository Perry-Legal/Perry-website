"use client";

import { useEffect, useRef, useState } from "react";
import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";

type CopyEmailButtonProps = {
  email: string;
};

export function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      return;
    }

    setCopied(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="relative mt-5 inline-flex">
      <div
        role="status"
        aria-live="polite"
        className={`pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 transition-[opacity,transform] duration-200 ${
          copied
            ? "translate-y-0 opacity-100"
            : "translate-y-1 opacity-0"
        }`}
      >
        <div className="relative whitespace-nowrap rounded-md bg-foreground px-3 py-1.5 text-xs font-medium text-background shadow-sm">
          email address copied
          <span
            aria-hidden
            className="absolute top-full left-1/2 -mt-px -translate-x-1/2 border-4 border-transparent border-t-foreground"
          />
        </div>
      </div>

      <Button
        type="button"
        size="lg"
        className="btn-shine"
        onClick={handleCopy}
        aria-label={`Copy ${email} to clipboard`}
      >
        {email}
        <Copy />
      </Button>
    </div>
  );
}
