import { createPortal } from "react-dom";

export default function Portal({
  children,
  anchor,
}: {
  children: React.ReactNode;
  anchor?: HTMLElement | null;
}) {
  return !!anchor && createPortal(children, anchor);
}
