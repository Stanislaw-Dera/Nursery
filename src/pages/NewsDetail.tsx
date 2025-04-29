
import React from "react";
import { Link, useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import { useNewsById } from "@/hooks/useNews";
import { Skeleton } from "@/components/ui/skeleton";

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: newsItem, isLoading, error } = useNewsById(id || "");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Nagłówek */}
      <header className="bg-purple-100 py-8">
        <div className="container mx-auto px-4">
          <Link 
            to="/aktualnosci"
            className="text-purple-600 hover:text-purple-800 mb-4 inline-block"
          >
            &larr; Powrót do aktualności
          </Link>
        </div>
      </header>

      {/* Szczegóły aktualności */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {isLoading ? (
            // Wczytywanie
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <Skeleton className="h-8 w-2/3 mb-2" />
                <Skeleton className="h-4 w-1/3" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-2/3 mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
              </CardContent>
            </Card>
          ) : error ? (
            // Błąd
            <div className="text-center py-10 max-w-4xl mx-auto">
              <p className="text-red-500">Nie znaleziono aktualności o podanym ID.</p>
              <Link 
                to="/aktualnosci"
                className="text-purple-600 hover:text-purple-800 mt-4 inline-block"
              >
                Powrót do listy aktualności
              </Link>
            </div>
          ) : newsItem ? (
            // Szczegóły aktualności
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-3xl text-purple-800">{newsItem.title}</CardTitle>
                <p className="text-gray-500 mt-2">{formatDate(newsItem.date)}</p>
              </CardHeader>
              <CardContent>
                <div 
                  className="prose prose-purple max-w-none"
                  dangerouslySetInnerHTML={{ __html: newsItem.content }}
                />
              </CardContent>
            </Card>
          ) : null}
        </div>
      </section>
    </div>
  );
};

export default NewsDetail;
