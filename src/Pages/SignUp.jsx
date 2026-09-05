import React, { useState } from "react";
import signup from "../assets/Signup.png";
import { Link } from "react-router-dom";  

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!agreed) {
      alert("Please agree to the Terms of Service.");
      return;
    }

    if (formData.password !== formData.repeatPassword) {
      alert("Passwords do not match.");
      return;
    }

    console.log("Registration Data:", formData);

    // Add your API/register logic here
  };

  const handleLogin = () => {
    // Replace this with your React Router navigation
    // Example:
    // navigate("/login");

    console.log("Navigate to login");
  };

  return (
    <main className="min-h-screen w-full bg-[#f7f7f7] flex items-center justify-center px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      
      {/* =========================================================
          MAIN SIGNUP CARD
      ========================================================= */}
      <section
        className="
          w-full
          max-w-[1050px]
          bg-white
          rounded-2xl
          shadow-[0_12px_30px_rgba(0,0,0,0.07)]
          overflow-hidden
        "
      >
        <div
          className="
            w-full
            min-h-[560px]
            grid
            grid-cols-1
            md:grid-cols-2
          "
        >

          {/* =====================================================
              LEFT SIDE - SIGNUP FORM
          ===================================================== */}
          <div
            className="
              order-2
              md:order-1
              flex
              items-center
              justify-center
              px-6
              py-10
              sm:px-10
              md:px-8
              lg:px-12
              xl:px-16
            "
          >
            <div className="w-full max-w-[340px]">

              {/* Heading */}
              <h1
                className="
                  mb-10
                  text-[30px]
                  sm:text-[32px]
                  font-bold
                  leading-none
                  text-[#111827]
                "
              >
                Sign up
              </h1>

              {/* =================================================
                  FORM
              ================================================= */}
              <form onSubmit={handleSubmit}>

                {/* Name */}
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="sr-only"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    autoComplete="name"
                    required
                    className="
                      block
                      w-full
                      h-[36px]
                      sm:h-[38px]
                      rounded-md
                      border
                      border-[#d6dce3]
                      bg-white
                      px-3
                      text-sm
                      text-gray-800
                      placeholder:text-[#4b5563]
                      outline-none
                      transition
                      duration-200
                      focus:border-blue-500
                      focus:ring-2
                      focus:ring-blue-100
                    "
                  />
                </div>

                {/* Email */}
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="sr-only"
                  >
                    Your Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    autoComplete="email"
                    required
                    className="
                      block
                      w-full
                      h-[36px]
                      sm:h-[38px]
                      rounded-md
                      border
                      border-[#d6dce3]
                      bg-white
                      px-3
                      text-sm
                      text-gray-800
                      placeholder:text-[#4b5563]
                      outline-none
                      transition
                      duration-200
                      focus:border-blue-500
                      focus:ring-2
                      focus:ring-blue-100
                    "
                  />
                </div>

                {/* Password */}
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="sr-only"
                  >
                    Password
                  </label>

                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Password"
                      autoComplete="new-password"
                      required
                      className="
                        block
                        w-full
                        h-[36px]
                        sm:h-[38px]
                        rounded-md
                        border
                        border-[#d6dce3]
                        bg-white
                        px-3
                        pr-12
                        text-sm
                        text-gray-800
                        placeholder:text-[#4b5563]
                        outline-none
                        transition
                        duration-200
                        focus:border-blue-500
                        focus:ring-2
                        focus:ring-blue-100
                      "
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                      className="
                        absolute
                        right-3
                        top-1/2
                        -translate-y-1/2
                        text-xs
                        text-gray-400
                        hover:text-gray-700
                        transition
                      "
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                {/* Repeat Password */}
                <div className="mb-6">
                  <label
                    htmlFor="repeatPassword"
                    className="sr-only"
                  >
                    Repeat Password
                  </label>

                  <div className="relative">
                    <input
                      id="repeatPassword"
                      name="repeatPassword"
                      type={
                        showRepeatPassword
                          ? "text"
                          : "password"
                      }
                      value={formData.repeatPassword}
                      onChange={handleChange}
                      placeholder="Repeat Password"
                      autoComplete="new-password"
                      required
                      className="
                        block
                        w-full
                        h-[36px]
                        sm:h-[38px]
                        rounded-md
                        border
                        border-[#d6dce3]
                        bg-white
                        px-3
                        pr-12
                        text-sm
                        text-gray-800
                        placeholder:text-[#4b5563]
                        outline-none
                        transition
                        duration-200
                        focus:border-blue-500
                        focus:ring-2
                        focus:ring-blue-100
                      "
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowRepeatPassword(
                          !showRepeatPassword
                        )
                      }
                      className="
                        absolute
                        right-3
                        top-1/2
                        -translate-y-1/2
                        text-xs
                        text-gray-400
                        hover:text-gray-700
                        transition
                      "
                    >
                      {showRepeatPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                {/* Terms */}
                <div className="mb-7 flex items-start">
                  <input
                    id="terms"
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) =>
                      setAgreed(e.target.checked)
                    }
                    className="
                      mt-[2px]
                      h-3
                      w-3
                      shrink-0
                      cursor-pointer
                      rounded-sm
                      border-gray-400
                      text-blue-600
                      focus:ring-1
                      focus:ring-blue-500
                    "
                  />

                  <label
                    htmlFor="terms"
                    className="
                      ml-1.5
                      cursor-pointer
                      text-xs
                      leading-4
                      text-gray-800
                    "
                  >
                    I agree all Terms of service
                  </label>
                </div>

                {/* Register Button */}
                <button
                  type="submit"
                  className="
                    inline-flex
                    h-[34px]
                    items-center
                    justify-center
                    rounded-md
                    bg-[#1473ea]
                    px-4
                    text-sm
                    font-medium
                    tracking-[1px]
                    text-white
                    shadow-sm
                    transition-all
                    duration-200
                    hover:bg-[#0864d5]
                    active:bg-[#0759bd]
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-300
                    focus:ring-offset-2
                  "
                >
                  Register
                </button>
              </form>
            </div>
          </div>

          {/* =====================================================
              RIGHT SIDE - IMAGE + LOGIN LINK
          ===================================================== */}
          <div
            className="
              order-1
              md:order-2
              flex
              flex-col
              items-center
              justify-center
              px-6
              pt-10
              pb-4
              sm:px-10
              md:px-6
              md:py-10
              lg:px-10
            "
          >
            {/* Illustration */}
            <div
              className="
                flex
                w-full
                items-center
                justify-center
              "
            >
              <img
                src={signup}
                alt="Signup illustration"
                className="
                  h-auto
                  w-full
                  max-w-[280px]
                  object-contain
                  sm:max-w-[320px]
                  md:max-w-[300px]
                  lg:max-w-[320px]
                  xl:max-w-[340px]
                "
              />
            </div>

            {/* Already Member */}
            <Link
              to="/login"
              type="button"
              onClick={handleLogin}
              className="
                mt-8
                text-md
                text-gray-900
                transition-colors
                duration-200
                hover:text-blue-600
                cursor-pointer
              "
            >
              I am already member
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
};

export default Signup;