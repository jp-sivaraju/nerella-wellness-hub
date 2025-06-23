
import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "5 Essential Tips for Managing Diabetes",
      excerpt: "Learn practical strategies for maintaining healthy blood sugar levels and improving your quality of life.",
      date: "2024-01-15",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
      category: "Diabetes Care"
    },
    {
      title: "The Power of Positive Psychology in Health",
      excerpt: "Discover how mental well-being directly impacts physical health and recovery processes.",
      date: "2024-01-10",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=250&fit=crop",
      category: "Mental Wellness"
    },
    {
      title: "Preventive Health: Your Best Investment",
      excerpt: "Why regular check-ups and screenings are crucial for long-term health and early disease detection.",
      date: "2024-01-05",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=250&fit=crop",
      category: "Preventive Care"
    }
  ];

  return (
    <section id="blog" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Wellness Blog</h2>
          <p className="text-lg text-gray-600">Stay informed with our latest health insights and tips</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="professional-card overflow-hidden hover-lift group">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                <Button variant="ghost" className="p-0 h-auto text-teal-600 hover:text-teal-700">
                  Read More <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
