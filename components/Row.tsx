import { useRef, useState } from "react";
import { Movie } from "../typings";
import Thumbnail from "./Thumbnail";

interface Props {
  title: string;
  // When useing firebase
  // movie: Movie | DocumentData[];
  movies: Movie[];
}

const Row = ({ title, movies }: Props) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setisMoved] = useState(false);

  const handleClick = (direction: string) => {
    setisMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  // console.log(rowRef.current!.scrollLeft, rowRef.current!.clientWidth);

  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2 className="w-56 cursor-pointer text-sm font-Oxanium font-semibold text-gray-200 transition duration-200 hover:text-white md:text-2xl ">
        {title}
      </h2>
      <div className="group relative md:-ml-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-9 w-9 text-white absolute top-0 bottom-0 left-2 z-40 m-auto cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
            !isMoved && "hidden"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          onClick={() => handleClick("left")}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>

        <div
          ref={rowRef}
          className="flex items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2 scrollbar-hide"
        >
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-9 w-9 text-white absolute top-0 bottom-0 right-2 z-40 m-auto cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          onClick={() => handleClick("right")}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default Row;
