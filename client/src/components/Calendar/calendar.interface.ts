import { DateType } from "@/types/types";

export default interface CalendarProps {
  placeholder?: string;
  onChange?: (value: DateType) => void;
  valueSelected?: DateType;
}
