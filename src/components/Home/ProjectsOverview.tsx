import { 
  Heart, 
  Home, 
  GraduationCap, 
  Stethoscope, 
  Users, 
  Baby, 
  Droplet,
  Shield 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const projects = [
  {
    icon: Heart,
    title: "Charity & Relief Project",
    subtitle: "Compassion in Action: Serving the needy",
    description: "Food, shelter, education and healthcare support for vulnerable populations, promoting dignity and equality.",
    color: "care-blue",
  },
  {
    icon: Stethoscope,
    title: "Health Care & Medical Project",
    subtitle: "Medical Aid & Support",
    description: "Comprehensive healthcare services and medical aid for low-income families and communities in need.",
    color: "care-green",
  },
  {
    icon: Home,
    title: "Street Lives Care Project",
    subtitle: "Street to Home & Feed the Hungry",
    description: "Rehabilitation programs for homeless individuals and food distribution to those in need.",
    color: "warm-orange",
  },
  {
    icon: Shield,
    title: "Cancer Care Project",
    subtitle: "Support for Cancer Patients",
    description: "Comprehensive care and support for cancer patients and their families during treatment.",
    color: "primary",
  },
  {
    icon: Users,
    title: "Leprosy Care Project",
    subtitle: "Care and Rehabilitation",
    description: "Medical care, rehabilitation, and social support for individuals affected by leprosy.",
    color: "secondary",
  },
  {
    icon: Baby,
    title: "Child Care Project",
    subtitle: "Supporting Vulnerable Children",
    description: "Education, nutrition, healthcare, and protection services for children in need.",
    color: "care-blue",
  },
  {
    icon: Droplet,
    title: "Thalassemia Prevention",
    subtitle: "Awareness & Prevention Campaign",
    description: "Community awareness programs and support for thalassemia prevention and care.",
    color: "care-green",
  },
  {
    icon: Heart,
    title: "Blood Donation Camp",
    subtitle: "Life-Saving Blood Drives",
    description: "Regular blood donation drives and awareness campaigns to save lives in our community.",
    color: "warm-orange",
  },
];

export default function ProjectsOverview() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-trust-navy sm:text-4xl">
            Our Projects & Programmes
          </h2>
          <p className="mt-6 text-lg leading-8 text-soft-gray">
            Comprehensive initiatives addressing healthcare, education, and social welfare 
            to create lasting impact in communities across West Bengal.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-all duration-300 border-0 bg-gradient-card cursor-pointer hover:scale-105"
            >
              <CardContent className="p-6">
                <div className={`bg-${project.color}/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <project.icon className={`h-7 w-7 text-${project.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-trust-navy mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-warm-orange mb-3">
                  {project.subtitle}
                </p>
                <p className="text-sm text-soft-gray leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/projects">
            <Button size="lg" className="bg-primary hover:bg-primary-hover shadow-soft">
              View All Projects
            </Button>
          </Link>
        </div>

        {/* Target Beneficiaries Section */}
        <div className="mt-20 bg-muted/30 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-trust-navy mb-4">
              Target Beneficiaries
            </h3>
            <p className="text-soft-gray max-w-3xl mx-auto">
              Our programs serve diverse communities, focusing on vulnerable groups 
              and those in need of essential healthcare, education, and social support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-background rounded-2xl shadow-soft">
              <div className="text-2xl font-bold text-care-blue mb-2">Children & Orphans</div>
              <p className="text-sm text-soft-gray">Education, nutrition, and protection services</p>
            </div>
            
            <div className="text-center p-6 bg-background rounded-2xl shadow-soft">
              <div className="text-2xl font-bold text-care-green mb-2">Women & Girls</div>
              <p className="text-sm text-soft-gray">Empowerment and livelihood programs</p>
            </div>
            
            <div className="text-center p-6 bg-background rounded-2xl shadow-soft">
              <div className="text-2xl font-bold text-warm-orange mb-2">Elderly Citizens</div>
              <p className="text-sm text-soft-gray">Healthcare and social support</p>
            </div>
            
            <div className="text-center p-6 bg-background rounded-2xl shadow-soft">
              <div className="text-2xl font-bold text-primary mb-2">Patients</div>
              <p className="text-sm text-soft-gray">Medical care and treatment support</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="inline-flex items-center bg-gradient-hero text-primary-foreground px-6 py-3 rounded-full">
              <Users className="h-5 w-5 mr-2" />
              <span className="font-semibold">6,000+ Total Beneficiaries Served</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}