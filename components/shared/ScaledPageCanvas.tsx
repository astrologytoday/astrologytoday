"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type ScaledPageCanvasProps = {
  bleedBottom?: number;
  bleedLeft?: number;
  bleedRight?: number;
  bleedTop?: number;
  children: ReactNode;
  className?: string;
  designWidth: number;
  offsetX?: number;
  offsetY?: number;
  scale: number;
  viewportClassName?: string;
};

export default function ScaledPageCanvas({
  bleedBottom = 0,
  bleedLeft = 0,
  bleedRight = 0,
  bleedTop = 0,
  children,
  className,
  designWidth,
  offsetX = 0,
  offsetY = 0,
  scale,
  viewportClassName,
}: ScaledPageCanvasProps) {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const surfaceRef = useRef<HTMLDivElement | null>(null);
  const [surfaceHeight, setSurfaceHeight] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);

  const surfaceWidth = designWidth + bleedLeft + bleedRight;

  useEffect(() => {
    const measure = () => {
      if (surfaceRef.current) setSurfaceHeight(surfaceRef.current.offsetHeight);
      if (viewportRef.current) setViewportWidth(viewportRef.current.clientWidth);
    };

    measure();

    const observer = new ResizeObserver(() => measure());
    if (viewportRef.current) observer.observe(viewportRef.current);
    if (surfaceRef.current) observer.observe(surfaceRef.current);
    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const appliedScale = viewportWidth > 0 ? Math.min(scale, viewportWidth / designWidth) : scale;

  const viewportStyle: CSSProperties | undefined = surfaceHeight
    ? { height: `${Math.ceil(surfaceHeight * appliedScale)}px` }
    : undefined;

  const surfaceStyle: CSSProperties = {
    boxSizing: "border-box",
    left: "50%",
    padding: `${bleedTop}px ${bleedRight}px ${bleedBottom}px ${bleedLeft}px`,
    position: "absolute",
    top: `${offsetY}px`,
    transform: `translateX(calc(-50% + ${offsetX}px)) scale(${appliedScale})`,
    transformOrigin: "top center",
    width: `${surfaceWidth}px`,
  };

  const canvasStyle: CSSProperties = {
    width: `${designWidth}px`,
  };

  return (
    <div ref={viewportRef} className={viewportClassName} style={viewportStyle}>
      <div ref={surfaceRef} style={surfaceStyle}>
        <div className={className} style={canvasStyle}>
          {children}
        </div>
      </div>
    </div>
  );
}
