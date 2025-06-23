
import React from 'react';
import { Calendar, User, ArrowRight, Heart, Brain, Leaf } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Simple Daily Habits for Better Mental Wellness",
      excerpt: "Discover evidence-based practices that can transform your mental health and boost your overall well-being in just minutes each day.",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=250&fit=crop",
      category: "Mental Health",
      author: "Dr. Prathusha Nerella",
      date: "December 15, 2024",
      readTime: "5 min read",
      icon: Brain,
      color: "bg-purple-100 text-purple-700"
    },
    {
      id: 2,
      title: "Holistic Approach to Diabetes Management",
      excerpt: "Learn how combining traditional medicine with lifestyle modifications can help you achieve better blood sugar control and improved quality of life.",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=250&fit=crop",
      category: "Diabetes Care",
      author: "Dr. Prathusha Nerella",
      date: "December 10, 2024",
      readTime: "7 min read",
      icon: Heart,
      color: "bg-rose-100 text-rose-700"
    },
    {
      id: 3,
      title: "Natural Ways to Boost Your Immune System",
      excerpt: "Explore time-tested natural methods and modern nutritional science to strengthen your body's defense against illness and disease.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      category: "Preventive Health",
      author: "Dr. Prathusha Nerella",
      date: "December 5, 2024",
      readTime: "6 min read",
      icon: Leaf,
      color: "bg-pink-100 text-pink-700"
    }
  ];

  return (
    <section id="blog" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">Wellness Blog</h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed with our latest insights on health, wellness, and holistic living
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="professional-card overflow-hidden hover-lift group">
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 lg:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={`${post.color} border-0`}>
                    <post.icon className="h-3 w-3 mr-1" />
                    {post.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div className="space-y-3">
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900 line-clamp-2 group-hover:text-pink-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm lg:text-base text-gray-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2 text-xs lg:text-sm text-gray-500">
                      <User className="h-4 w-4" />
                      <span className="font-medium">{post.author}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-xs lg:text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-pink-600 hover:text-pink-700 hover:bg-pink-50 p-2"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="btn-wellness"
          >
            View All Articles
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
