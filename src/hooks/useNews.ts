
import { useState, useEffect } from "react";
import { NewsItem } from "@/types/news";

// Dane testowe - w przyszłości można zamienić na API/bazę danych
const mockNews: NewsItem[] = [
  {
    id: "1",
    title: "Dzień otwarty w żłobku",
    date: new Date("2025-05-15"),
    excerpt: "Zapraszamy wszystkich zainteresowanych na dzień otwarty w naszym żłobku. Będzie można poznać kadrę, obejrzeć pomieszczenia i dowiedzieć się więcej o naszym programie.",
    content: `
      <p>Zapraszamy wszystkich zainteresowanych na dzień otwarty w naszym żłobku. Będzie można poznać kadrę, obejrzeć pomieszczenia i dowiedzieć się więcej o naszym programie.</p>
      <p>W programie:</p>
      <ul>
        <li>Prezentacja naszej kadry</li>
        <li>Oprowadzanie po żłobku</li>
        <li>Konsultacje z opiekunami</li>
        <li>Zabawy dla dzieci</li>
      </ul>
      <p>Wydarzenie odbędzie się 15 maja 2025 roku w godzinach 10:00-16:00. Nie wymagamy wcześniejszej rejestracji, wystarczy przyjść.</p>
    `
  },
  {
    id: "2",
    title: "Warsztaty sensoryczne dla maluchów",
    date: new Date("2025-05-10"),
    excerpt: "W najbliższą sobotę organizujemy warsztaty sensoryczne dla maluchów. Będzie to świetna okazja do wspólnej zabawy i rozwijania zmysłów dziecka.",
    content: `
      <p>W najbliższą sobotę organizujemy warsztaty sensoryczne dla maluchów. Będzie to świetna okazja do wspólnej zabawy i rozwijania zmysłów dziecka.</p>
      <p>Podczas warsztatów dzieci będą mogły:</p>
      <ul>
        <li>Poznawać różne faktury i materiały</li>
        <li>Bawić się masą solną i piaskiem kinetycznym</li>
        <li>Eksperymentować z kolorami</li>
        <li>Rozwijać motorykę małą</li>
      </ul>
      <p>Warsztaty poprowadzi nasza doświadczona pedagog, Pani Anna. Zapraszamy!</p>
    `
  },
  {
    id: "3",
    title: "Nowy program zajęć muzycznych",
    date: new Date("2025-05-05"),
    excerpt: "Z radością informujemy o wprowadzeniu nowego programu zajęć muzycznych dla naszych podopiecznych. Zajęcia będą prowadzone przez profesjonalnego muzyka.",
    content: `
      <p>Z radością informujemy o wprowadzeniu nowego programu zajęć muzycznych dla naszych podopiecznych. Zajęcia będą prowadzone przez profesjonalnego muzyka.</p>
      <p>Program zajęć obejmuje:</p>
      <ul>
        <li>Śpiewanie piosenek dostosowanych do wieku dzieci</li>
        <li>Zabawę z prostymi instrumentami</li>
        <li>Rytmikę i ruch przy muzyce</li>
        <li>Słuchanie różnych gatunków muzycznych</li>
      </ul>
      <p>Zajęcia odbywać się będą dwa razy w tygodniu i są dostosowane do wszystkich grup wiekowych w naszym żłobku.</p>
    `
  },
  {
    id: "4",
    title: "Wiosenne porządki w ogrodzie",
    date: new Date("2025-04-25"),
    excerpt: "Wraz z nadejściem wiosny rozpoczynamy przygotowania naszego ogródka. Dzieci wezmą udział w sadzeniu kwiatów i warzyw, co będzie świetną lekcją przyrody.",
    content: `
      <p>Wraz z nadejściem wiosny rozpoczynamy przygotowania naszego ogródka. Dzieci wezmą udział w sadzeniu kwiatów i warzyw, co będzie świetną lekcją przyrody.</p>
      <p>W ramach projektu:</p>
      <ul>
        <li>Posadziliśmy kwiaty i warzywa w naszych grządkach</li>
        <li>Dzieci nauczyły się jak dbać o rośliny</li>
        <li>Utworzyliśmy kącik przyrodniczy w każdej sali</li>
      </ul>
      <p>Dzięki temu projektowi dzieci uczą się odpowiedzialności i bliskości z naturą.</p>
    `
  },
  {
    id: "5",
    title: "Rekrutacja dodatkowa na rok 2025/2026",
    date: new Date("2025-04-20"),
    excerpt: "Informujemy, że uruchamiamy dodatkową rekrutację na rok szkolny 2025/2026. Mamy jeszcze kilka wolnych miejsc w grupach wiekowych 1-2 i 2-3 lata.",
    content: `
      <p>Informujemy, że uruchamiamy dodatkową rekrutację na rok szkolny 2025/2026. Mamy jeszcze kilka wolnych miejsc w grupach wiekowych 1-2 i 2-3 lata.</p>
      <p>Rekrutacja potrwa od 20 kwietnia do 20 maja 2025. Aby zapisać dziecko, należy:</p>
      <ul>
        <li>Wypełnić formularz zgłoszeniowy dostępny na naszej stronie</li>
        <li>Złożyć go w sekretariacie żłobka</li>
        <li>Umówić się na rozmowę kwalifikacyjną</li>
      </ul>
      <p>Zapraszamy do kontaktu, chętnie odpowiemy na wszystkie pytania.</p>
    `
  }
];

// Hook do pobierania wszystkich aktualności
export const useAllNews = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Sortujemy aktualności od najnowszych do najstarszych
    const sortedNews = [...mockNews].sort((a, b) => 
      b.date.getTime() - a.date.getTime()
    );
    
    setNews(sortedNews);
    setIsLoading(false);
  }, []);

  return { news, isLoading, error };
};

// Hook do pobierania najnowszych aktualności (limit określa liczbę)
export const useLatestNews = (limit: number = 3) => {
  const { news, isLoading, error } = useAllNews();
  const limitedNews = news.slice(0, limit);

  return { news: limitedNews, isLoading, error };
};

// Hook do pobierania pojedynczej aktualności po ID
export const useNewsById = (id: string) => {
  const [newsItem, setNewsItem] = useState<NewsItem | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const item = mockNews.find(item => item.id === id);
    
    if (item) {
      setNewsItem(item);
    } else {
      setError("Nie znaleziono aktualności o podanym ID");
    }
    
    setIsLoading(false);
  }, [id]);

  return { newsItem, isLoading, error };
};
