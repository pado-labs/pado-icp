import React, { useMemo, useEffect, useState, useCallback } from "react";

const useIconColor = (color, hoverColor) => {
  const [strokeColor, setStrokeColor] = useState();
  useEffect(() => {
    setStrokeColor(color);
  }, [color]);
  const handleEnter = useCallback(() => {
    hoverColor && setStrokeColor(hoverColor);
  }, [hoverColor]);
  const handleLeave = useCallback(() => {
    setStrokeColor(color);
  },[]);

  return [strokeColor, handleEnter, handleLeave];
};
export default useIconColor;
