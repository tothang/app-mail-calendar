import { getWeekdayNames } from "@/utils";
import { useMediaQuery } from "usehooks-ts";

export default function CalendarWeekdays() {
  const weekdayNames = getWeekdayNames();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="flex w-full h-10 bg-gray-200">
      {weekdayNames.map((day) => (
        <div
          key={day}
          className="flex w-[calc(100%/7)] items-center justify-center border-b px-1 border-l first:border-l-0 border-border-100"
        >
          <p className="block w-full overflow-hidden text-center line-clamp-1 text-ellipsis">
            {isMobile ? day.slice(0, 3) : day}
          </p>
        </div>
      ))}
    </div>
  );
}
