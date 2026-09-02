import Link from "next/link";

import type { HeaderContrast } from "@/hooks/use-adaptive-header";
import { solutionLinks } from "@/lib/navigation";
import { cn } from "@/lib/utils";

type SolutionNavMenuProps = {
  contrast?: HeaderContrast;
};

export function SolutionNavMenu({ contrast = "on-light" }: SolutionNavMenuProps) {
  const onDark = contrast === "on-dark";

  return (
    <ul className="space-y-0.5 p-2">
      {solutionLinks.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={cn(
              "block w-full rounded-lg px-3 py-2 text-left text-sm transition-colors",
              onDark
                ? "text-white/70 hover:bg-white/10 hover:text-white"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
