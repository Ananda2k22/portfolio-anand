import { ArrowRight, Mail, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import profilePic from "@assets/prof-ile_1765126135158.jpg";

const metrics = [
  { value: "8+", label: "Dashboards Shipped" },
  { value: "40%", label: "Reporting Time Reduced" },
  { value: "500+", label: "Users Served" },
];

export function HeroSection() {
  return (
    <section id="about" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span data-testid="text-location">Bangalore, India</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Hi, I'm{" "}
              <span className="text-primary" data-testid="text-name">
                Modem Ananda
              </span>
            </h1>

            <p className="text-xl md:text-2xl font-medium text-foreground">
              Data Analyst
            </p>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              SQL + Python + BI specialist building dashboards, funnels &
              automated reporting systems. Skilled in translating business
              problems into scalable analytical models and insights.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                onClick={() =>
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                data-testid="button-view-projects"
              >
                View Projects
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                data-testid="button-get-in-touch"
              >
                Get in Touch
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="mailto:anandam0127@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md"
                data-testid="link-email"
              >
                <Mail className="h-4 w-4" />
                anandam0127@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/ananda-analyst/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md"
                data-testid="link-linkedin"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col items-center gap-8">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl" />
              <Avatar className="h-48 w-48 md:h-64 md:w-64 border-4 border-primary/20 relative">
                <AvatarImage src={profilePic} alt="Modem Ananda" className="object-cover" />
                <AvatarFallback className="text-5xl md:text-6xl font-bold bg-primary/10 text-primary">
                  MA
                </AvatarFallback>
              </Avatar>
            </div>

            <div className="grid grid-cols-3 gap-6 w-full max-w-sm">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div
                    className="text-2xl md:text-3xl font-bold font-mono text-primary"
                    data-testid={`text-metric-value-${index}`}
                  >
                    {metric.value}
                  </div>
                  <div
                    className="text-xs text-muted-foreground mt-1"
                    data-testid={`text-metric-label-${index}`}
                  >
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
