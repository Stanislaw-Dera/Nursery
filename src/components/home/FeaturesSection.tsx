
import React from "react";
import { Heart, BookOpen, Clock, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Heart className="h-10 w-10 text-green-600" />,
    title: "Troskliwa opieka",
    description: "Zapewniamy indywidualne podejście do każdego dziecka w bezpiecznym i ciepłym środowisku.",
  },
  {
    icon: <BookOpen className="h-10 w-10 text-green-600" />,
    title: "Edukacyjne zajęcia",
    description: "Prowadzimy angażujące zajęcia wspierające rozwój poznawczy i emocjonalny dzieci.",
  },
  {
    icon: <Clock className="h-10 w-10 text-green-600" />,
    title: "Elastyczne godziny",
    description: "Dostosowujemy się do potrzeb rodziców, oferując elastyczne godziny otwarcia.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-green-600" />,
    title: "Bezpieczeństwo",
    description: "Priorytetem jest bezpieczeństwo dzieci, zapewniane przez wykwalifikowaną kadrę i monitoring.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-2">Dlaczego warto wybrać nasz żłobek</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tworzymy przestrzeń, w której dzieci mogą bezpiecznie rozwijać swoje umiejętności i cieszyć się dzieciństwem
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-green-700 mb-3 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
