import { Award } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    title: "Google Analytics for Beginners",
    issuer: "Google Analytics Academy",
    year: "2025",
  },
  {
    title: "Forecasting & Analytics in Sales Hub",
    issuer: "HubSpot Academy",
    year: "2025",
  },
  {
    title: "SQL Micro-Certification",
    issuer: "Kaggle Learn",
    year: "2025",
  },
];

export function CertificationsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Certifications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional credentials and continuous learning achievements
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="hover-elevate transition-all"
              data-testid={`card-certification-${index}`}
            >
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-primary/10 shrink-0">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <CardTitle className="text-base leading-tight">
                      {cert.title}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      {cert.issuer}
                    </CardDescription>
                    <Badge variant="secondary" className="mt-2 text-xs">
                      {cert.year}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
