import { ChevronLeftCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Anime404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--primary-bg)] text-[var(--text-light)] px-4">
      {/* Cute Anime Illustration */}
      <img
        src="/images/error/404.png"
        alt="Sad anime character"
        className="w-48 h-48 sm:w-64 sm:h-64 mb-12"
      />

      {/* Hero */}
      <h1 className="text-5xl sm:text-8xl font-extrabold mb-6 animate-pulse text-[var(--highlight-color)]">
        404 Error
      </h1>
      <p className="text-xl sm:text-2xl mb-12 text-center text-[var(--text-dark-light)]">
        Oops! We can't find this page.
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        <Link
          to="/"
          className="flex gap-2 bg-[var(--highlight-color)] border border-[var(--highlight-color)] text-[var(--button-text-color)] px-6 py-3 rounded-3xl text-xl items-center font-bold hover:text-[var(--highlight-color)] hover:bg-transparent hover:border-[var(--highlight-color)] transition"
        >
          <ChevronLeftCircle /> Go to Home Page
        </Link>
      </div>
    </div>
  );
}
