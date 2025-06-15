import { ChevronLeftCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Anime404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1a172eff] text-white px-4">
      {/* Cute Anime Illustration */}
      <img
        src="404.png"
        alt="Sad anime character"
        className="w-48 h-48 sm:w-64 sm:h-64 mb-12"
      />

      {/* Hero */}
      <h1 className="text-5xl sm:text-8xl font-extrabold mb-6 animate-pulse">
        404 Error
      </h1>
      <p className="text-xl sm:text-2xl mb-12 text-center">
        Oops! We can't find this page.
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        <Link
          to="/"
          className="flex gap-2 bg-[#7d5fff] border-[#7d5fff] text-[#3d3c50] px-6 py-3 rounded-4xl text-xl items-center font-bold hover:border hover:text-[#7d5fff] hover:bg-transparent"
        >
          <ChevronLeftCircle /> Go to Home Page
        </Link>
      </div>
    </div>
  );
}
