import { useEffect, useState } from "react";

type BirdFlyProps = {
  src: string;
  width?: number;
  height?: number;
  delayMs?: number;
};

const BirdDiagonalRTL = ({ src, width = 133, height = 74, delayMs = 1200 }: BirdFlyProps) => {
  const [go, setGo] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setGo(true), delayMs);
    return () => clearTimeout(t);
  }, [delayMs]);

  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className="pointer-events-none absolute max-w-none will-change-transform"
      style={{
        width: `${width}px`,
        height: `${height}px`,

        // Same anchor point so they cross each other
        left: "50%",
        top: "50%",

        // start: offscreen bottom-right -> end: offscreen top-left
        transform: go
          ? "translate(-50%, -50%) translate(-140vw, -70vh) scaleX(-1)"
          : "translate(-50%, -50%) translate(140vw, 70vh) scaleX(-1)",

        transitionProperty: "transform",
        // transitionDuration: "3500ms",
        transitionDuration: "7500ms",
        transitionTimingFunction: "cubic-bezier(0.73, 0, 0.8, 0.83)",
      }}
    />
  );
};

export default BirdDiagonalRTL;
