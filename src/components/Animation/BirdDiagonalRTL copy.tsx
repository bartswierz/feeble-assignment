import { useEffect, useState } from "react";

type BirdDiagonalRTLProps = {
  src: string;
  width?: number;
  height?: number;
  delayMs?: number;
};

// Bird that flies diagonally offscreen from right to left (30% from bottom right => 30% from top left)
const BirdDiagonalRTL = ({ src, width = 133, height = 74, delayMs = 800 }: BirdDiagonalRTLProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setShow(true), delayMs);
    return () => window.clearTimeout(t);
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

        // End position: LEFT side, ~30% from top
        left: "0%",
        top: "30vh",

        // Keep bird fully visible + animate diagonally
        transform: show
          ? "translate(0%, -50%) scaleX(-1)" // final (in view)
          : "translate(0%, -50%) translate(100vw, 40vh) scaleX(-1)", // start off-screen right + lower

        transitionProperty: "transform",
        transitionDuration: "3500ms",
        transitionTimingFunction: "cubic-bezier(0.73, 0, 0.8, 0.83)",
      }}
    />
  );
};

export default BirdDiagonalRTL;
