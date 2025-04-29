
import React from "react";
import NewsPreview from "@/components/news/NewsPreview";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Sekcja Hero */}
      <HeroSection />

      {/* Sekcja z aktualnościami */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-green-700">Najnowsze aktualności</h2>
            <p className="text-gray-600 mt-2">Bądź na bieżąco z wydarzeniami w naszym żłobku</p>
          </div>
          <NewsPreview />
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              <Link to="/aktualnosci">Wszystkie aktualności</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sekcja z cechami */}
      <FeaturesSection />
    </div>
  );
};

export default Index;
