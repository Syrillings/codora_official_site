
import { Download, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

const ApkDownloadSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
 
    const checkIfMobile = () => {
      const userAgent = typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

      const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent.toLowerCase());
      
      setIsMobile(mobile && !isTablet);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  return (
    <section className="px-4 py-16 max-w-4xl mx-auto">
      <Card className="bg-orange-500 border-0 shadow-2xl">
        <CardContent className="p-8 md:p-12 text-center">
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/3d06d8b6-0263-4fd8-9e63-53787de53662.png" 
              alt="Codora Owl Mascot"
              className="w-16 h-16 object-contain"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Level Up Your Coding Skills?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Download Codora for Android and start your journey to becoming a better developer today. Join our community of passionate coders!
          </p>
          {isMobile ? (
            <a href="https://codoraofficialsite.vercel.app/Codora.apk" download="Codora.apk">
              <Button 
                size="lg" 
                className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Download className="mr-3 h-6 w-6" />
                Download APK (Free)
              </Button>
            </a>
          ) : (
            <div className="bg-white/20 text-white px-6 py-4 rounded-xl">
              <p className="flex items-center justify-center">
                <Smartphone className="mr-2 h-5 w-5" />
                Please visit this page on a phone to download the app
              </p>
            </div>
          )}
          <p className="text-white/80 text-sm mt-4">
            Compatible with Android 7.0 and above • 38MB download
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

export default ApkDownloadSection;
