import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Plus, Edit, Trash2, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const posts = [
  {
    id: 1,
    title: "New Healthcare Initiative Launched",
    excerpt: "We're excited to announce our new mobile healthcare program reaching remote villages.",
    status: "published",
    date: "2024-01-15",
    views: 245,
  },
  {
    id: 2,
    title: "Blood Donation Camp Success",
    excerpt: "Our recent blood donation camp collected 150 units, helping local hospitals.",
    status: "published", 
    date: "2024-01-10",
    views: 189,
  },
  {
    id: 3,
    title: "Education Program Update",
    excerpt: "Monthly update on our children's education support program achievements.",
    status: "draft",
    date: "2024-01-08",
    views: 0,
  },
];

export default function ManagePosts() {
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
              <h1 className="text-3xl font-bold text-trust-navy">Manage Posts</h1>
              <p className="text-soft-gray">Create and manage blog posts and news</p>
            </div>
          </div>
          <Button className="bg-care-blue hover:bg-care-blue/90">
            <Plus className="h-4 w-4 mr-2" />
            New Post
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-0 shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-soft-gray">Total Posts</p>
                  <p className="text-2xl font-bold text-trust-navy">24</p>
                </div>
                <div className="bg-care-blue/10 p-3 rounded-xl">
                  <Eye className="h-6 w-6 text-care-blue" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-soft-gray">Published</p>
                  <p className="text-2xl font-bold text-trust-navy">18</p>
                </div>
                <div className="bg-care-green/10 p-3 rounded-xl">
                  <Edit className="h-6 w-6 text-care-green" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-soft-gray">Drafts</p>
                  <p className="text-2xl font-bold text-trust-navy">6</p>
                </div>
                <div className="bg-warm-orange/10 p-3 rounded-xl">
                  <Plus className="h-6 w-6 text-warm-orange" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Posts List */}
        <Card className="border-0 shadow-card">
          <CardHeader>
            <CardTitle className="text-trust-navy">All Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {posts.map((post) => (
                <div key={post.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-semibold text-trust-navy">{post.title}</h3>
                      <Badge variant={post.status === 'published' ? 'default' : 'secondary'}>
                        {post.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-soft-gray mb-2">{post.excerpt}</p>
                    <div className="flex items-center space-x-4 text-xs text-soft-gray">
                      <span>Published: {post.date}</span>
                      <span>Views: {post.views}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
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
              Connect to Supabase for Data Management
            </h3>
            <p className="text-primary-foreground/90">
              To fully manage posts with database storage, connect your Supabase integration.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}