import { createContext, useContext, useReducer } from "react";
import { CalendarAction, type CalendarContextState } from "../types";
import type { ReducerAction } from "@/types";
import dayjs from "dayjs";

export const CalendarContext = createContext<CalendarContextState | null>(null);
export const CalendarDispatchContext = createContext<ReducerAction<
  typeof calendarReducer
> | null>(null);

export function CalendarProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(
    calendarReducer,
    undefined,
    initialCalendarState
  );
  return (
    <CalendarContext.Provider value={state}>
      <CalendarDispatchContext.Provider value={dispatch}>
        {children}
      </CalendarDispatchContext.Provider>
    </CalendarContext.Provider>
  );
}

export function useCalendar() {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error("useCalendar must be used within a CalendarProvider");
  }
  return context;
}

export function useCalendarDispatch() {
  const context = useContext(CalendarDispatchContext);
  if (!context) {
    throw new Error(
      "useCalendarDispatch must be used within a CalendarProvider"
    );
  }
  return context;
}

export function calendarReducer(
  state: CalendarContextState,
  action: { type: CalendarAction; [key: string]: any }
): CalendarContextState {
  switch (action.type) {
    case CalendarAction.PREV_MONTH: {
      const prevMonth = dayjs(state.selectedDate)
        .startOf("month")
        .subtract(1, "month")
        .toDate();
      return { ...state, selectedDate: prevMonth };
    }
    case CalendarAction.NEXT_MONTH: {
      const nextMonth = dayjs(state.selectedDate)
        .startOf("month")
        .add(1, "month")
        .toDate();
      return { ...state, selectedDate: nextMonth };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function initialCalendarState(): CalendarContextState {
  return {
    items: {
      "2024-12-02": [
        {
          id: "2024-12-02-h23429fh10",
          type: "campaign",
          title: "Campaign Idea",
          time: "2024-12-02 00:00:00",
          ideas: [
            { id: "134124", content: "Unlock Exclusive Winter Deals!" },
            { id: "1252435", content: "Winter Must-haves" },
            { id: "2653546", content: "Our top 3 winter essentials" },
          ],
          isDraft: false,
        },
        {
          id: "2024-12-02-h213429fh10",
          type: "campaign",
          title: "Campaign",
          time: "2024-12-02 00:30:00",
          ideas: [{ id: "1134124", content: "Content 1" }],
          isDraft: false,
        },
        {
          id: "2024-12-02-h213429fh110",
          type: "campaign",
          title: "Campaign",
          time: "2024-12-02 00:31:00",
          ideas: [{ id: "11341214", content: "Content 2" }],
          isDraft: false,
        },
        {
          id: "2024-12-02-h2349fh10",
          type: "campaign",
          title: "Campaign name",
          time: "2024-12-02 01:00:00",
          ideas: [{ id: "1341255", content: "hmm" }],
          isDraft: true,
        },
      ],
      "2024-12-24": [
        {
          id: "christmas-eve-2024",
          type: "holiday",
          title: "Christmas Eve",
          countries: ["United States", "Canada"],
          time: "2024-12-24 00:00:00",
        },
        {
          id: "2024-12-24-f1302j4f23j",
          type: "campaign",
          title: "Hmm...",
          time: "2024-12-24 01:00:00",
          ideas: [{ id: "12412351", content: "Hmm..." }],
          isDraft: true,
        },
      ],
      "2024-12-25": [
        {
          id: "christmas-2024",
          type: "holiday",
          title: "Christmas",
          countries: ["United States", "Canada"],
          time: "2024-12-25 00:00:00",
        },
      ],
    },
    today: new Date(),
    selectedDate: new Date(),
  };
}
