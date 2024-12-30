import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen pt-16 bg-dark relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source
            src="https://videos.pexels.com/video-files/3191576/3191576-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 to-dark/95 z-10" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Automate Your Trading Strategies with Confidence
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Build, test, and deploy automated trading strategies with our powerful platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Learn More
            </Button>
          </div>
        </div>

        {/* Static Trading Chart Background */}
        <div className="mt-16 relative h-64">
          <div className="absolute inset-0 bg-dark-lighter/20 rounded-lg overflow-hidden">
            <img
              src="https://media.istockphoto.com/id/1449224970/photo/abstract-financial-graph-with-up-trend-line-candlestick-chart-in-stock-market-on-neon-light.jpg?s=612x612&w=0&k=20&c=dDz8_AVCWReHLZDv36tVXyylSMdXecj7JjXkiPh6uZc"
              alt="Trading Chart"
              className="w-full h-full object-cover opacity-30"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;