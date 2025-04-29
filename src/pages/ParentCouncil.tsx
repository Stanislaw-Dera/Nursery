
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Calendar, PiggyBank } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const ParentCouncil = () => {
  return (
    <div className="min-h-screen bg-green-50">
      {/* Nagłówek strony */}
      <header className="bg-green-700 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Rada rodziców</h1>
          <p className="text-green-100 mt-2">Informacje o radzie rodziców w naszym żłobku</p>
        </div>
      </header>

      {/* Sekcja główna */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Informacje ogólne */}
          <Card className="mb-8">
            <CardHeader className="bg-green-50">
              <CardTitle className="flex items-center text-2xl text-green-700">
                <Users className="mr-2 h-6 w-6" />
                O radzie rodziców
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4 text-gray-700">
                <p>
                  Rada rodziców to organ przedstawicielski rodziców dzieci uczęszczających do naszego żłobka. 
                  Współpracuje ona z dyrekcją i personelem żłobka w celu doskonalenia organizacji i warunków pracy placówki.
                </p>
                <p>
                  Rada rodziców jest wybierana na początku każdego roku szkolnego w demokratycznych wyborach. 
                  Składa się z przedstawicieli rodziców z każdej grupy wiekowej.
                </p>
                <p>
                  Głównym zadaniem rady jest reprezentowanie interesów wszystkich rodziców oraz wspieranie 
                  placówki w realizacji jej statutowych zadań związanych z opieką, wychowaniem i edukacją dzieci.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-green-700 mb-4">Zadania rady rodziców:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Współpraca z dyrekcją i personelem żłobka</li>
                  <li>Organizacja i wsparcie wydarzeń okolicznościowych</li>
                  <li>Opiniowanie ważnych decyzji dotyczących funkcjonowania placówki</li>
                  <li>Gromadzenie funduszy na dodatkowe wyposażenie i pomoce dydaktyczne</li>
                  <li>Organizacja zajęć dodatkowych i atrakcji dla dzieci</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Skład rady */}
          <Card className="mb-8">
            <CardHeader className="bg-green-50">
              <CardTitle className="flex items-center text-2xl text-green-700">
                <Users className="mr-2 h-6 w-6" />
                Skład rady rodziców (rok 2025/2026)
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-green-700">Prezydium rady:</h4>
                  <div className="mt-3 space-y-3">
                    <div className="flex items-center">
                      <div className="w-1/3 font-medium">Przewodniczący:</div>
                      <div>Anna Malinowska (mama Zosi, grupa Motylki)</div>
                    </div>
                    <Separator className="bg-green-100" />
                    <div className="flex items-center">
                      <div className="w-1/3 font-medium">Zastępca przewodniczącego:</div>
                      <div>Marek Jaworski (tata Jasia, grupa Misie)</div>
                    </div>
                    <Separator className="bg-green-100" />
                    <div className="flex items-center">
                      <div className="w-1/3 font-medium">Skarbnik:</div>
                      <div>Joanna Kowalska (mama Adasia, grupa Słoneczka)</div>
                    </div>
                    <Separator className="bg-green-100" />
                    <div className="flex items-center">
                      <div className="w-1/3 font-medium">Sekretarz:</div>
                      <div>Tomasz Nowicki (tata Oli, grupa Motylki)</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-green-700">Przedstawiciele grup:</h4>
                  <div className="mt-3 space-y-3">
                    <div className="flex items-center">
                      <div className="w-1/3 font-medium">Grupa Słoneczka:</div>
                      <div>Agnieszka Wiśniewska, Piotr Zieliński</div>
                    </div>
                    <Separator className="bg-green-100" />
                    <div className="flex items-center">
                      <div className="w-1/3 font-medium">Grupa Misie:</div>
                      <div>Katarzyna Dąbrowska, Marek Jaworski</div>
                    </div>
                    <Separator className="bg-green-100" />
                    <div className="flex items-center">
                      <div className="w-1/3 font-medium">Grupa Motylki:</div>
                      <div>Anna Malinowska, Tomasz Nowicki</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Składka na fundusz rady rodziców */}
          <Card className="mb-8">
            <CardHeader className="bg-green-50">
              <CardTitle className="flex items-center text-2xl text-green-700">
                <PiggyBank className="mr-2 h-6 w-6" />
                Fundusz rady rodziców
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4 text-gray-700">
                <p>
                  Działalność rady rodziców wspierana jest przez dobrowolne składki wpłacane przez rodziców. 
                  Zgromadzone środki przeznaczane są na dodatkowe wyposażenie żłobka oraz organizację wydarzeń 
                  dla dzieci, takich jak Mikołajki, Dzień Dziecka, bal karnawałowy czy wycieczki.
                </p>

                <div className="mt-6 bg-green-50 p-6 rounded-lg border border-green-200">
                  <h4 className="text-lg font-medium text-green-700 mb-4">Składka na rok szkolny 2025/2026:</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Wysokość składki:</span>
                      <span className="text-lg font-semibold text-green-700">150 zł / rok</span>
                    </div>
                    <Separator className="bg-green-200" />
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Termin wpłaty:</span>
                      <span>do 31 października 2025</span>
                    </div>
                    <Separator className="bg-green-200" />
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Możliwość wpłaty w ratach:</span>
                      <span>2 x 75 zł (do 31.10.2025 i 31.01.2026)</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="font-medium mb-2">Dane do przelewu:</p>
                  <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                    <dl className="space-y-2 text-sm">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        <dt className="font-medium">Nazwa odbiorcy:</dt>
                        <dd className="sm:col-span-2">Rada Rodziców przy Żłobku Małe Skarby</dd>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        <dt className="font-medium">Numer konta:</dt>
                        <dd className="sm:col-span-2 font-mono">98 7654 3210 9876 5432 1098 7654</dd>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        <dt className="font-medium">Tytuł przelewu:</dt>
                        <dd className="sm:col-span-2">Składka RR, imię i nazwisko dziecka, grupa</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Plan pracy */}
          <Card className="mb-8">
            <CardHeader className="bg-green-50">
              <CardTitle className="flex items-center text-2xl text-green-700">
                <Calendar className="mr-2 h-6 w-6" />
                Plan pracy rady rodziców
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6 text-gray-700">
                <p>
                  Rada rodziców działa według ustalonego planu pracy, który jest dostosowany do kalendarza 
                  roku szkolnego oraz planowanych wydarzeń w żłobku.
                </p>

                <div>
                  <h4 className="text-lg font-medium text-green-700 mb-3">Harmonogram spotkań:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Zebranie organizacyjne - wrzesień 2025</li>
                    <li>Spotkanie dot. wydarzeń zimowych - listopad 2025</li>
                    <li>Zebranie sprawozdawcze za I semestr - luty 2026</li>
                    <li>Spotkanie dot. wydarzeń wiosennych - kwiecień 2026</li>
                    <li>Zebranie podsumowujące rok - czerwiec 2026</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-green-700 mb-3">Planowane projekty i wydarzenia:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-white rounded-lg border border-green-100">
                      <h5 className="font-medium mb-2">Jesień/Zima 2025</h5>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Doposażenie kącików tematycznych</li>
                        <li>Organizacja warsztatów świątecznych</li>
                        <li>Mikołajki dla dzieci</li>
                        <li>Bal karnawałowy</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg border border-green-100">
                      <h5 className="font-medium mb-2">Wiosna/Lato 2026</h5>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Zakup zabawek ogrodowych</li>
                        <li>Organizacja Dnia Dziecka</li>
                        <li>Piknik rodzinny</li>
                        <li>Wycieczka do mini zoo</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Kontakt */}
          <Card>
            <CardHeader className="bg-green-50">
              <CardTitle className="flex items-center text-2xl text-green-700">
                <Target className="mr-2 h-6 w-6" />
                Kontakt z radą rodziców
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4 text-gray-700">
                <p>
                  Zachęcamy wszystkich rodziców do aktywnego udziału w pracach rady i dzielenia się swoimi 
                  pomysłami i spostrzeżeniami. Kontakt z radą rodziców możliwy jest poprzez:
                </p>

                <ul className="space-y-3 mt-4">
                  <li className="flex items-start">
                    <div className="mr-2">•</div>
                    <div>
                      <span className="font-medium">E-mail:</span> rr@maleskarby.pl
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2">•</div>
                    <div>
                      <span className="font-medium">Skrzynka kontaktowa:</span> w holu głównym żłobka
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2">•</div>
                    <div>
                      <span className="font-medium">Dyżury rady:</span> w każdy pierwszy poniedziałek miesiąca, godz. 16:30-17:30, w sali konferencyjnej
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2">•</div>
                    <div>
                      <span className="font-medium">Bezpośredni kontakt:</span> do przedstawicieli grup (dane kontaktowe dostępne u wychowawców)
                    </div>
                  </li>
                </ul>

                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-md">
                  <p>
                    <strong>Uwaga:</strong> Regulamin rady rodziców oraz sprawozdania finansowe są dostępne do wglądu 
                    dla wszystkich rodziców w sekretariacie żłobka oraz na zebraniach rady.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ParentCouncil;
