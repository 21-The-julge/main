import { ReactNode, useState } from "react";
import { createPortal } from "react-dom";
import useIsMounted from "./hooks/useIsMounted";

interface ModalPortalProps {
  children: ReactNode;
}

export default function Portal({ children }: ModalPortalProps) {
  const [mounted, setMounted] = useState(false);
  useIsMounted(setMounted);

  if (typeof window === "undefined" || !mounted) return null;

  return createPortal(children, document.getElementById("modal-root") as HTMLElement);
}
