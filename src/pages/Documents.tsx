
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

// Dokumenty związane z ubezpieczeniem
const insuranceDocuments = [
  {
    id: "ins1",
    title: "Polisa ubezpieczeniowa",
    description: "Aktualna polisa ubezpieczeniowa żłobka na rok 2025.",
    fileType: "PDF",
    fileSize: "245KB",
    downloadUrl: "#"
  },
  {
    id: "ins2",
    title: "Ogólne warunki ubezpieczenia",
    description: "Pełne warunki ubezpieczenia wraz z zakresem ochrony i wyłączeniami.",
    fileType: "PDF",
    fileSize: "520KB",
    downloadUrl: "#"
  },
  {
    id: "ins3",
    title: "Procedura zgłoszenia szkody",
    description: "Instrukcja postępowania w przypadku wystąpienia wypadku.",
    fileType: "PDF",
    fileSize: "186KB",
    downloadUrl: "#"
  },
  {
    id: "ins4",
    title: "Formularz zgłoszenia szkody",
    description: "Dokument do wypełnienia w przypadku wystąpienia wypadku.",
    fileType: "PDF",
    fileSize: "132KB",
    downloadUrl: "#"
  }
];

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
            <div className="max-w-3xl mb-8">
              <p className="mb-6 text-gray-700">
                Wszystkie dzieci uczęszczające do naszego żłobka są objęte grupowym ubezpieczeniem NNW. 
                Ubezpieczenie zapewnia ochronę w przypadku nieszczęśliwych wypadków na terenie żłobka oraz 
                podczas wycieczek organizowanych przez placówkę.
              </p>
            </div>

            <h3 className="text-xl font-medium text-green-700 mb-4">Dokumenty ubezpieczeniowe:</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {insuranceDocuments.map((doc) => (
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

            <div className="mt-8 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="text-yellow-700">
                <strong>Ważne:</strong> W przypadku wypadku należy niezwłocznie poinformować personel żłobka oraz wypełnić
                formularz zgłoszenia szkody dostępny powyżej lub w sekretariacie placówki.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Documents;
