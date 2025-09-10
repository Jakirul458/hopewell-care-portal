import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const socialLinks = [
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "LinkedIn", href: "#", icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="bg-trust-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-hero p-2 rounded-lg">
                <Heart className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">Human Life Care</span>
                <span className="text-sm text-gray-300">Charitable Trust</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Caring for Humanity. Serving humanity with love, care, and respect, 
              bridging gaps in healthcare, education and social service.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-warm-orange" />
                <span className="text-sm">+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-warm-orange" />
                <span className="text-sm">info@humanlifecaretrust.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-warm-orange" />
                <span className="text-sm">West Bengal, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-warm-orange transition-colors">About Us</Link></li>
              <li><Link to="/mission" className="text-gray-300 hover:text-warm-orange transition-colors">Our Mission</Link></li>
              <li><Link to="/vision" className="text-gray-300 hover:text-warm-orange transition-colors">Our Vision</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-warm-orange transition-colors">Projects</Link></li>
              <li><Link to="/events" className="text-gray-300 hover:text-warm-orange transition-colors">Events</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-300 hover:text-warm-orange transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <div className="mt-6">
              <p className="text-xs text-gray-400 mb-2">
                Beneficiaries: 6,000+ across different sectors
              </p>
              <p className="text-xs text-gray-400">
                Registered NGO in West Bengal, India
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-700">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <p className="text-center text-xs text-gray-400">
            © 2024 Human Life Care Charitable Trust. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}