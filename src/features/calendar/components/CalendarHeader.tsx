import CalendarDropdown from "./CalendarDropdown";
import CalendarNavigation from "./CalendarNavigation";

export default function CalendarHeader() {
  return (
    <div className="h-[65px] border-b border-border-100 px-5 flex-shrink-0">
      <div className="relative flex items-center justify-start w-full h-full lg:justify-center ">
        <CalendarNavigation />
        <div className="absolute right-0">
          <CalendarDropdown />
        </div>
      </div>
    </div>
  );
}
