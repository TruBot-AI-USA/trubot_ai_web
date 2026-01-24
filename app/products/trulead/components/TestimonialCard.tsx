import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

const TestimonialCard = ({ quote, author, role }: TestimonialCardProps) => {
  return (
    <div className="bg-blue-50 rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden">
      <div className="text-blue-600 mb-6 flex justify-center">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} fill="currentColor" className="w-6 h-6" />
        ))}
      </div>
      <blockquote className="text-2xl md:text-3xl font-medium text-navy mb-8 relative z-10">
        &quot;{quote}&quot;
      </blockquote>
      <div className="relative z-10">
        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
          {author.charAt(0)}
        </div>
        <div className="font-bold text-gray-900">{author}</div>
        <div className="text-gray-600">{role}</div>
      </div>
      {/* Decorative Quotes */}
      <div className="absolute top-4 left-8 text-blue-200 text-9xl font-serif opacity-50">
        &quot;
      </div>
    </div>
  );
};

export default TestimonialCard;
