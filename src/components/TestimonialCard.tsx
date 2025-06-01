
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  rating: number;
  comment: string;
}

const TestimonialCard = ({ name, role, company, rating, comment }: TestimonialCardProps) => {
  return (
    <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/80 transition-all duration-300">
      <CardContent className="p-6">
        {/* Rating Stars */}
        <div className="flex mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-5 w-5 text-orange-500 fill-current" />
          ))}
        </div>
        
        {/* Comment */}
        <blockquote className="text-gray-300 italic mb-4 leading-relaxed">
          "{comment}"
        </blockquote>
        
        {/* Author */}
        <div className="border-t border-slate-700 pt-4">
          <div className="font-semibold text-white">{name}</div>
          <div className="text-sm text-orange-500">{role}</div>
          <div className="text-sm text-gray-400">{company}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
