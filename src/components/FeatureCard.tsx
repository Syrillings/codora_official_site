
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/80 transition-all duration-300 hover:scale-105 group">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-orange-500/20 rounded-lg text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
