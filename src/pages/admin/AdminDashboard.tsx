import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, 
  FileText, 
  Calendar, 
  Video, 
  LogOut, 
  Users, 
  Heart,
  TrendingUp,
  Activity
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const menuItems = [
  {
    title: "Manage Posts",
    description: "Create, edit and manage blog posts and news",
    icon: FileText,
    href: "/admin/posts",
    color: "care-blue",
  },
  {
    title: "Manage Events",
    description: "Organize upcoming events and activities",
    icon: Calendar,
    href: "/admin/events",
    color: "care-green",
  },
  {
    title: "Manage Videos",
    description: "Upload and manage video content",
    icon: Video,
    href: "/admin/videos",
    color: "warm-orange",
  },
];

const stats = [
  {
    title: "Total Posts",
    value: "24",
    icon: FileText,
    trend: "+12%",
    color: "care-blue",
  },
  {
    title: "Upcoming Events", 
    value: "8",
    icon: Calendar,
    trend: "+3",
    color: "care-green",
  },
  {
    title: "Video Content",
    value: "15",
    icon: Video,
    trend: "+5",
    color: "warm-orange",
  },
  {
    title: "Total Views",
    value: "12.5K",
    icon: Activity,
    trend: "+18%",
    color: "primary",
  },
];

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-background border-b shadow-soft">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-hero p-2 rounded-lg">
                <Heart className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-trust-navy">Admin Dashboard</h1>
                <p className="text-sm text-soft-gray">Human Life Care Charitable Trust</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  View Site
                </Button>
              </Link>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="text-destructive hover:text-destructive"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-trust-navy mb-2">
            Welcome back, Admin!
          </h2>
          <p className="text-soft-gray">
            Manage your NGO's content and monitor your impact from here.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-soft-gray">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold text-trust-navy mt-1">
                      {stat.value}
                    </p>
                    <p className={`text-sm text-${stat.color} mt-1`}>
                      {stat.trend} from last month
                    </p>
                  </div>
                  <div className={`bg-${stat.color}/10 p-3 rounded-xl`}>
                    <stat.icon className={`h-6 w-6 text-${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Management Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {menuItems.map((item, index) => (
            <Link key={index} to={item.href}>
              <Card className="group hover:shadow-card transition-all duration-300 border-0 bg-gradient-card cursor-pointer hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`bg-${item.color}/10 p-3 rounded-xl group-hover:scale-110 transition-transform`}>
                      <item.icon className={`h-6 w-6 text-${item.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-trust-navy group-hover:text-primary transition-colors">
                        {item.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-soft-gray">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Quick Actions */}
        <Card className="border-0 shadow-card">
          <CardHeader>
            <CardTitle className="text-trust-navy flex items-center space-x-2">
              <TrendingUp className="h-5 w-5" />
              <span>Quick Actions</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button className="bg-care-blue hover:bg-care-blue/90 h-auto py-4 px-6 flex-col space-y-2">
                <FileText className="h-6 w-6" />
                <span>Create New Post</span>
              </Button>
              
              <Button className="bg-care-green hover:bg-care-green/90 h-auto py-4 px-6 flex-col space-y-2">
                <Calendar className="h-6 w-6" />
                <span>Add Event</span>
              </Button>
              
              <Button className="bg-warm-orange hover:bg-warm-orange/90 h-auto py-4 px-6 flex-col space-y-2">
                <Video className="h-6 w-6" />
                <span>Upload Video</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Info Notice */}
        <Card className="mt-8 bg-gradient-hero border-0 text-primary-foreground">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">
              Connect to Supabase for Full Functionality
            </h3>
            <p className="text-primary-foreground/90 mb-4">
              To enable authentication, database management, and file uploads, 
              connect your project to Supabase using the integration button.
            </p>
            <Button 
              variant="secondary" 
              className="bg-white text-trust-navy hover:bg-gray-100"
            >
              Learn More About Supabase Integration
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}