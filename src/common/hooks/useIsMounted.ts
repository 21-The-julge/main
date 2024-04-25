import { Dispatch, SetStateAction, useEffect } from "react";

export default function useIsMounted(setFuntion: Dispatch<SetStateAction<boolean>>) {
  useEffect(() => {
    setFuntion(true);
    return () => setFuntion(false);
  }, [setFuntion]);
}
