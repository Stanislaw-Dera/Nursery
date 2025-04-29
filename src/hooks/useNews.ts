
import { useQuery } from "@tanstack/react-query";
import { NewsItem } from "@/types/news";

// Przykładowe dane aktualności (w przyszłości można zamienić na API)
const mockNews: NewsItem[] = [
  {
    id: "1",
    title: "Zapisy na nowy rok szkolny",
    date: new Date("2025-04-15"),
    excerpt: "Informujemy, że rozpoczęliśmy zapisy na nowy rok szkolny 2025/2026. Zapraszamy rodziców do składania dokumentów.",
    content: `
      <p>Szanowni Rodzice,</p>
      <p>Z przyjemnością informujemy, że od 15 kwietnia rozpoczynamy zapisy do naszego żłobka na rok szkolny 2025/2026.</p>
      <p>Wymagane dokumenty:</p>
      <ul>
        <li>Formularz zgłoszeniowy (dostępny w zakładce Dokumenty)</li>
        <li>Karta informacyjna o dziecku</li>
        <li>Kopia książeczki zdrowia dziecka z aktualnymi szczepieniami</li>
      </ul>
      <p>Zapisy prowadzone są w sekretariacie żłobka w godzinach 8:00-16:00 od poniedziałku do piątku.</p>
      <p>Liczba miejsc jest ograniczona, decyduje kolejność zgłoszeń.</p>
    `
  },
  {
    id: "2",
    title: "Dzień Rodziny w żłobku",
    date: new Date("2025-04-10"),
    excerpt: "Zapraszamy wszystkich rodziców na wspólne świętowanie Dnia Rodziny, które odbędzie się w naszym ogrodzie.",
    content: `
      <p>Drodzy Rodzice,</p>
      <p>Z okazji zbliżającego się Dnia Matki i Dnia Ojca organizujemy wspólne świętowanie Dnia Rodziny w naszym żłobku.</p>
      <p><strong>Kiedy:</strong> 25 maja 2025, godz. 10:00-13:00</p>
      <p><strong>Gdzie:</strong> Ogród żłobkowy (w przypadku deszczu sala gimnastyczna)</p>
      <p><strong>W programie:</strong></p>
      <ul>
        <li>Występy artystyczne dzieci</li>
        <li>Wspólne gry i zabawy</li>
        <li>Poczęstunek</li>
        <li>Niespodzianka dla rodziców</li>
      </ul>
      <p>Prosimy o potwierdzenie obecności u wychowawców grup do 20 maja.</p>
      <p>Serdecznie zapraszamy!</p>
    `
  },
  {
    id: "3",
    title: "Warsztaty sensoryczne dla maluchów",
    date: new Date("2025-04-05"),
    excerpt: "W najbliższym miesiącu rozpoczynamy cykl warsztatów sensorycznych dla najmłodszych dzieci. Sprawdź szczegóły.",
    content: `
      <p>Szanowni Rodzice,</p>
      <p>Z radością informujemy, że od maja rozpoczynamy cykl warsztatów sensorycznych dla dzieci w wieku 1-3 lat.</p>
      <p>Warsztaty będą odbywać się raz w tygodniu (w każdy wtorek) i będą prowadzone przez specjalistę integracji sensorycznej.</p>
      <p><strong>Korzyści dla dzieci:</strong></p>
      <ul>
        <li>Rozwój koordynacji wzrokowo-ruchowej</li>
        <li>Stymulacja zmysłów</li>
        <li>Wsparcie rozwoju motorycznego</li>
        <li>Nauka poprzez doświadczanie</li>
      </ul>
      <p>Warsztaty są bezpłatne dla wszystkich dzieci uczęszczających do naszego żłobka.</p>
      <p>Szczegółowy harmonogram zostanie przekazany przez wychowawców.</p>
    `
  },
  {
    id: "4",
    title: "Nowa sala zabaw już otwarta!",
    date: new Date("2025-03-28"),
    excerpt: "Ukończyliśmy prace nad nową salą zabaw wyposażoną w nowoczesny sprzęt edukacyjny. Zapraszamy do obejrzenia galerii.",
    content: `
      <p>Z wielką przyjemnością informujemy, że zakończyliśmy prace nad nową salą zabaw w naszym żłobku!</p>
      <p>Sala została wyposażona w:</p>
      <ul>
        <li>Nowoczesny sprzęt do zabaw sensorycznych</li>
        <li>Bezpieczne przyrządy wspierające rozwój motoryki dużej</li>
        <li>Kąciki tematyczne (kuchnia, warsztat, sklep)</li>
        <li>Biblioteczkę z książeczkami dostosowanymi do wieku dzieci</li>
        <li>Interaktywne tablice edukacyjne</li>
      </ul>
      <p>Wszystkie instalacje spełniają najwyższe standardy bezpieczeństwa i mają certyfikaty dopuszczenia do użytku przez dzieci.</p>
      <p>Zapraszamy do obejrzenia galerii zdjęć w naszej placówce!</p>
    `
  },
  {
    id: "5",
    title: "Zmiany w jadłospisie - nowe menu",
    date: new Date("2025-03-20"),
    excerpt: "Od kwietnia wprowadzamy nowe, zbilansowane menu opracowane we współpracy z dietetykiem dziecięcym.",
    content: `
      <p>Drodzy Rodzice,</p>
      <p>Dbając o zdrowie i prawidłowy rozwój naszych podopiecznych, wprowadzamy nowe menu w naszym żłobku.</p>
      <p>Nowy jadłospis został opracowany we współpracy z dietetykiem dziecięcym i uwzględnia:</p>
      <ul>
        <li>Sezonowe warzywa i owoce</li>
        <li>Pełnoziarniste produkty zbożowe</li>
        <li>Ograniczenie cukru i soli</li>
        <li>Różnorodne źródła białka</li>
        <li>Produkty bogate w wapń i witaminy</li>
      </ul>
      <p>Tygodniowy jadłospis będzie wywieszany na tablicy ogłoszeń oraz dostępny na naszej stronie internetowej.</p>
      <p>Przypominamy o zgłaszaniu wszelkich alergii pokarmowych i specjalnych wymagań dietetycznych u wychowawców.</p>
    `
  }
];

// Hook do pobierania wszystkich aktualności
export const useAllNews = () => {
  return useQuery({
    queryKey: ["news"],
    queryFn: async () => {
      // W przyszłości tutaj będzie zapytanie do API/bazy danych
      return mockNews.sort((a, b) => b.date.getTime() - a.date.getTime());
    }
  });
};

// Hook do pobierania konkretnego newsa po ID
export const useNewsById = (id: string) => {
  return useQuery({
    queryKey: ["news", id],
    queryFn: async () => {
      // W przyszłości tutaj będzie zapytanie do API/bazy danych
      const newsItem = mockNews.find(item => item.id === id);
      if (!newsItem) {
        throw new Error("Nie znaleziono aktualności o podanym ID");
      }
      return newsItem;
    }
  });
};

// Hook do pobierania ograniczonej liczby najnowszych aktualności
export const useLatestNews = (limit: number = 3) => {
  const { data: allNews = [], isLoading, error } = useAllNews();
  
  const news = allNews.slice(0, limit);
  
  return { news, isLoading, error };
};
