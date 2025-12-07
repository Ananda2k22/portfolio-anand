import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const handleDownloadResume = () => {
    window.open("/api/resume", "_blank");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <a
          href="#"
          className="text-lg font-semibold text-foreground"
          data-testid="link-logo"
        >
          Ananda M.
        </a>

        <nav className="hidden md:flex items-center gap-6 flex-wrap">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-sm text-muted-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md transition-colors"
              data-testid={`link-nav-${link.label.toLowerCase()}`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2 flex-wrap">
          <ThemeToggle />
          <Button
            variant="default"
            className="hidden sm:flex"
            onClick={handleDownloadResume}
            data-testid="button-download-resume"
          >
            <Download className="h-4 w-4 mr-2" />
            Resume
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="flex flex-col px-6 py-4 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-left px-3 py-2 text-sm text-muted-foreground hover-elevate active-elevate-2 rounded-md"
                data-testid={`link-mobile-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </button>
            ))}
            <Button
              variant="default"
              className="mt-2"
              onClick={() => {
                handleDownloadResume();
                setMobileMenuOpen(false);
              }}
              data-testid="button-mobile-download-resume"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Resume
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
