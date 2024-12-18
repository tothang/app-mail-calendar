import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useCallback } from "react";
import { useCalendarDispatch } from "../context/CalendarContext";
import { CalendarAction } from "../types";
import SelectedDateDisplay from "./CalendarSelectedDateDisplay";
import CalendarSelectMonthButton from "./CalendarSelectMonthButton";

export default function CalendarNavigation() {
  const calendarDispatch = useCalendarDispatch();

  const handleUpdateMonth = useCallback(
    (action: CalendarAction.PREV_MONTH | CalendarAction.NEXT_MONTH) => {
      calendarDispatch({ type: action });
    },
    [calendarDispatch]
  );

  return (
    <div className="flex items-center gap-[18px]">
      <CalendarSelectMonthButton
        onClick={() => handleUpdateMonth(CalendarAction.PREV_MONTH)}
      >
        <ChevronLeftIcon className="size-6" strokeWidth={2} />
      </CalendarSelectMonthButton>
      <SelectedDateDisplay />
      <CalendarSelectMonthButton
        onClick={() => handleUpdateMonth(CalendarAction.NEXT_MONTH)}
      >
        <ChevronRightIcon className="size-6" strokeWidth={2} />
      </CalendarSelectMonthButton>
    </div>
  );
}
