import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactSection() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-trust-navy sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-6 text-lg leading-8 text-soft-gray">
            Ready to make a difference? Contact us to learn more about our work 
            or to get involved in our mission to serve humanity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <Card className="bg-gradient-card border-0 shadow-card mb-8">
              <CardHeader>
                <CardTitle className="text-trust-navy">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-care-blue/10 p-3 rounded-lg">
                    <Phone className="h-5 w-5 text-care-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-trust-navy">Phone</h4>
                    <p className="text-soft-gray">+91 XXXXX XXXXX</p>
                    <p className="text-soft-gray">+91 XXXXX XXXXX</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-care-green/10 p-3 rounded-lg">
                    <Mail className="h-5 w-5 text-care-green" />
                  </div>
                  <div>
                    <h4 className="font-medium text-trust-navy">Email</h4>
                    <p className="text-soft-gray">info@humanlifecaretrust.org</p>
                    <p className="text-soft-gray">contact@humanlifecaretrust.org</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-warm-orange/10 p-3 rounded-lg">
                    <MapPin className="h-5 w-5 text-warm-orange" />
                  </div>
                  <div>
                    <h4 className="font-medium text-trust-navy">Address</h4>
                    <p className="text-soft-gray">
                      Human Life Care Charitable Trust<br />
                      West Bengal, India<br />
                      PIN: XXXXXX
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-trust-navy">Office Hours</h4>
                    <p className="text-soft-gray">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="bg-gradient-hero border-0 text-primary-foreground">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4">
                  Join Our Mission
                </h3>
                <p className="mb-6 text-primary-foreground/90">
                  Every contribution makes a difference. Together, we can create 
                  positive change in our communities.
                </p>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="bg-white text-trust-navy hover:bg-gray-100"
                >
                  Become a Volunteer
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-background border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-trust-navy">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-trust-navy mb-2 block">
                        First Name
                      </label>
                      <Input placeholder="Enter your first name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-trust-navy mb-2 block">
                        Last Name
                      </label>
                      <Input placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-trust-navy mb-2 block">
                      Email
                    </label>
                    <Input type="email" placeholder="Enter your email address" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-trust-navy mb-2 block">
                      Phone Number
                    </label>
                    <Input type="tel" placeholder="Enter your phone number" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-trust-navy mb-2 block">
                      Subject
                    </label>
                    <Input placeholder="What is this regarding?" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-trust-navy mb-2 block">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us how we can help you..."
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary-hover"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}