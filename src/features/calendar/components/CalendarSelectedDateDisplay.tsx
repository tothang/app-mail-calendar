import { formatDate } from "@/utils";
import { useCalendar } from "../context/CalendarContext";

export default function SelectedDateDisplay() {
  const calendarContext = useCalendar();

  return (
    <p className="font-semibold text-center uppercase min-w-24">
      {formatDate(calendarContext.selectedDate, "MMM YYYY")}
    </p>
  );
}
