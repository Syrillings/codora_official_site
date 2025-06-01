
import { Download, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ApkDownloadSection = () => {
  return (
    <section className="px-4 py-16 max-w-4xl mx-auto">
      <Card className="bg-gradient-to-r from-orange-500 to-amber-500 border-0 shadow-2xl">
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
          <Button 
            size="lg" 
            className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Download className="mr-3 h-6 w-6" />
            Download APK (Free)
          </Button>
          <p className="text-white/80 text-sm mt-4">
            Compatible with Android 7.0 and above • 25MB download
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

export default ApkDownloadSection;
