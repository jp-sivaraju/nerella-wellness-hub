
import React from 'react';
import { Play } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const VideoReelsSection = () => {
  const videos = [
    {
      id: 1,
      title: "Diabetes Management Tips",
      thumbnail: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=300&h=400&fit=crop",
      url: "https://www.instagram.com/reel/DKHnfO5SXC5/"
    },
    {
      id: 2,
      title: "Healthy Lifestyle Habits",
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop",
      url: "https://www.instagram.com/reel/DKw1A5sS0xc/"
    },
    {
      id: 3,
      title: "Positive Psychology Tips",
      thumbnail: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=300&h=400&fit=crop",
      url: "https://www.instagram.com/reel/DKrtOQnSDQk/"
    },
    {
      id: 4,
      title: "Holistic Health Approach",
      thumbnail: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300&h=400&fit=crop",
      url: "https://www.instagram.com/reel/DKj_laPywpc/"
    },
    {
      id: 5,
      title: "Mind-Body Wellness",
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop",
      url: "https://www.instagram.com/reel/DKZnQRyylmh/"
    },
    {
      id: 6,
      title: "Stress Management",
      thumbnail: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=300&h=400&fit=crop",
      url: "https://www.instagram.com/reel/DKMyPI0SmJz/"
    }
  ];

  return (
    <section className="py-8 lg:py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 lg:mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Health Education Videos</h2>
          <p className="text-base lg:text-lg text-gray-600">Watch our latest health tips and medical insights</p>
        </div>

        <Carousel className="w-full" opts={{ align: "start", loop: true }}>
          <CarouselContent className="-ml-2 md:-ml-4">
            {videos.map((video) => (
              <CarouselItem key={video.id} className="pl-2 md:pl-4 basis-4/5 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <Card className="professional-card overflow-hidden hover-lift">
                  <div className="relative aspect-[3/4] bg-gray-100">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                      <button
                        onClick={() => window.open(video.url, '_blank')}
                        className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all"
                      >
                        <Play className="h-6 w-6 text-blue-600 ml-1" />
                      </button>
                    </div>
                  </div>
                  <CardContent className="p-3">
                    <h4 className="font-semibold text-gray-900 text-sm">{video.title}</h4>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default VideoReelsSection;
