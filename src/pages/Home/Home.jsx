import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-[var(--hero-bg)] text-white flex items-center justify-center px-4">
      <header className="text-center max-w-3xl mt-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--primary-color)]">
          Elevate Your Style
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-[var(--text-dark-light)]">
          Discover the most luxurious and trending products handpicked just for
          you.
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-block border border-[var(--primary-color)] text-[var(--primary-color)] px-6 py-3 rounded-full hover:bg-[var(--primary-hover)] hover:text-[var(--button-text-color)] transition-colors duration-300"
        >
          Shop Now
        </Link>
      </header>
    </div>
  );
}

export default Home;
