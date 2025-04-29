
export interface Teacher {
  id: string;
  name: string;
  position: string;
  imageUrl?: string;
  bio?: string;
}

export interface TeacherAvailability {
  teacherId: string;
  dayOfWeek: number; // 0 = poniedziałek, 1 = wtorek, itd.
  startTime: string; // format "HH:MM"
  endTime: string; // format "HH:MM"
}
