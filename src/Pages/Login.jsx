import React, { useState } from "react";
import Logo from "../assets/Login.webp"
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your login API logic here
    console.log("Login submitted");
  };

  return (
    <div className="min-h-screen w-full bg-[#f7f7f7] flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
      {/* Main Card */}
      <div
        className="
          w-full
          max-w-[1050px]
          bg-white
          rounded-2xl
          shadow-[0_15px_35px_rgba(0,0,0,0.08)]
          overflow-hidden
        "
      >
        <div
          className="
            min-h-[540px]
            grid
            grid-cols-1
            md:grid-cols-2
          "
        >
          {/* ================= LEFT SIDE ================= */}
          <div
            className="
              flex
              flex-col
              items-center
              justify-center
              px-6
              py-10
              sm:px-10
              md:px-8
              lg:px-12
            "
          >
            {/* Illustration */}
            <div className="w-full max-w-[330px] flex justify-center">
              <img
                src={Logo}
                alt="Login illustration"
                className="
                  w-full
                  max-w-[300px]
                  sm:max-w-[320px]
                  md:max-w-[290px]
                  lg:max-w-[320px]
                  h-auto
                  object-contain
                "
              />
            </div>

            {/* Create Account */}

            <Link
              type="button"
              className="
                mt-5
                text-md
                text-gray-900
                hover:text-blue-600
                transition-colors
                duration-200
                cursor-pointer
              "
              onClick={() => console.log("Create account")}
              to="/signup"
            >
              Create an account
            </Link>

          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div
            className="
              flex
              items-center
              justify-center
              px-6
              pb-10
              sm:px-10
              md:px-8
              md:py-10
              lg:px-12
            "
          >
            <div className="w-full max-w-[370px]">
              {/* Heading */}
              <h1
                className="
                  text-[28px]
                  sm:text-[30px]
                  lg:text-[32px]
                  font-bold
                  text-[#111827]
                  mb-10
                  text-left
                "
              >
                Login
              </h1>

              <form onSubmit={handleSubmit}>
                {/* Username */}
                <div className="mb-6">
                  <label htmlFor="username" className="sr-only">
                    User Name
                  </label>

                  <input
                    id="username"
                    type="text"
                    placeholder="User Name"
                    autoComplete="username"
                    className="
                      w-full
                      h-[36px]
                      sm:h-[38px]
                      px-3
                      rounded-md
                      border
                      border-[#d7dce2]
                      bg-white
                      text-sm
                      text-gray-800
                      placeholder:text-gray-500
                      outline-none
                      transition-all
                      duration-200
                      focus:border-blue-500
                      focus:ring-2
                      focus:ring-blue-100
                    "
                  />
                </div>

                {/* Password */}
                <div className="mb-6">
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>

                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      autoComplete="current-password"
                      className="
                        w-full
                        h-[36px]
                        sm:h-[38px]
                        px-3
                        pr-10
                        rounded-md
                        border
                        border-[#d7dce2]
                        bg-white
                        text-sm
                        text-gray-800
                        placeholder:text-gray-500
                        outline-none
                        transition-all
                        duration-200
                        focus:border-blue-500
                        focus:ring-2
                        focus:ring-blue-100
                      "
                    />

                    {/* Optional show/hide password */}
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="
                        absolute
                        right-3
                        top-1/2
                        -translate-y-1/2
                        text-gray-400
                        hover:text-gray-700
                        text-xs
                      "
                      aria-label={
                        showPassword
                          ? "Hide password"
                          : "Show password"
                      }
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                {/* Remember Me */}
                <div className="flex items-center mb-7">
                  <input
                    id="remember"
                    type="checkbox"
                    className="
                      w-3
                      h-3
                      rounded-sm
                      border-gray-400
                      text-blue-600
                      focus:ring-blue-500
                    "
                  />

                  <label
                    htmlFor="remember"
                    className="
                      ml-1.5
                      text-sm
                      text-gray-800
                      cursor-pointer
                    "
                  >
                    Remember me
                  </label>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    h-[34px]
                    px-4
                    rounded-md
                    bg-[#1473ea]
                    hover:bg-[#0864d5]
                    active:bg-[#0759bd]
                    text-white
                    text-sm
                    font-medium
                    tracking-wide
                    transition-all
                    duration-200
                    shadow-sm
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-300
                    focus:ring-offset-2
                  "
                >
                  Login
                </button>
              </form>

              {/* Social Login */}
              <div className="mt-20">
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-4
                  "
                >
                  <span className="text-sm text-gray-800 whitespace-nowrap">
                    Or login with
                  </span>

                  <div className="flex items-center gap-2">
                    {/* Facebook */}
                    <button
                      type="button"
                      aria-label="Login with Facebook"
                      className="
                        w-7
                        h-7
                        rounded-[4px]
                        bg-[#4267a9]
                        hover:opacity-90
                        text-white
                        flex
                        items-center
                        justify-center
                        font-bold
                        text-base
                        transition
                      "
                    >
                      f
                    </button>

                    {/* Twitter */}
                    <button
                      type="button"
                      aria-label="Login with Twitter"
                      className="
                        w-7
                        h-7
                        rounded-[4px]
                        bg-[#1da1f2]
                        hover:opacity-90
                        text-white
                        flex
                        items-center
                        justify-center
                        font-bold
                        text-sm
                        transition
                      "
                    >
                      𝕏
                    </button>

                    {/* Google */}
                    <button
                      type="button"
                      aria-label="Login with Google"
                      className="
                        w-7
                        h-7
                        rounded-[4px]
                        bg-[#ea2635]
                        hover:opacity-90
                        text-white
                        flex
                        items-center
                        justify-center
                        font-bold
                        text-sm
                        transition
                      "
                    >
                      G
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;