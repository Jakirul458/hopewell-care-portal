import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Plus, Edit, Trash2, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const events = [
  {
    id: 1,
    title: "Health Camp - Rural Areas",
    description: "Free health checkup and medicine distribution in remote villages",
    date: "2024-02-15",
    time: "09:00 AM",
    location: "Village Community Center",
    status: "upcoming",
    attendees: 0,
  },
  {
    id: 2,
    title: "Blood Donation Drive",
    description: "Community blood donation camp to help local hospitals",
    date: "2024-02-20", 
    time: "10:00 AM",
    location: "Trust Office Premises",
    status: "upcoming",
    attendees: 25,
  },
  {
    id: 3,
    title: "Children's Education Workshop",
    description: "Educational workshop and book distribution for underprivileged children",
    date: "2024-01-30",
    time: "02:00 PM", 
    location: "Community School",
    status: "completed",
    attendees: 45,
  },
];

export default function ManageEvents() {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link to="/admin/dashboard">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-trust-navy">Manage Events</h1>
              <p className="text-soft-gray">Organize and track upcoming events</p>
            </div>
          </div>
          <Button className="bg-care-green hover:bg-care-green/90">
            <Plus className="h-4 w-4 mr-2" />
            New Event
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-0 shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-soft-gray">Total Events</p>
                  <p className="text-2xl font-bold text-trust-navy">8</p>
                </div>
                <div className="bg-care-green/10 p-3 rounded-xl">
                  <Calendar className="h-6 w-6 text-care-green" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-soft-gray">Upcoming</p>
                  <p className="text-2xl font-bold text-trust-navy">3</p>
                </div>
                <div className="bg-warm-orange/10 p-3 rounded-xl">
                  <Plus className="h-6 w-6 text-warm-orange" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-soft-gray">Total Participants</p>
                  <p className="text-2xl font-bold text-trust-navy">180</p>
                </div>
                <div className="bg-care-blue/10 p-3 rounded-xl">
                  <MapPin className="h-6 w-6 text-care-blue" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Events List */}
        <Card className="border-0 shadow-card">
          <CardHeader>
            <CardTitle className="text-trust-navy">All Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {events.map((event) => (
                <div key={event.id} className="p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold text-trust-navy">{event.title}</h3>
                        <Badge 
                          variant={event.status === 'upcoming' ? 'default' : 'secondary'}
                          className={
                            event.status === 'upcoming' 
                              ? 'bg-care-green text-white' 
                              : 'bg-soft-gray text-white'
                          }
                        >
                          {event.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-soft-gray mb-3">{event.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-care-blue" />
                          <span className="text-soft-gray">{event.date} at {event.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-care-green" />
                          <span className="text-soft-gray">{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-soft-gray">Participants: {event.attendees}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Supabase Notice */}
        <Card className="mt-8 bg-gradient-hero border-0 text-primary-foreground">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">
              Connect to Supabase for Event Management
            </h3>
            <p className="text-primary-foreground/90">
              Enable full event management with registration tracking via Supabase integration.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}