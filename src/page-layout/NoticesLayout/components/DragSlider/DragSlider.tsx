import { useRef, useState, MouseEvent, useCallback, PropsWithChildren } from "react";

import classNames from "classnames/bind";
import styles from "./DragSlider.module.scss";

const cn = classNames.bind(styles);

const DRAG_DIFF = 5;

export default function DragSlider({ children }: PropsWithChildren) {
  const slideRef = useRef<HTMLDivElement>(null);

  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);
  const [totalX, setTotalX] = useState(0);

  const throttle = (func: () => void, delay: number) => {
    let timer;
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        func();
      }, delay);
    }
  };

  const preventEventEffects = useCallback((e: Event) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragStart = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    setIsDrag(true);

    const x = e.clientX;
    setStartX(x);

    if (slideRef.current && "scrollLeft" in slideRef.current) {
      setTotalX(x + slideRef.current.scrollLeft);
    }
  };

  const handleDragMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDrag) return;

    throttle(() => {
      e.preventDefault();
      const scrollLeft = totalX - e.clientX;

      if (slideRef.current && "scrollLeft" in slideRef.current) {
        slideRef.current.scrollLeft = scrollLeft;
      }
    }, 100);
  };

  const handleDragEnd = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDrag) return;

    if (!slideRef.current) return;

    setIsDrag(false);

    const endX = e.clientX;
    const childNodes = Array.from(slideRef.current?.childNodes || []);
    const dragDiff = Math.abs(startX - endX);

    if (dragDiff > DRAG_DIFF) {
      childNodes.forEach((child) => {
        child.addEventListener("click", preventEventEffects);
      });
    } else {
      childNodes.forEach((child) => {
        child.removeEventListener("click", preventEventEffects);
      });
    }
  };

  return (
    <div
      className={cn("slider")}
      role="presentation"
      ref={slideRef}
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
    >
      {children}
    </div>
  );
}
