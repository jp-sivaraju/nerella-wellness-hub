
import React from 'react';
import { Calendar, User, ArrowRight, Heart, Brain, Leaf, Clock, Tag, ArrowLeft } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from 'react-router-dom';
import PDFExportButton from '@/components/ui/pdf-export-button';

const BlogShowcase = () => {
  const navigate = useNavigate();

  const featuredPosts = [
    {
      id: 1,
      title: "5 Simple Daily Habits for Better Mental Wellness",
      excerpt: "Discover evidence-based practices that can transform your mental health and boost your overall well-being in just minutes each day.",
      content: "Mental wellness is not just about the absence of mental illness—it's about thriving emotionally, psychologically, and socially. In our fast-paced world, maintaining good mental health requires intentional daily practices...",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=400&fit=crop",
      category: "Mental Health",
      author: "Dr. Prathusha Nerella",
      date: "December 15, 2024",
      readTime: "5 min read",
      icon: Brain,
      color: "bg-purple-100 text-purple-700",
      tags: ["Mental Health", "Daily Habits", "Wellness", "Psychology"]
    },
    {
      id: 2,
      title: "Holistic Approach to Diabetes Management",
      excerpt: "Learn how combining traditional medicine with lifestyle modifications can help you achieve better blood sugar control and improved quality of life.",
      content: "Diabetes management extends far beyond monitoring blood sugar levels and taking medication. A truly effective approach integrates medical treatment with comprehensive lifestyle modifications...",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop",
      category: "Diabetes Care",
      author: "Dr. Prathusha Nerella",
      date: "December 10, 2024",
      readTime: "7 min read",
      icon: Heart,
      color: "bg-rose-100 text-rose-700",
      tags: ["Diabetes", "Nutrition", "Exercise", "Blood Sugar"]
    },
    {
      id: 3,
      title: "Natural Ways to Boost Your Immune System",
      excerpt: "Explore time-tested natural methods and modern nutritional science to strengthen your body's defense against illness and disease.",
      content: "Your immune system is your body's natural defense mechanism, working tirelessly to protect you from harmful pathogens and diseases. While there's no magic pill to guarantee perfect health...",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      category: "Preventive Health",
      author: "Dr. Prathusha Nerella",
      date: "December 5, 2024",
      readTime: "6 min read",
      icon: Leaf,
      color: "bg-green-100 text-green-700",
      tags: ["Immunity", "Natural Health", "Nutrition", "Prevention"]
    }
  ];

  const additionalPosts = [
    {
      id: 4,
      title: "Understanding the Mind-Body Connection in Healing",
      excerpt: "Explore how psychological well-being directly impacts physical health and recovery processes.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
      category: "Holistic Health",
      date: "November 28, 2024",
      readTime: "8 min read",
      tags: ["Mind-Body", "Healing", "Psychology"]
    },
    {
      id: 5,
      title: "Nutrition Myths Debunked: What Science Really Says",
      excerpt: "Separating fact from fiction in the world of nutrition and dietary recommendations.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop",
      category: "Nutrition",
      date: "November 20, 2024",
      readTime: "6 min read",
      tags: ["Nutrition", "Science", "Diet"]
    },
    {
      id: 6,
      title: "Sleep Hygiene: The Foundation of Good Health",
      excerpt: "Understanding how quality sleep affects every aspect of your physical and mental well-being.",
      image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&h=250&fit=crop",
      category: "Sleep Health",
      date: "November 15, 2024",
      readTime: "5 min read",
      tags: ["Sleep", "Health", "Recovery"]
    }
  ];

  const categories = [
    { name: "Mental Health", count: 12, color: "bg-purple-100 text-purple-700" },
    { name: "Diabetes Care", count: 8, color: "bg-rose-100 text-rose-700" },
    { name: "Preventive Health", count: 15, color: "bg-green-100 text-green-700" },
    { name: "Nutrition", count: 10, color: "bg-blue-100 text-blue-700" },
    { name: "Holistic Health", count: 6, color: "bg-pink-100 text-pink-700" },
    { name: "Sleep Health", count: 4, color: "bg-indigo-100 text-indigo-700" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-5 w-5" />
              Back to Home
            </Button>
            <div className="flex items-center gap-4">
              <PDFExportButton 
                elementId="blog-content"
                filename="dr-prathusha-wellness-blog"
                title="Export Blog PDF"
              />
              <a href="tel:+919876543210" className="text-sm text-green-600 font-medium hover:text-green-700">
                📞 +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </header>

      <div id="blog-content">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Wellness <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Evidence-based insights, practical tips, and expert guidance on holistic health, 
              wellness, and living your best life.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-sm text-gray-600">Articles Published</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
                <div className="text-sm text-gray-600">Health Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">1000+</div>
                <div className="text-sm text-gray-600">Monthly Readers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">Weekly</div>
                <div className="text-sm text-gray-600">New Content</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Featured Articles</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                In-depth exploration of key wellness topics with practical, actionable advice
              </p>
            </div>

            <div className="space-y-12">
              {featuredPosts.map((post, index) => (
                <Card key={post.id} className={`professional-card hover-lift ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:flex overflow-hidden`}>
                  <div className="lg:w-1/2">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  <CardContent className="lg:w-1/2 p-8 lg:p-12 space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <Badge className={`${post.color} border-0`}>
                          <post.icon className="h-3 w-3 mr-1" />
                          {post.category}
                        </Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {post.excerpt}
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        {post.content}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          <Tag className="h-2 w-2 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className="text-sm text-gray-500">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            <span className="font-medium">{post.author}</span>
                          </div>
                          <div className="flex items-center mt-1">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                      </div>
                      <Button className="btn-wellness">
                        Read Full Article
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Categories & Recent Posts */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Categories */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h3>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <Badge className={`${category.color} border-0`}>
                          {category.name}
                        </Badge>
                      </div>
                      <span className="text-sm text-gray-500">{category.count} articles</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Recent Articles</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {additionalPosts.map((post) => (
                    <Card key={post.id} className="professional-card hover-lift overflow-hidden">
                      <div className="relative">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 object-cover"
                        />
                        <Badge className="absolute top-4 left-4 bg-white text-gray-700">
                          {post.category}
                        </Badge>
                      </div>
                      <CardContent className="p-6 space-y-4">
                        <h4 className="text-lg font-semibold text-gray-900 line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {post.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center text-xs text-gray-500">
                            <Calendar className="h-3 w-3 mr-1" />
                            {post.date}
                          </div>
                          <div className="flex items-center text-xs text-gray-500">
                            <Clock className="h-3 w-3 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="section-padding bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Stay Updated with Our Wellness Tips</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Get the latest evidence-based health insights and practical wellness tips delivered to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <Button className="bg-white text-green-600 hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogShowcase;
