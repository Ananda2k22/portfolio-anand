import { Briefcase, CheckCircle2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Data Analyst",
    company: "Social Bytes Technologies Pvt Ltd",
    location: "Bangalore",
    period: "Oct 2024 – Present",
    achievements: [
      "Designed & shipped 8+ analytics dashboards using Apache Superset and Power BI",
      "Improved decision-making speed by 30% across product, operations, and leadership teams",
      "Wrote complex SQL (CTEs, window functions, subqueries) on PostgreSQL for large datasets",
      "Built automated data pipelines using Python, Airflow, and DBT reducing data refresh time by 40%",
      "Eliminated 5–6 hours of weekly manual reporting through automation",
      "Embedded dashboards with row-level security (RLS) for 8+ projects",
      "Conducted deep-dive analyses on user behaviour, funnel drop-offs, and partner performance",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Work Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional experience in data analytics and business intelligence
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-8">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
              <div className="absolute left-0 top-0 -translate-x-1/2 p-1 bg-background rounded-full border border-border">
                <Briefcase className="h-4 w-4 text-primary" />
              </div>

              <Card data-testid={`card-experience-${index}`}>
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="mt-1">
                        {exp.company} • {exp.location}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="font-mono text-xs">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li
                        key={achievementIndex}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
