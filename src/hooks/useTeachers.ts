
import { useQuery } from "@tanstack/react-query";
import { Teacher, TeacherAvailability } from "@/types/teacher";

// Przykładowi nauczyciele - w produkcji byłyby pobierane z API
const mockTeachers: Teacher[] = [
  {
    id: "1",
    name: "Anna Kowalska",
    position: "Wychowawca grupy Słoneczka",
    imageUrl: "/placeholder.svg",
    bio: "Magister pedagogiki wczesnoszkolnej z 10-letnim doświadczeniem. Specjalizuje się w rozwijaniu kreatywności u dzieci."
  },
  {
    id: "2",
    name: "Marek Nowak",
    position: "Wychowawca grupy Misie",
    imageUrl: "/placeholder.svg",
    bio: "Pedagog z zamiłowaniem do muzyki. Prowadzi zajęcia rytmiczne i uczy dzieci podstaw gry na instrumentach."
  },
  {
    id: "3",
    name: "Katarzyna Wiśniewska",
    position: "Wychowawca grupy Motylki",
    imageUrl: "/placeholder.svg",
    bio: "Pedagog z wykształceniem w zakresie terapii zajęciowej. Specjalizuje się w pracy z dziećmi wymagającymi dodatkowego wsparcia."
  },
  {
    id: "4",
    name: "Piotr Jankowski",
    position: "Psycholog dziecięcy",
    imageUrl: "/placeholder.svg",
    bio: "Psycholog z doświadczeniem w pracy z dziećmi. Prowadzi obserwacje i wspiera rozwój emocjonalny dzieci."
  },
  {
    id: "5",
    name: "Magdalena Lewandowska",
    position: "Logopeda",
    imageUrl: "/placeholder.svg",
    bio: "Certyfikowany logopeda zajmujący się diagnozą i terapią zaburzeń mowy u dzieci."
  }
];

// Przykładowa dostępność nauczycieli
const mockAvailability: TeacherAvailability[] = [
  // Anna Kowalska
  { teacherId: "1", dayOfWeek: 0, startTime: "13:00", endTime: "14:00" }, // poniedziałek
  { teacherId: "1", dayOfWeek: 2, startTime: "15:00", endTime: "16:00" }, // środa
  
  // Marek Nowak
  { teacherId: "2", dayOfWeek: 1, startTime: "14:00", endTime: "15:00" }, // wtorek
  { teacherId: "2", dayOfWeek: 3, startTime: "13:00", endTime: "14:00" }, // czwartek
  
  // Katarzyna Wiśniewska
  { teacherId: "3", dayOfWeek: 0, startTime: "15:00", endTime: "16:00" }, // poniedziałek
  { teacherId: "3", dayOfWeek: 4, startTime: "14:00", endTime: "15:00" }, // piątek
  
  // Piotr Jankowski
  { teacherId: "4", dayOfWeek: 1, startTime: "11:00", endTime: "12:00" }, // wtorek
  { teacherId: "4", dayOfWeek: 3, startTime: "11:00", endTime: "12:00" }, // czwartek
  
  // Magdalena Lewandowska
  { teacherId: "5", dayOfWeek: 0, startTime: "09:00", endTime: "10:00" }, // poniedziałek
  { teacherId: "5", dayOfWeek: 2, startTime: "09:00", endTime: "10:00" }, // środa
  { teacherId: "5", dayOfWeek: 4, startTime: "09:00", endTime: "10:00" }  // piątek
];

// Hook do pobierania wszystkich nauczycieli
export const useTeachers = () => {
  return useQuery({
    queryKey: ["teachers"],
    queryFn: async () => {
      // W produkcji byłoby zapytanie do API
      return mockTeachers;
    }
  });
};

// Hook do pobierania konkretnego nauczyciela po ID
export const useTeacher = (id: string) => {
  return useQuery({
    queryKey: ["teacher", id],
    queryFn: async () => {
      // W produkcji byłoby zapytanie do API
      const teacher = mockTeachers.find(t => t.id === id);
      if (!teacher) {
        throw new Error("Nie znaleziono nauczyciela o podanym ID");
      }
      return teacher;
    }
  });
};

// Hook do pobierania dostępności nauczycieli
export const useTeacherAvailability = (teacherId?: string) => {
  return useQuery({
    queryKey: ["teacherAvailability", teacherId],
    queryFn: async () => {
      // W produkcji byłoby zapytanie do API
      if (teacherId) {
        return mockAvailability.filter(a => a.teacherId === teacherId);
      }
      return mockAvailability;
    }
  });
};
