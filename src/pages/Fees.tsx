
import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, HelpCircle, Clock, AlertCircle } from "lucide-react";

const Fees = () => {
  return (
    <div className="min-h-screen bg-green-50">
      {/* Nagłówek strony */}
      <header className="bg-green-700 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Odpłatności</h1>
          <p className="text-green-100 mt-2">Informacje o opłatach i płatnościach</p>
        </div>
      </header>

      {/* Sekcja opłat */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Tabela opłat */}
          <Card className="mb-8">
            <CardHeader className="bg-green-50">
              <CardTitle className="flex items-center text-2xl text-green-700">
                <CreditCard className="mr-2 h-6 w-6" />
                Cennik
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[300px]">Usługa</TableHead>
                    <TableHead className="text-right">Opłata</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Opłata miesięczna - pobyt podstawowy (7:00-16:00)</TableCell>
                    <TableCell className="text-right">1000 zł</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Opłata miesięczna - pobyt wydłużony (6:30-17:00)</TableCell>
                    <TableCell className="text-right">1200 zł</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Dzienna stawka żywieniowa</TableCell>
                    <TableCell className="text-right">15 zł</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Jednorazowa opłata wpisowa</TableCell>
                    <TableCell className="text-right">300 zł</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Zajęcia dodatkowe (rytmika)</TableCell>
                    <TableCell className="text-right">50 zł / miesiąc</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Zajęcia dodatkowe (język angielski)</TableCell>
                    <TableCell className="text-right">60 zł / miesiąc</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Informacje o płatnościach */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader className="bg-green-50">
                <CardTitle className="flex items-center text-xl text-green-700">
                  <Clock className="mr-2 h-5 w-5" />
                  Terminy płatności
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Opłata stała:</strong> do 10 dnia każdego miesiąca
                  </p>
                  <p>
                    <strong>Opłata za wyżywienie:</strong> do 10 dnia kolejnego miesiąca (po rozliczeniu obecności)
                  </p>
                  <p>
                    <strong>Opłaty za zajęcia dodatkowe:</strong> do 15 dnia każdego miesiąca
                  </p>
                  <p className="pt-2 text-sm text-gray-600">
                    Płatności należy dokonywać przelewem na konto bankowe żłobka lub gotówką w sekretariacie.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-green-50">
                <CardTitle className="flex items-center text-xl text-green-700">
                  <HelpCircle className="mr-2 h-5 w-5" />
                  Zasady rozliczeń
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Nieobecności:</strong> Opłata za wyżywienie jest pomniejszana za dni nieobecności dziecka pod warunkiem zgłoszenia nieobecności do godz. 8:00 danego dnia.
                  </p>
                  <p>
                    <strong>Opłata stała:</strong> Jest naliczana bez względu na liczbę dni obecności dziecka w żłobku.
                  </p>
                  <p>
                    <strong>Przerwy urlopowe:</strong> W okresie wakacyjnym (lipiec lub sierpień) obowiązuje zniżka 50% opłaty stałej za 2 tygodnie zadeklarowanej nieobecności.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Dane do przelewu */}
          <Card className="mt-8">
            <CardHeader className="bg-green-50">
              <CardTitle className="flex items-center text-xl text-green-700">
                <CreditCard className="mr-2 h-5 w-5" />
                Dane do przelewu
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                <dl className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <dt className="font-medium text-gray-700">Nazwa odbiorcy:</dt>
                    <dd className="sm:col-span-2">Żłobek Małe Skarby</dd>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <dt className="font-medium text-gray-700">Adres:</dt>
                    <dd className="sm:col-span-2">ul. Kwiatowa 5, 00-001 Warszawa</dd>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <dt className="font-medium text-gray-700">Numer konta:</dt>
                    <dd className="sm:col-span-2 font-mono">12 3456 7890 1234 5678 9012 3456</dd>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <dt className="font-medium text-gray-700">Tytuł przelewu:</dt>
                    <dd className="sm:col-span-2">Imię i nazwisko dziecka, grupa, miesiąc, rodzaj opłaty</dd>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <dt className="font-medium text-gray-700">Przykład:</dt>
                    <dd className="sm:col-span-2 text-sm italic text-gray-600">Jan Kowalski, Misie, maj 2025, opłata stała + wyżywienie</dd>
                  </div>
                </dl>
              </div>
            </CardContent>
          </Card>

          {/* Dodatkowe informacje */}
          <div className="mt-8 p-4 border-l-4 border-yellow-500 bg-yellow-50">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertCircle className="h-5 w-5 text-yellow-600" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">Ważne informacje:</h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <p>
                    Za opóźnienia w płatnościach naliczane są odsetki ustawowe. W przypadku zalegania z opłatami
                    przez okres dłuższy niż 2 miesiące, umowa o świadczeniu usług może zostać rozwiązana.
                    W sytuacjach losowych prosimy o kontakt z sekretariatem w celu ustalenia indywidualnych warunków płatności.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fees;
