import { CalendarProvider } from "../context/CalendarContext";
import CalendarDates from "./CalendarDates";
import CalendarHeader from "./CalendarHeader";
import CalendarWeekdays from "./CalendarWeekdays";

export default function Calendar() {
  return (
    <CalendarProvider>
      <div className="flex min-h-[100%] flex-col overflow-hidden flex-nowrap lg:min-h-[960px] border-border-100 rounded-lg border bg-white">
        <CalendarHeader />
        <CalendarWeekdays />
        <CalendarDates />
      </div>
    </CalendarProvider>
  );
}
