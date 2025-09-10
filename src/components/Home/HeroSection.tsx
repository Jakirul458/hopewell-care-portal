import { ArrowRight, Users, Heart, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="People helping each other in community"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-trust-navy/80 via-care-blue/70 to-care-green/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Welcome to{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Human Life Care
            </span>{" "}
            Charitable Trust
          </h1>
          
          <p className="text-xl leading-8 mb-8 text-gray-100 max-w-3xl mx-auto">
            An NGO dedicated to serving humanity with compassion and empathy. 
            Our mission is to provide essential support to vulnerable individuals 
            and communities, ensuring dignity, equality and opportunities for holistic growth.
          </p>

          <div className="mb-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/projects">
              <Button size="lg" className="bg-primary hover:bg-primary-hover shadow-hero text-lg px-8 py-4">
                Explore Our Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4">
                Get Involved
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-card">
              <div className="flex items-center justify-center mb-3">
                <Users className="h-8 w-8 text-warm-orange" />
              </div>
              <div className="text-3xl font-bold mb-1">6,000+</div>
              <div className="text-gray-200">Beneficiaries Served</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-card">
              <div className="flex items-center justify-center mb-3">
                <Heart className="h-8 w-8 text-warm-orange" />
              </div>
              <div className="text-3xl font-bold mb-1">8+</div>
              <div className="text-gray-200">Active Projects</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-card">
              <div className="flex items-center justify-center mb-3">
                <Target className="h-8 w-8 text-warm-orange" />
              </div>
              <div className="text-3xl font-bold mb-1">5+</div>
              <div className="text-gray-200">Focus Areas</div>
            </div>
          </div>
        </div>

        {/* Slogan */}
        <div className="mt-16">
          <p className="text-2xl font-semibold text-warm-orange italic">
            "Caring for Humanity"
          </p>
        </div>
      </div>
    </section>
  );
}