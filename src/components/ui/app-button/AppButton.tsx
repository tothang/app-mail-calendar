import { cn } from "@/utils";
import { Button } from "@headlessui/react";
import type { HTMLAttributes } from "react";
import { buttonVariants, type ButtonVariants } from ".";

interface ButtonProps extends React.ComponentProps<typeof Button> {
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
  className?: HTMLAttributes<HTMLButtonElement>["className"];
  loading?: boolean;
  disabled?: boolean;
}

/**
 * AppButton component
 *
 * This component is a wrapper around the Headless UI Button component.
 */
export default function AppButton({
  children,
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <Button
      {...props}
      className={cn(buttonVariants({ variant, size }), className)}
    >
      {children}
    </Button>
  );
}
