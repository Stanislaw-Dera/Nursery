
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// Przykładowe dokumenty - w prawdziwym projekcie byłyby pobierane z API/bazy danych
const documents = [
  {
    id: "1",
    title: "Formularz zgłoszeniowy",
    description: "Formularz wymagany przy zapisie dziecka do żłobka.",
    fileType: "PDF",
    fileSize: "156KB",
    downloadUrl: "#"
  },
  {
    id: "2",
    title: "Karta informacyjna o dziecku",
    description: "Dokument zawierający ważne informacje o dziecku (alergie, przyzwyczajenia, itp.).",
    fileType: "PDF",
    fileSize: "128KB",
    downloadUrl: "#"
  },
  {
    id: "3",
    title: "Regulamin żłobka",
    description: "Pełny regulamin żłobka Małe Skarby.",
    fileType: "PDF",
    fileSize: "324KB",
    downloadUrl: "#"
  },
  {
    id: "4",
    title: "Upoważnienie do odbioru dziecka",
    description: "Formularz upoważniający osoby trzecie do odbioru dziecka ze żłobka.",
    fileType: "PDF",
    fileSize: "98KB",
    downloadUrl: "#"
  },
  {
    id: "5",
    title: "Zgoda na publikację wizerunku",
    description: "Dokument dotyczący zgody na publikację zdjęć dziecka na stronie żłobka.",
    fileType: "PDF",
    fileSize: "112KB",
    downloadUrl: "#"
  }
];

// Informacje o ubezpieczeniu
const insuranceInfo = {
  company: "BezpiecznyMaluch S.A.",
  policyNumber: "ZŁ/2025/1234",
  coveragePeriod: "01.01.2025 - 31.12.2025",
  contactPhone: "800 123 456",
  email: "kontakt@bezpiecznymaluch.pl"
};

const Documents = () => {
  return (
    <div className="min-h-screen bg-green-50">
      {/* Nagłówek strony */}
      <header className="bg-green-700 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Dokumenty i Ubezpieczenie</h1>
          <p className="text-green-100 mt-2">Ważne dokumenty do pobrania i informacje o ubezpieczeniu</p>
        </div>
      </header>

      {/* Sekcja dokumentów */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-6 mb-10">
            <h2 className="text-2xl font-bold text-green-700 mb-6 flex items-center">
              <FileText className="mr-2 h-6 w-6" />
              Dokumenty do pobrania
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {documents.map((doc) => (
                <Card key={doc.id} className="border-green-200 hover:shadow-md transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-green-700">{doc.title}</CardTitle>
                    <CardDescription>{doc.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Format: </span>{doc.fileType} • <span className="font-medium">Rozmiar: </span>{doc.fileSize}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      <Download className="mr-2 h-4 w-4" /> Pobierz dokument
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          {/* Sekcja ubezpieczenia */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-green-700 mb-6 flex items-center">
              <Shield className="mr-2 h-6 w-6" />
              Ubezpieczenie
            </h2>
            <div className="max-w-3xl">
              <p className="mb-6 text-gray-700">
                Wszystkie dzieci uczęszczające do naszego żłobka są objęte grupowym ubezpieczeniem NNW. 
                Ubezpieczenie zapewnia ochronę w przypadku nieszczęśliwych wypadków na terenie żłobka oraz 
                podczas wycieczek organizowanych przez placówkę.
              </p>

              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-xl font-medium text-green-700 mb-4">Informacje o ubezpieczeniu</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Ubezpieczyciel:</span>
                    <span>{insuranceInfo.company}</span>
                  </div>
                  <Separator className="bg-green-200" />
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Numer polisy:</span>
                    <span>{insuranceInfo.policyNumber}</span>
                  </div>
                  <Separator className="bg-green-200" />
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Okres ubezpieczenia:</span>
                    <span>{insuranceInfo.coveragePeriod}</span>
                  </div>
                  <Separator className="bg-green-200" />
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Telefon kontaktowy:</span>
                    <span>{insuranceInfo.contactPhone}</span>
                  </div>
                  <Separator className="bg-green-200" />
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Email:</span>
                    <span>{insuranceInfo.email}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-gray-700 mb-4">
                  W przypadku wypadku, należy:
                </p>
                <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                  <li>Niezwłocznie poinformować personel żłobka o zaistniałej sytuacji.</li>
                  <li>Wypełnić formularz zgłoszenia szkody (dostępny w sekretariacie).</li>
                  <li>Skontaktować się z ubezpieczycielem pod podanymi numerami telefonów.</li>
                </ol>
              </div>

              <div className="mt-8 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-yellow-700">
                  <strong>Ważne:</strong> Szczegółowe warunki ubezpieczenia, w tym zakres ochrony i wyłączenia, 
                  dostępne są w sekretariacie żłobka. Zachęcamy rodziców do zapoznania się z pełną treścią polisy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Documents;
