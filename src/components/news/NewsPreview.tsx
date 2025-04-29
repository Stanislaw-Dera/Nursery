
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import { useLatestNews } from "@/hooks/useNews";

const NewsPreview = () => {
  // W przyszłości można zamienić na dane z API/bazy danych
  const { news } = useLatestNews(3); // Pobierz 3 najnowsze aktualności

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {news.map((item) => (
        <Card key={item.id} className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-xl text-purple-700">{item.title}</CardTitle>
            <CardDescription>{formatDate(item.date)}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 line-clamp-3">{item.excerpt}</p>
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
  );
};

export default NewsPreview;
