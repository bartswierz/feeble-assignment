import { useEffect, useState } from "react";

type BirdFlyProps = {
  src: string;
  width?: number;
  height?: number;
  delayMs?: number;
};

const BirdDiagonalLTR = ({ src, width = 133, height = 74, delayMs = 1200 }: BirdFlyProps) => {
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

        // Anchor point where the bird crosses (tweak as needed)
        left: "50%",
        top: "50%",

        // One continuous diagonal pass:
        // start: offscreen bottom-left -> end: offscreen top-right
        transform: go ? "translate(-50%, -50%) translate(140vw, -70vh)" : "translate(-50%, -50%) translate(-140vw, 70vh)",

        transitionProperty: "transform",
        transitionDuration: "7500ms",
        transitionTimingFunction: "cubic-bezier(0.73, 0, 0.8, 0.83)",
      }}
    />
  );
};
export default BirdDiagonalLTR;
