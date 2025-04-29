
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import { useAllNews } from "@/hooks/useNews";
import { Skeleton } from "@/components/ui/skeleton";

const News = () => {
  const { data: news = [], isLoading, error } = useAllNews();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Nagłówek */}
      <header className="bg-purple-100 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-purple-800">Aktualności</h1>
          <p className="text-xl text-purple-700 mt-2">Co nowego w naszym żłobku</p>
        </div>
      </header>

      {/* Lista aktualności */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {isLoading ? (
            // Wczytywanie
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="mb-6">
                  <CardHeader>
                    <Skeleton className="h-6 w-2/3 mb-2" />
                    <Skeleton className="h-4 w-1/3" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-2/3" />
                  </CardContent>
                  <CardFooter>
                    <Skeleton className="h-4 w-1/4" />
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : error ? (
            // Błąd
            <div className="text-center py-10">
              <p className="text-red-500">Wystąpił błąd podczas ładowania aktualności.</p>
            </div>
          ) : (
            // Lista aktualności
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {news.map((item) => (
                <Card key={item.id} className="mb-6 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl text-purple-700">{item.title}</CardTitle>
                    <CardDescription>{formatDate(item.date)}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{item.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Link 
                      to={`/aktualnosci/${item.id}`}
                      className="text-purple-600 hover:text-purple-800 font-medium"
                    >
                      Czytaj więcej
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}

          {/* Przycisk powrotu */}
          <div className="mt-8">
            <Link 
              to="/"
              className="text-purple-600 hover:text-purple-800 flex items-center"
            >
              &larr; Powrót do strony głównej
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
