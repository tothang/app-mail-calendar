import { useMemo } from "react";
import { useCalendar } from "../context/CalendarContext";
import CalendarHolidayLabel from "./CalendarHolidayLabel";
import CalendarCampaignLabel from "./CalendarCampaignLabel";
import CalendarDraftCampaignLabel from "./CalendarDraftCampaignLabel";
import { useMediaQuery } from "usehooks-ts";

interface Props {
  date: string;
}

export default function CalendarLabels({ date }: Props) {
  const calendarContext = useCalendar();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const items = useMemo(
    () => calendarContext.items[date] || [],
    [calendarContext.items, date]
  );

  const maxItemToShow = useMemo(() => {
    if (items.length <= 3) return items.length;
    return 2;
  }, [isMobile, items]);

  const itemsToShow = useMemo(
    () => items.slice(0, maxItemToShow),
    [items, maxItemToShow]
  );

  const itemsHidden = useMemo(
    () => items.length - maxItemToShow,
    [items, maxItemToShow]
  );

  return items.length > 0 ? (
    <div className="flex flex-col w-full gap-1">
      {itemsToShow.map((item) =>
        item.type === "holiday" ? (
          <CalendarHolidayLabel key={item.id} holiday={item} />
        ) : item.isDraft ? (
          <CalendarDraftCampaignLabel key={item.id} campaign={item} />
        ) : (
          <CalendarCampaignLabel key={item.id} campaign={item} />
        )
      )}
      {itemsHidden > 0 && (
        <div className="flex items-center justify-center text-xs text-gray-500">
          {isMobile ? (
            <span>+{itemsHidden}</span>
          ) : (
            <span>+{itemsHidden} more</span>
          )}
        </div>
      )}
    </div>
  ) : null;
}
