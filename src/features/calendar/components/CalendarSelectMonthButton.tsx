import { AppButton } from "@/components/ui/app-button";
import type React from "react";

interface Props {
  children: React.ReactNode;
  onClick: (...args: unknown[]) => unknown;
}

export default function CalendarSelectMonthButton({
  children,
  ...props
}: Props) {
  return (
    <AppButton size="icon" variant="ghost" className="p-0 size-fit" {...props}>
      {children}
    </AppButton>
  );
}
