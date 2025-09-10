import { Heart, Target, Eye, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-trust-navy sm:text-4xl">
            About Human Life Care Charitable Trust
          </h2>
          <p className="mt-6 text-lg leading-8 text-soft-gray">
            Based in West Bengal, we are an NGO dedicated to serving humanity with 
            compassion and empathy, making a meaningful impact in communities across the region.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 mb-16">
          {/* Mission */}
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-hero p-3 rounded-xl mr-4">
                  <Target className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-trust-navy">Our Mission</h3>
              </div>
              <p className="text-soft-gray leading-7">
                Serving humanity with love, care, and respect, bridging gaps in 
                healthcare, education and social service. We strive to provide 
                essential support to vulnerable individuals and communities.
              </p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-accent p-3 rounded-xl mr-4">
                  <Eye className="h-6 w-6 text-trust-navy" />
                </div>
                <h3 className="text-2xl font-bold text-trust-navy">Our Vision</h3>
              </div>
              <p className="text-soft-gray leading-7">
                A world where every individual has access to quality health care, 
                education and social welfare, empowering them to live with dignity 
                and purpose.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-trust-navy mb-8">Our Core Values</h3>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="text-center">
              <div className="bg-care-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-care-blue" />
              </div>
              <h4 className="font-semibold text-trust-navy mb-2">Compassion</h4>
              <p className="text-sm text-soft-gray">Caring with empathy</p>
            </div>
            
            <div className="text-center">
              <div className="bg-care-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-care-green" />
              </div>
              <h4 className="font-semibold text-trust-navy mb-2">Equality</h4>
              <p className="text-sm text-soft-gray">Equal opportunities for all</p>
            </div>
            
            <div className="text-center">
              <div className="bg-warm-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-warm-orange" />
              </div>
              <h4 className="font-semibold text-trust-navy mb-2">Impact</h4>
              <p className="text-sm text-soft-gray">Meaningful change</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-trust-navy mb-2">Dignity</h4>
              <p className="text-sm text-soft-gray">Respect for all</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}