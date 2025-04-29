
import React from "react";
import NewsPreview from "@/components/news/NewsPreview";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Nagłówek */}
      <header className="bg-purple-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-purple-800">Żłobek Małe Skarby</h1>
            <p className="text-xl md:text-2xl text-purple-700 mb-6">
              Bezpieczne i przyjazne miejsce dla Twojego dziecka
            </p>
            <Button asChild className="bg-purple-600 hover:bg-purple-700">
              <Link to="/aktualnosci">Zobacz aktualności</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Sekcja z aktualnościami */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-purple-800">Najnowsze aktualności</h2>
            <p className="text-gray-600 mt-2">Bądź na bieżąco z wydarzeniami w naszym żłobku</p>
          </div>
          <NewsPreview />
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
              <Link to="/aktualnosci">Wszystkie aktualności</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sekcja o nas */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-purple-800">O naszym żłobku</h2>
            <p className="text-gray-600 mt-2">Dbamy o rozwój i bezpieczeństwo Twojego dziecka</p>
          </div>
          <div className="max-w-3xl mx-auto text-gray-700">
            <p className="mb-4">
              Nasz żłobek to miejsce, gdzie każde dziecko jest traktowane z troską i uwagą. 
              Zapewniamy profesjonalną opiekę, kreatywne zajęcia i bezpieczne środowisko.
            </p>
            <p>
              Doświadczona kadra pedagogiczna dba o wszechstronny rozwój dzieci, 
              uwzględniając ich indywidualne potrzeby i zainteresowania.
            </p>
          </div>
        </div>
      </section>

      {/* Stopka */}
      <footer className="bg-purple-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Żłobek Małe Skarby. Wszelkie prawa zastrzeżone.</p>
          <p className="mt-2">ul. Kwiatowa 5, 00-001 Warszawa | Tel: 123 456 789 | Email: kontakt@maleskarby.pl</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
