
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Calendar, CreditCard, Users, UserCheck } from "lucide-react";

const informationSections = [
  {
    title: "Dokumenty i Ubezpieczenie",
    description: "Dokumenty do pobrania oraz informacje dotyczące ubezpieczenia dzieci.",
    icon: <FileText className="h-12 w-12 text-green-600" />,
    link: "/informacje/dokumenty"
  },
  {
    title: "Dostępność nauczycieli",
    description: "Godziny dyżurów i konsultacji z nauczycielami w formie kalendarza.",
    icon: <Calendar className="h-12 w-12 text-green-600" />,
    link: "/informacje/dostepnosc-nauczycieli"
  },
  {
    title: "Odpłatności",
    description: "Informacje o opłatach, terminach płatności i sposobach rozliczeń.",
    icon: <CreditCard className="h-12 w-12 text-green-600" />,
    link: "/informacje/odplatnosci"
  },
  {
    title: "Rada rodziców",
    description: "Skład rady rodziców, wysokość wpłat i informacje organizacyjne.",
    icon: <Users className="h-12 w-12 text-green-600" />,
    link: "/informacje/rada-rodzicow"
  },
  {
    title: "Kadra",
    description: "Informacje o nauczycielach i personelu naszego żłobka.",
    icon: <UserCheck className="h-12 w-12 text-green-600" />,
    link: "/informacje/kadra"
  }
];

const Information = () => {
  return (
    <div className="min-h-screen bg-green-50">
      {/* Nagłówek strony */}
      <header className="bg-green-700 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Informacje</h1>
          <p className="text-green-100 mt-2">Wszystko, co potrzebujesz wiedzieć o naszym żłobku</p>
        </div>
      </header>

      {/* Sekcje informacyjne */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {informationSections.map((section, index) => (
              <Link key={index} to={section.link}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-green-200 hover:border-green-400">
                  <CardHeader className="flex flex-col items-center">
                    <div className="mb-4">{section.icon}</div>
                    <CardTitle className="text-xl text-center text-green-700">{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-600">
                      {section.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="pt-0 justify-center">
                    <span className="text-green-600 font-medium">Dowiedz się więcej</span>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Dodatkowe informacje */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Najczęściej zadawane pytania</h2>
            <div className="space-y-6">
              <div className="border-b border-green-100 pb-4">
                <h3 className="text-lg font-medium text-green-600 mb-2">Jakie są godziny otwarcia żłobka?</h3>
                <p className="text-gray-700">Nasz żłobek jest otwarty od poniedziałku do piątku w godzinach 6:30 - 17:00. W weekendy i święta placówka jest zamknięta.</p>
              </div>
              <div className="border-b border-green-100 pb-4">
                <h3 className="text-lg font-medium text-green-600 mb-2">Czy zapewniacie wyżywienie?</h3>
                <p className="text-gray-700">Tak, zapewniamy pełne wyżywienie dla dzieci (śniadanie, obiad, podwieczorek). Menu jest układane we współpracy z dietetykiem i dostosowane do potrzeb dzieci w różnym wieku.</p>
              </div>
              <div className="border-b border-green-100 pb-4">
                <h3 className="text-lg font-medium text-green-600 mb-2">Co zrobić w przypadku choroby dziecka?</h3>
                <p className="text-gray-700">W przypadku choroby dziecka prosimy o poinformowanie personelu żłobka telefonicznie lub mailowo. Dzieci chore nie mogą uczęszczać do żłobka - to ważne dla zdrowia wszystkich podopiecznych.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Information;
