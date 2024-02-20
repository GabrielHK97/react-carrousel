import { useState } from "react";
import "../App.css";

interface Props {
  className?: string;
  seconds?: number;
  images: string[];
}

function Carrousel({
  className = "w-full h-full",
  seconds = 0.2,
  images,
}: Props) {
  const [index, setIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(0);
  const [translate, setTranslate] = useState("0%");
  const [secs, setSecs] = useState(0);

  function resetIndex(i: number): number {
    if (Math.abs(i) > images.length - 1) {
      return i % images.length;
    } else {
      return i;
    }
  }

  function goRight() {
    setNextIndex(1);
    setTranslate("-100%");
    setSecs(seconds);
    setTimeout(() => {
      setIndex(resetIndex(index + 1));
      setTranslate("0%");
      setSecs(0);
    }, seconds * 1000);
  }

  function goLeft() {
    setNextIndex(-1);
    setTranslate("100%");
    setSecs(seconds);
    setTimeout(() => {
      setIndex(resetIndex(index - 1));
      setTranslate("0%");
      setSecs(0);
    }, seconds * 1000);
  }

  return (
    <div className={className}>
      <div className="w-full h-full overflow-hidden flex">
        <div
          className={"w-full h-full flex"}
          style={{
            transform: `translateX(${translate})`,
            transition: `${secs}s`,
            flexDirection: `${nextIndex > 0 ? 'row' : 'row-reverse'}`
          }}
        >
          <img
            src={images[resetIndex(Math.abs(index))]}
            alt="current"
            className="w-full h-full"
          />
          <img
            src={images[resetIndex(Math.abs(index + nextIndex))]}
            alt="current"
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="w-full h-12 space-x-2 p-2 flex flex-row bg-gray-700 rounded-b-lg">
        <button
          className="flex-grow rounded-lg bg-black text-white"
          onClick={goLeft}
        >
          {"<"}
        </button>
        <button
          className="flex-grow rounded-lg bg-black text-white"
          onClick={goRight}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}

export default Carrousel;
