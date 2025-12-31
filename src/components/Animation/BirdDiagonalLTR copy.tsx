import { useEffect, useState } from "react";

type BirdDiagonalLTRProps = {
  src: string;
  width?: number;
  height?: number;
};

// Bird that flies diagonally offscreen from left to right (30% from bottom left => 30% from top right)
const BirdDiagonalLTR = ({ src, width = 133, height = 74 }: BirdDiagonalLTRProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setShow(true), 800); // delay
    return () => window.clearTimeout(t);
  }, []);

  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className="pointer-events-none absolute max-w-none will-change-transform"
      style={{
        width: `${width}px`,
        height: `${height}px`,

        // End position: right edge, ~30% from top
        left: "100%",
        top: "30vh",

        // Keep the bird fully inside the right edge + vertically centered
        transform: show
          ? "translate(-100%, -50%) translate(0px, 0px)" // final
          : "translate(-100%, -50%) translate(-100vw, 40vh)", // start ~left + lower

        transitionProperty: "transform",
        transitionDuration: "3500ms",
        transitionTimingFunction: "cubic-bezier(0.73, 0, 0.8, 0.83)",
      }}
    />
  );
};

export default BirdDiagonalLTR;
