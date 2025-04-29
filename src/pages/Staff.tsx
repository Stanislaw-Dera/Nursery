
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTeachers } from "@/hooks/useTeachers";
import { Skeleton } from "@/components/ui/skeleton";
import { UserCheck } from "lucide-react";

const Staff = () => {
  const { data: teachers = [], isLoading } = useTeachers();

  return (
    <div className="min-h-screen bg-green-50">
      {/* Nagłówek strony */}
      <header className="bg-green-700 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Kadra</h1>
          <p className="text-green-100 mt-2">Poznaj nasz zespół nauczycieli i specjalistów</p>
        </div>
      </header>

      {/* Sekcja z personelem */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Wprowadzenie */}
          <div className="mb-10 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-green-100 rounded-full mb-4">
              <UserCheck className="h-6 w-6 text-green-700" />
            </div>
            <h2 className="text-2xl font-bold text-green-700 mb-4">Nasz zespół</h2>
            <p className="text-gray-700">
              Nasz wykwalifikowany i doświadczony personel zapewnia profesjonalną opiekę i wspiera 
              rozwój dzieci w przyjaznej i bezpiecznej atmosferze. Każdy z naszych pracowników 
              posiada odpowiednie kwalifikacje zawodowe i pasję do pracy z dziećmi.
            </p>
          </div>

          {/* Lista pracowników */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              // Skeletony podczas ładowania
              Array(6).fill(0).map((_, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-[3/2] w-full">
                    <Skeleton className="h-full w-full" />
                  </div>
                  <CardHeader>
                    <Skeleton className="h-6 w-2/3 mb-1" />
                    <Skeleton className="h-4 w-1/2" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-2/3" />
                  </CardContent>
                </Card>
              ))
            ) : (
              // Karty pracowników
              teachers.map((teacher) => (
                <Card key={teacher.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-[3/2] w-full overflow-hidden">
                    <img 
                      src={teacher.imageUrl || "/placeholder.svg"} 
                      alt={teacher.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-green-700">{teacher.name}</CardTitle>
                    <CardDescription className="font-medium">{teacher.position}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{teacher.bio}</p>
                  </CardContent>
                </Card>
              ))
            )}
          </div>

          {/* Dodatkowe informacje */}
          <div className="mt-12 max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-green-700 mb-4">Kwalifikacje naszej kadry</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                Wszyscy nasi nauczyciele posiadają wykształcenie pedagogiczne oraz doświadczenie w pracy z dziećmi.
                Regularnie uczestniczą w szkoleniach i warsztatach podnoszących ich kwalifikacje.
              </p>
              <p>
                Nad zdrowiem i bezpieczeństwem dzieci czuwa wykwalifikowany personel medyczny,
                a rozwój psychologiczny wspierany jest przez doświadczonego psychologa dziecięcego.
              </p>
              <p>
                Nasz zespół współpracuje ze sobą, aby zapewnić kompleksową opiekę i indywidualne podejście
                do potrzeb każdego dziecka.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Staff;
