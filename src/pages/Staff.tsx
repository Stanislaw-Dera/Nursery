
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTeachers } from "@/hooks/useTeachers";
import { Skeleton } from "@/components/ui/skeleton";
import { UserCheck, UserCircle2, GraduationCap, Brain, BarChart3 } from "lucide-react";

const Staff = () => {
  const { data: teachers = [], isLoading } = useTeachers();

  // Grupowanie nauczycieli według stanowisk
  const directors = teachers.filter(teacher => 
    teacher.position.toLowerCase().includes("dyrektor"));
  const viceDirectors = teachers.filter(teacher => 
    teacher.position.toLowerCase().includes("wicedyrektor") || 
    teacher.position.toLowerCase().includes("zastępca dyrektora"));
  const teachers_therapists = teachers.filter(teacher => 
    (teacher.position.toLowerCase().includes("nauczyciel") || 
     teacher.position.toLowerCase().includes("terapeut")) && 
    !teacher.position.toLowerCase().includes("dyrektor"));
  const speechTherapists = teachers.filter(teacher => 
    teacher.position.toLowerCase().includes("logoped"));
  const otherStaff = teachers.filter(teacher => 
    !teacher.position.toLowerCase().includes("dyrektor") && 
    !teacher.position.toLowerCase().includes("nauczyciel") && 
    !teacher.position.toLowerCase().includes("terapeut") && 
    !teacher.position.toLowerCase().includes("logoped"));

  // Renderowanie sekcji z personelem
  const renderStaffSection = (title, staffList, icon) => (
    <div className="mb-12">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-bold text-green-700 ml-2">{title}</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {staffList.map((person) => (
          <Card key={person.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-green-700">{person.name}</CardTitle>
              <CardDescription className="font-medium">{person.position}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{person.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

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

          {isLoading ? (
            // Skeletony podczas ładowania
            <div className="space-y-8">
              {[1, 2, 3].map((section) => (
                <div key={section}>
                  <Skeleton className="h-8 w-48 mb-4" />
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array(3).fill(0).map((_, index) => (
                      <Card key={index}>
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
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Sekcje personelu
            <div>
              {directors.length > 0 && renderStaffSection(
                "Dyrektor", 
                directors, 
                <UserCircle2 className="h-6 w-6 text-green-700" />
              )}
              
              {viceDirectors.length > 0 && renderStaffSection(
                "Wicedyrektor", 
                viceDirectors, 
                <BarChart3 className="h-6 w-6 text-green-700" />
              )}
              
              {teachers_therapists.length > 0 && renderStaffSection(
                "Nauczyciele i Terapeuci", 
                teachers_therapists, 
                <GraduationCap className="h-6 w-6 text-green-700" />
              )}
              
              {speechTherapists.length > 0 && renderStaffSection(
                "Logopedzi", 
                speechTherapists, 
                <Brain className="h-6 w-6 text-green-700" />
              )}
              
              {otherStaff.length > 0 && renderStaffSection(
                "Pozostały personel", 
                otherStaff, 
                <UserCheck className="h-6 w-6 text-green-700" />
              )}
            </div>
          )}

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
