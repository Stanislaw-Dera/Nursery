
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-green-50 to-green-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-800">
              Żłobek Małe Skarby
            </h1>
            <p className="text-xl md:text-2xl text-green-700 mb-6">
              Bezpieczne i przyjazne miejsce dla Twojego dziecka
            </p>
            <p className="text-gray-700 mb-8 max-w-lg">
              W naszym żłobku tworzymy ciepłą, rodzinną atmosferę, w której dzieci rozwijają 
              się poprzez zabawę, kreatywne zajęcia i opiekę wykwalifikowanej kadry pedagogicznej.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link to="/kontakt">Skontaktuj się z nami</Link>
              </Button>
              <Button asChild variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                <Link to="/informacje">Dowiedz się więcej</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/placeholder.svg" 
                  alt="Dzieci w żłobku" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-green-700 font-bold">Zapisy trwają cały rok!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
