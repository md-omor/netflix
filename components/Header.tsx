import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const [isScrolled, setisScrolled] = useState(false);
  const { logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setisScrolled(true) : setisScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled && "bg-slate-800"}`}>
      <div className="flex items-center space-x-2 md:space-x-2">
        <img
          src="https://rb.gy/ulxxee"
          width={150}
          height={150}
          className="cursor-pointer "
          alt="logo"
        />

        <ul className="hidden space-x-2 md:flex ">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>

      <div className="flex items-center space-x-4 text-sm font-light">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 hidden sm:inline text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <p className="hidden lg:inline">Kids</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
        </svg>
        {/* <Link href="/account"> */}

        <img
          onClick={logout}
          src="https://rb.gy/g1pwyx"
          alt=""
          className="cursor-pointer rounded"
        />
        {/* </Link> */}
      </div>
    </header>
  );
};

export default Header;
