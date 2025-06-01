import { ArrowRight, Download, Star, Users, Brain, Trophy, Smartphone, Zap, Code, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import MobilePhoneMockup from "@/components/MobilePhoneMockup";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import ApkDownloadSection from "@/components/ApkDownloadSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Hero Section */}
      <section className="px-4 py-16 lg:py-24 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-8">
            <div className=" flex items-center justify-center shadow-2xl animate-pulse">
              <img 
                src="/Start.png" 
                alt="Codora Owl Mascot"
                className="w-[200px] h-[200px] object-contain"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Master Coding with
            <span className="text-orange-500 block">AI-Powered Quizzes</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Test your programming skills, compete with developers worldwide, and enhance your coding knowledge through intelligent, adaptive challenges.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
              Download for Android <Download className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300">
              View Screenshots <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div> */}
        </div>
      </section>

      {/* Features Overview */}
      <section className="px-4 py-16 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose <span className="text-orange-500">Codora</span>?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Experience the future of coding education with AI-driven personalization and competitive challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Brain className="h-8 w-8" />}
            title="AI-Powered Questions"
            description="Adaptive quizzes that adjust to your skill level and learning pace for optimal challenge."
          />
          <FeatureCard
            icon={<Users className="h-8 w-8" />}
            title="Solo & Group Modes"
            description="Test yourself individually or compete with friends and colleagues in real-time challenges."
          />
          <FeatureCard
            icon={<Code className="h-8 w-8" />}
            title="Multiple Technologies"
            description="Cover JavaScript, Python, React, Android, iOS, and dozens of other programming fields."
          />
          <FeatureCard
            icon={<Trophy className="h-8 w-8" />}
            title="Competitive Scoring"
            description="Track your progress, earn achievements, and climb the global developer leaderboards."
          />
          <FeatureCard
            icon={<Target className="h-8 w-8" />}
            title="Skill Assessment"
            description="Get detailed insights into your strengths and areas for improvement with comprehensive analytics."
          />
          <FeatureCard
            icon={<Zap className="h-8 w-8" />}
            title="Quick Sessions"
            description="Perfect for busy developers - complete meaningful challenges in just 5-15 minutes."
          />
        </div>
      </section>

      {/* Screenshot Gallery */}
      <section className="px-4 py-16 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            See Codora in <span className="text-orange-500">Action</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Beautifully designed mobile experience for modern developers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          <div className="transform hover:scale-105 transition-transform duration-300">
            <MobilePhoneMockup 
              imageSrc="/lovable-uploads/8218301d-8186-4714-a564-b3781ebd2faf.png"
              alt="Codora App Home Screen"
            />
          
          </div>
          <div className="transform hover:scale-105 lg:pt-[80px] transition-transform duration-300">
            <MobilePhoneMockup 
              imageSrc="/lovable-uploads/d1a6d630-aadb-446e-bff4-bd33f52dd0de.png"
              alt="Quiz Mode Selection"
            />
         
          </div>
          <div className="transform hover:scale-105 transition-transform duration-300">
            <MobilePhoneMockup 
              imageSrc="/lovable-uploads/8f5d8fc7-e696-4edc-99eb-40661af0472c.png"
              alt="Create Quiz Room"
            />
           
          </div>
          <div className="transform hover:scale-105 lg:pt-[80px] transition-transform duration-300">
            <MobilePhoneMockup 
              imageSrc="/lovable-uploads/e83a4126-ab13-4c40-8fea-3c66903259ff.png"
              alt="Quiz Results"
            />
            
          </div>
        </div>
      </section>

      <section className="px-4 py-16 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Developers <span className="text-orange-500">Say</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Join thousands of developers improving their skills with Codora
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TestimonialCard
            name="Sarah Chen"
            role="Frontend Developer"
            company="Tech Startup"
            rating={5}
            comment="Codora helped me sharpen my React skills during my commute. The AI-generated questions are spot-on and challenging!"
          />
          <TestimonialCard
            name="Miguel Rodriguez"
            role="Backend Engineer"
            company="Fortune 500"
            rating={5}
            comment="The group quiz feature is amazing for team building. We use it during our Friday tech talks to make learning fun."
          />
          <TestimonialCard
            name="Alex Kim"
            role="Mobile Developer"
            company="Freelancer"
            rating={5}
            comment="Perfect for staying sharp between projects. Love how it adapts to my skill level and suggests areas to improve."
          />
        </div>
      </section>

    
      <ApkDownloadSection />

     
      <footer className="px-4 py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
              <img 
                src="/lovable-uploads/f42688a5-7015-41b1-b2dd-d22d9129e704.png" 
                alt="Codora Owl Mascot"
                className="w-8 h-8 object-contain"
              />
            </div>
          </div>
          <p className="text-gray-400 text-lg mb-4">
            <span className="text-orange-500 font-bold">Codora</span> - Empowering developers through intelligent learning
          </p>
          <p className="text-gray-500 text-sm">
            © 2025 Codora. All rights reserved. Built with ❤️ for the developer community.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
