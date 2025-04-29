
import React, { useState } from "react";
import { useTeachers, useTeacherAvailability } from "@/hooks/useTeachers";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar } from "lucide-react";

const TeacherAvailability = () => {
  const [selectedTeacherId, setSelectedTeacherId] = useState<string>("");
  const { data: teachers = [], isLoading: isLoadingTeachers } = useTeachers();
  const { data: availabilities = [], isLoading: isLoadingAvailability } = useTeacherAvailability(selectedTeacherId);

  const handleTeacherChange = (value: string) => {
    setSelectedTeacherId(value);
  };

  // Nazwy dni tygodnia
  const daysOfWeek = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek"];

  return (
    <div className="min-h-screen bg-green-50">
      {/* Nagłówek strony */}
      <header className="bg-green-700 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Dostępność nauczycieli</h1>
          <p className="text-green-100 mt-2">Sprawdź godziny konsultacji z nauczycielami</p>
        </div>
      </header>

      {/* Sekcja wyboru nauczyciela i kalendarza */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-6 mb-10">
            <div className="flex items-center mb-8">
              <Calendar className="h-6 w-6 text-green-600 mr-2" />
              <h2 className="text-2xl font-bold text-green-700">Godziny konsultacji</h2>
            </div>

            <div className="max-w-md mx-auto mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Wybierz nauczyciela:
              </label>
              {isLoadingTeachers ? (
                <Skeleton className="h-10 w-full rounded-md" />
              ) : (
                <Select onValueChange={handleTeacherChange} value={selectedTeacherId}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Wybierz nauczyciela" />
                  </SelectTrigger>
                  <SelectContent>
                    {teachers.map((teacher) => (
                      <SelectItem key={teacher.id} value={teacher.id}>
                        {teacher.name} - {teacher.position}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>

            {selectedTeacherId && (
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-green-700 mb-4">
                  Harmonogram dyżurów:
                </h3>
                {isLoadingAvailability ? (
                  <div className="space-y-4">
                    {[0, 1, 2].map((i) => (
                      <Skeleton key={i} className="h-16 w-full" />
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-5 gap-4">
                    {daysOfWeek.map((day, index) => {
                      const dayAvailabilities = availabilities.filter(
                        (a) => a.dayOfWeek === index
                      );

                      return (
                        <Card
                          key={index}
                          className={`border ${
                            dayAvailabilities.length
                              ? "border-green-300 bg-green-50"
                              : "border-gray-200"
                          }`}
                        >
                          <CardHeader className="py-3">
                            <CardTitle className="text-center text-green-700">{day}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            {dayAvailabilities.length ? (
                              <div className="space-y-2">
                                {dayAvailabilities.map((availability, i) => (
                                  <CardDescription key={i} className="text-center font-medium">
                                    {availability.startTime} - {availability.endTime}
                                  </CardDescription>
                                ))}
                              </div>
                            ) : (
                              <CardDescription className="text-center text-gray-500">
                                Brak dyżuru
                              </CardDescription>
                            )}
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {selectedTeacherId && (
              <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-md">
                <p className="text-green-700">
                  <strong>Uwaga:</strong> Aby umówić się na spotkanie z nauczycielem, prosimy o wcześniejszy kontakt telefoniczny lub mailowy z sekretariatem żłobka w celu potwierdzenia dostępności.
                </p>
              </div>
            )}

            {!selectedTeacherId && (
              <div className="text-center py-10">
                <p className="text-gray-500">Wybierz nauczyciela, aby zobaczyć godziny konsultacji</p>
              </div>
            )}
          </div>

          {/* Dodatkowe informacje */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-green-700 mb-4">Informacje o konsultacjach</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                Każdy rodzic ma prawo do indywidualnych konsultacji z nauczycielami i specjalistami pracującymi w naszym żłobku. 
                Konsultacje odbywają się w godzinach podanych w kalendarzu.
              </p>
              <p>
                W trakcie konsultacji nauczyciele przekazują informacje o rozwoju dziecka, jego postępach, a także o ewentualnych trudnościach
                lub obszarach wymagających dodatkowego wsparcia.
              </p>
              <p>
                W przypadku potrzeby konsultacji w innym terminie niż podany w kalendarzu, prosimy o kontakt z sekretariatem żłobka
                w celu ustalenia indywidualnego terminu spotkania.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeacherAvailability;
