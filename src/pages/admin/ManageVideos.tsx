import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Plus, Edit, Trash2, Play, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const videos = [
  {
    id: 1,
    title: "Healthcare Initiative Documentary", 
    description: "Behind the scenes of our mobile healthcare program",
    thumbnail: "https://via.placeholder.com/300x200?text=Healthcare+Video",
    duration: "5:23",
    views: 1240,
    status: "published",
    uploadDate: "2024-01-12",
  },
  {
    id: 2,
    title: "Blood Donation Camp Highlights",
    description: "Highlights from our recent successful blood donation drive",
    thumbnail: "https://via.placeholder.com/300x200?text=Blood+Donation",
    duration: "3:45", 
    views: 890,
    status: "published",
    uploadDate: "2024-01-08",
  },
  {
    id: 3,
    title: "Children Education Program",
    description: "Educational activities and impact stories from our child care project",
    thumbnail: "https://via.placeholder.com/300x200?text=Education+Program",
    duration: "7:12",
    views: 0,
    status: "processing",
    uploadDate: "2024-01-15",
  },
];

export default function ManageVideos() {
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
              <h1 className="text-3xl font-bold text-trust-navy">Manage Videos</h1>
              <p className="text-soft-gray">Upload and manage video content</p>
            </div>
          </div>
          <Button className="bg-warm-orange hover:bg-warm-orange/90">
            <Upload className="h-4 w-4 mr-2" />
            Upload Video
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-0 shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-soft-gray">Total Videos</p>
                  <p className="text-2xl font-bold text-trust-navy">15</p>
                </div>
                <div className="bg-warm-orange/10 p-3 rounded-xl">
                  <Play className="h-6 w-6 text-warm-orange" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-soft-gray">Total Views</p>
                  <p className="text-2xl font-bold text-trust-navy">12.5K</p>
                </div>
                <div className="bg-care-blue/10 p-3 rounded-xl">
                  <Edit className="h-6 w-6 text-care-blue" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-soft-gray">Processing</p>
                  <p className="text-2xl font-bold text-trust-navy">2</p>
                </div>
                <div className="bg-care-green/10 p-3 rounded-xl">
                  <Upload className="h-6 w-6 text-care-green" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Videos Grid */}
        <Card className="border-0 shadow-card">
          <CardHeader>
            <CardTitle className="text-trust-navy">Video Library</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <div key={video.id} className="bg-muted/50 rounded-lg overflow-hidden">
                  {/* Video Thumbnail */}
                  <div className="relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <Button size="sm" className="bg-white text-trust-navy hover:bg-gray-100">
                        <Play className="h-4 w-4 mr-2" />
                        Preview
                      </Button>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                      {video.duration}
                    </div>
                    <div className="absolute top-2 left-2">
                      <Badge 
                        variant={video.status === 'published' ? 'default' : 'secondary'}
                        className={
                          video.status === 'published' 
                            ? 'bg-care-green text-white' 
                            : 'bg-warm-orange text-white'
                        }
                      >
                        {video.status}
                      </Badge>
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="p-4">
                    <h3 className="font-semibold text-trust-navy mb-2 line-clamp-2">
                      {video.title}
                    </h3>
                    <p className="text-sm text-soft-gray mb-3 line-clamp-2">
                      {video.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-soft-gray mb-4">
                      <span>Views: {video.views.toLocaleString()}</span>
                      <span>Uploaded: {video.uploadDate}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
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
              Connect to Supabase for Video Storage
            </h3>
            <p className="text-primary-foreground/90 mb-4">
              Enable video uploads and storage with Supabase integration and Cloudinary support.
            </p>
            <Button 
              variant="secondary" 
              className="bg-white text-trust-navy hover:bg-gray-100"
            >
              Learn About File Storage
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}