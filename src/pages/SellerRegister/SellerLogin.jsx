import React from 'react'
import loginBg from '../../assets/images/login_bg.png'

export default function SellerLogin() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[var(--primary-bg)] text-white font-inter">
      {/* Left side (hidden on mobile) */}
      <div className="hidden md:flex md:w-1/2 relative flex-col justify-between">
        <div className="p-8 pt-6 flex justify-between items-center z-10">
          <div className="w-[90px] h-[30px] flex items-center justify-center">
            <h1 className="text-white text-3xl font-semibold tracking-wide select-none">Test</h1>
          </div>
          <button
            type="button"
            className="px-4 py-1.5 bg-[var(--primary-color)] rounded-md text-white text-sm font-normal hover:bg-[var(--primary-hover)] transition flex items-center w-max cursor-pointer"
          >
            Back to website
            <i className="fas fa-caret-down ml-2 text-white text-xs"></i>
          </button>
        </div>
        <img
          alt="Dark purple desert dunes landscape with purple sky"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-90"
          src={loginBg}
          width="600"
          height="900"
        />
      </div>

      {/* Right side (form) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 py-12 sm:px-12 md:px-20 lg:px-24 bg-[var(--primary-bg)]">
        <div className="w-full max-w-md">
          <h1 className="text-white text-4xl font-semibold mb-3 leading-tight">Login to your account</h1>
          <p className="text-[var(--text-light)] text-sm mb-6">
            Don’t have an account?{" "}
            <a href="#" className="text-white hover:underline font-normal">Sign Up</a>
          </p>
          <form className="space-y-4 w-full">
            <input
              type="email"
              placeholder="Email"
              required
              className="bg-[var(--input-bg)] rounded-md px-4 py-3 text-white placeholder-[#cfcfe3] w-full focus:outline-none focus:ring-2 focus:ring-[var(--ring-color)]"
            />
            <div className="relative w-full">
              <input
                type="password"
                placeholder="Password"
                required
                className="bg-[var(--input-bg)] rounded-md px-4 py-3 pr-12 text-white placeholder-[#cfcfe3] w-full focus:outline-none focus:ring-2 focus:ring-[var(--ring-color)]"
              />
              <button
                type="button"
                aria-label="Toggle password visibility"
                className="absolute inset-y-0 right-3 flex items-center text-[#cfcfe3] hover:text-white"
                tabIndex={-1}
              >
                <i className="far fa-eye"></i>
              </button>
            </div>
            <label className="flex items-center space-x-3 text-[var(--text-light)] text-sm">
              <input
                type="checkbox"
                required
                defaultChecked
                className="w-5 h-5 rounded border-none bg-white text-[var(--primary-bg)] cursor-pointer"
              />
              <span>
                I agree to the{" "}
                <a href="#" className="underline hover:text-[var(--link-hover)]">
                  Terms &amp; Conditions
                </a>
              </span>
            </label>
            <button
              type="submit"
              className="w-full bg-[var(--primary-color)] rounded-md py-3 text-white text-lg font-normal hover:bg-[var(--primary-hover)] transition cursor-pointer"
            >
              Login
            </button>
          </form>

          <div className="flex items-center my-8 space-x-4">
            <hr className="flex-grow border-[var(--border-color)]" />
            <span className="text-[var(--highlight-color)] text-xs whitespace-nowrap">Or login with</span>
            <hr className="flex-grow border-[var(--border-color)]" />
          </div>

          <div className="flex space-x-4">
            <button
              type="button"
              className="cursor-pointer flex items-center justify-center space-x-2 border border-[var(--border-color)] rounded-md py-3 px-6 w-full hover:border-[var(--ring-color)] transition"
            >
              <img
                src="https://storage.googleapis.com/a1aa/image/c754ac72-6d4f-49d9-de94-826702f3bc3f.jpg"
                alt="Google logo"
                className="w-5 h-5"
                width="20"
                height="20"
              />
              <span className="text-white text-sm font-normal">Google</span>
            </button>
            <button
              type="button"
              className="cursor-pointer flex items-center justify-center space-x-2 border border-[var(--border-color)] rounded-md py-3 px-6 w-full hover:border-[var(--ring-color)] transition"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg"
                alt="Apple logo"
                className="w-5 h-5"
                width="20"
                height="20"
              />
              <span className="text-white text-sm font-normal">Apple</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
