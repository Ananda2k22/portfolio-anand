import { Database, Code, BarChart3, Workflow } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    icon: Database,
    title: "SQL",
    skills: [
      "Joins & CTEs",
      "Window Functions",
      "Query Optimization",
      "Performance Debugging",
    ],
  },
  {
    icon: Code,
    title: "Python",
    skills: [
      "Pandas & NumPy",
      "Automation Scripts",
      "Data Cleaning",
      "API Integration",
    ],
  },
  {
    icon: BarChart3,
    title: "BI Tools",
    skills: [
      "Apache Superset",
      "Power BI",
      "Looker Studio",
      "Excel & Sheets",
    ],
  },
  {
    icon: Workflow,
    title: "Data Engineering",
    skills: [
      "Airflow & DBT",
      "ETL Pipelines",
      "Data Modeling",
      "PostgreSQL & MySQL",
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Core competencies in data analysis, visualization, and engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="hover-elevate transition-all"
              data-testid={`card-skill-${category.title.toLowerCase()}`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-primary/10">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
