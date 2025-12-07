import { Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a
              href="mailto:anandam0127@gmail.com"
              className="p-2 rounded-md text-muted-foreground hover-elevate active-elevate-2"
              data-testid="link-footer-email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/ananda-analyst/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-muted-foreground hover-elevate active-elevate-2"
              data-testid="link-footer-linkedin"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            {currentYear} Modem Ananda. Built with modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
}
