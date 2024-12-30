import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen pt-16 bg-dark">
      <div className="container mx-auto px-4 py-20">
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

        {/* Animated Chart Background */}
        <div className="mt-16 relative overflow-hidden h-64 rounded-lg bg-dark-lighter p-4">
          <div className="absolute inset-0 bg-gradient-to-r from-dark-lighter via-transparent to-dark-lighter z-10" />
          <div className="animate-chart-scroll flex">
            <svg className="h-full min-w-[100%]" viewBox="0 0 400 100">
              <path
                d="M0,50 C50,30 100,70 150,50 C200,30 250,70 300,50 C350,30 400,70 450,50"
                fill="none"
                stroke="#8B5CF6"
                strokeWidth="2"
              />
              <path
                d="M0,70 C50,50 100,90 150,70 C200,50 250,90 300,70 C350,50 400,90 450,70"
                fill="none"
                stroke="#D946EF"
                strokeWidth="2"
                opacity="0.5"
              />
            </svg>
            <svg className="h-full min-w-[100%]" viewBox="0 0 400 100">
              <path
                d="M0,50 C50,30 100,70 150,50 C200,30 250,70 300,50 C350,30 400,70 450,50"
                fill="none"
                stroke="#8B5CF6"
                strokeWidth="2"
              />
              <path
                d="M0,70 C50,50 100,90 150,70 C200,50 250,90 300,70 C350,50 400,90 450,70"
                fill="none"
                stroke="#D946EF"
                strokeWidth="2"
                opacity="0.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;