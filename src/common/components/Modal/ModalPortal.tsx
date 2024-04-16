import { ReactElement, useEffect, useState } from "react";
import { createPortal } from "react-dom";

function Portal({ children }: { children: ReactElement }) {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (typeof window === "undefined") return null;

  return mounted ? createPortal(children, document.getElementById("modal-root") as HTMLElement) : null;
}

export default Portal;
