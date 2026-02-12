"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { GlowDivider } from "@/components/ui/glow-divider";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Solutions", path: "/solutions" },
  { name: "Work", path: "/work" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "About", path: "/about" },
  { name: "Insights", path: "/insights" },
  { name: "Contact", path: "/contact" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl">
      <nav className="container-wide">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link
            href="/"
            className="hover:opacity-80 transition-opacity min-h-[44px] min-w-[44px] flex items-center"
            aria-label="SEEDRIX Home"
          >
            <Image
              src="/images/Seedrix%20Black.png"
              alt="SEEDRIX"
              width={320}
              height={80}
              className="h-14 w-auto lg:h-16"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg min-h-[44px] flex items-center",
                  pathname === link.path ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button variant="hero" size="sm" asChild>
              <Link href="/get-started">Get Started</Link>
            </Button>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden min-h-[44px] min-w-[44px] p-2 -mr-2" aria-label="Open menu">
              <button type="button">{open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm pt-24">
              <div className="absolute left-6 top-6">
                <Link href="/" onClick={() => setOpen(false)} aria-label="SEEDRIX Home">
                  <Image src="/images/Seedrix%20Black.png" alt="SEEDRIX" width={240} height={60} className="h-14 w-auto" />
                </Link>
              </div>
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "py-4 text-lg font-medium transition-colors min-h-[48px] flex items-center",
                      pathname === link.path ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="mt-8">
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <Link href="/get-started" onClick={() => setOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
      <GlowDivider />
    </header>
  );
}
