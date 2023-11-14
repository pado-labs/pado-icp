import { useMemo } from "react";
import useWinWidth from "./useWinWidth";

const useBreakPoint = () => {
  const size = useWinWidth();
  const breakPoint = useMemo(() => {
    let bp = "s";
    const { width } = size;
    if (width < 577) {
      bp = "s";
    } else if (width >= 577 && width < 993) {
      bp = "m";
    } else if (width >= 993 && width < 1440) {
      bp = "l";
    } else {
      bp = "xl";
    }
    return bp;
  }, [size]);

  return breakPoint;
};
export default useBreakPoint;
