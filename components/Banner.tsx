import Image from "next/image";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom";
import { baseUrl } from "../constants/movie";
import { Movie } from "../typings";

interface Props {
  netflixOriginals: Movie[];
}

const Banner = ({ netflixOriginals }: Props) => {
  const [movie, setmovie] = useState<Movie | null>(null);
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setcurrentMovie] = useRecoilState(movieState);

  useEffect(() => {
    setmovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  // console.log(movie);

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10  h-[95vh] w-screen overflow-hidden">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          layout="fill"
          alt="banner"
          objectFit="cover"
        />
      </div>
      <h1 className="text-xl font-semibold lg:text-5xl md:text-3xl text-white font-Oxanium">
        {movie?.title || movie?.name || movie?.original_name}{" "}
      </h1>

      <p className="max-w-xs text-xs md:max-w-lg md:text-sm lg:max-w-2xl lg:text-xl text-white py-6 font-Jost">
        {movie?.overview}
      </p>

      <div className="flex space-x-3">
        <button className="bannerBtn bg-white text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-900 md:h-7 md:w-7"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>
          Play
        </button>
        <button
          className="bannerBtn bg-[gray]/70 text-white"
          onClick={() => {
            setcurrentMovie(movie);
            setShowModal(true);
          }}
        >
          More Info{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 md:h-8 md:w-8 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Banner;
