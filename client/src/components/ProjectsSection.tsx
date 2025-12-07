import { ExternalLink, Activity, GraduationCap, Heart } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    icon: Activity,
    title: "SS-MIS (Eye Health Program Analytics)",
    description:
      "End-to-end analytics platform tracking patient journey from screening to surgery, with conversion funnels and partner performance KPIs.",
    responsibilities: [
      "Analyzed screening to surgery conversion metrics",
      "Designed SQL models for drop-off analysis",
      "Automated nightly data refresh pipelines",
    ],
    techStack: ["SQL", "CTEs", "Window Functions", "Superset", "Python", "Airflow", "PostgreSQL"],
    metrics: [
      { label: "Patient Journey Stages", value: "4" },
      { label: "Daily Data Refresh", value: "Auto" },
      { label: "Partner KPIs", value: "15+" },
    ],
  },
  {
    icon: GraduationCap,
    title: "Education Analytics",
    description:
      "Comprehensive dashboards for student performance tracking, grade improvement trends, and teacher effectiveness measurement.",
    responsibilities: [
      "Built student performance dashboards",
      "Designed learning proficiency indicators",
      "Created downloadable Excel/PDF reports",
    ],
    techStack: ["SQL", "Power BI", "Superset", "Pandas", "Excel", "PostgreSQL"],
    metrics: [
      { label: "Schools Covered", value: "50+" },
      { label: "Report Types", value: "8" },
      { label: "Subject Analysis", value: "All" },
    ],
  },
  {
    icon: Heart,
    title: "LEPRA Health Analytics",
    description:
      "Patient lifecycle dashboards for leprosy care program, from registration through diagnosis to treatment completion tracking.",
    responsibilities: [
      "Built patient lifecycle dashboards",
      "Designed clinical KPI models",
      "Automated high-frequency monitoring reports",
    ],
    techStack: ["SQL", "Superset", "Python", "PostgreSQL", "Automated Reporting"],
    metrics: [
      { label: "Case Detection", value: "Real-time" },
      { label: "Treatment Tracking", value: "Daily" },
      { label: "Report Frequency", value: "Daily/Weekly" },
    ],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world analytics solutions for healthcare and education programs
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-visible"
              data-testid={`card-project-${index}`}
            >
              <CardHeader>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-primary/10">
                      <project.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription className="mt-1">
                        {project.description}
                      </CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3">
                    Key Contributions
                  </h4>
                  <ul className="space-y-2">
                    {project.responsibilities.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  {project.metrics.map((metric, metricIndex) => (
                    <div
                      key={metricIndex}
                      className="bg-muted/50 rounded-md p-3 text-center"
                    >
                      <div className="text-lg font-bold font-mono text-primary">
                        {metric.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="font-mono text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
