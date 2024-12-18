import { twMerge } from "tailwind-merge";
import clsx, { type ClassArray } from "clsx";
import dayjs from "dayjs";

export function cn(...classes: ClassArray) {
  return twMerge(clsx(...classes));
}

export function formatDate(date: Date, format?: string) {
  return dayjs(date).format(format);
}

/**
 * Returns an array of weekday names starting from the first day of the week (locale aware).
 * Some locales start the week on Sunday, while others start on Monday.
 */
export function getWeekdayNames() {
  const weekdayNames = [];
  const firstDayOfWeek = dayjs().startOf("week");
  for (let i = 0; i < 7; i++) {
    const weekdayName = firstDayOfWeek.add(i, "day").format("dddd");
    weekdayNames.push(weekdayName);
  }
  return weekdayNames;
}

/**
 * Returns an array of dates for the month and neighboring dates to fill the grid.
 */
export function getDates(refDate: Date) {
  const firstDay = dayjs(refDate).startOf("month").startOf("week");
  const lastDay = dayjs(refDate).endOf("month").endOf("week");
  const dates = [];
  let currentDay = firstDay;
  while (currentDay.isBefore(lastDay)) {
    dates.push(currentDay.toDate());
    currentDay = currentDay.add(1, "day");
  }
  return dates;
}
