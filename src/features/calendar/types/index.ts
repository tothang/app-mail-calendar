/**
 * Represents a generic calendar item.
 */
export interface CalendarItem {
  /**
   * Unique identifier for the calendar item.
   */
  id: string;

  /**
   * Time of the calendar item in ISO string format.
   */
  time: string;

  /**
   * Type of the calendar item.
   */
  type: string;

  /**
   * Title of the calendar item.
   */
  title: string;
}

/**
 * Represents a holiday calendar item.
 * Extends the generic CalendarItem.
 */
export interface CalendarHoliday extends CalendarItem {
  /**
   * Type of the calendar item, fixed as "holiday".
   */
  type: "holiday";

  /**
   * List of countries where the holiday is observed.
   */
  countries: string[];
}

/**
 * Represents a campaign calendar item.
 * Extends the generic CalendarItem.
 */
export interface CalendarCampaign extends CalendarItem {
  /**
   * Type of the calendar item, fixed as "campaign".
   */
  type: "campaign";

  /**
   * Indicates whether the campaign is a draft.
   */
  isDraft: boolean;

  /**
   * List of ideas associated with the campaign.
   */
  ideas: Array<{
    id: string;
    content: string;
  }>;
}

/**
 * Represents the state of the calendar context.
 */
export interface CalendarContextState {
  /**
   * Array of calendar items, which can be either holidays or campaigns.
   */
  items: Record<string, Array<CalendarHoliday | CalendarCampaign>>;

  /**
   * The current date.
   */
  today: Date;

  /**
   * The currently selected date.
   */
  selectedDate: Date;
}

/**
 * Represents the action type for the calendar context.
 */
export enum CalendarAction {
  PREV_MONTH = "PREV_MONTH",
  NEXT_MONTH = "NEXT_MONTH",
  ADD_ITEM = "ADD_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
}
