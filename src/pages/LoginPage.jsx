import React from "react";
import LoginForm from "../components/LoginForm";

const BG_IMAGE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_small.jpg";

const LoginPage = () => {
  return (
    <div
      className="relative min-h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${BG_IMAGE})` }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* top logo */}
      <header className="relative z-10 px-6 py-6 sm:px-12">
        <h1 className="font-netflix text-red-600 text-6xl tracking-[0.3em] scale-y-125">
          NETFLIX
        </h1>
      </header>

      {/* center card */}
      <main className="relative z-10 flex flex-col items-center justify-center px-4 pb-16">

        {/* Sign-in form box */}
        <div className="w-full max-w-md px-8 py-10 rounded-md bg-black/75 sm:px-12 sm:py-12">
          <h1 className="mb-6 text-3xl font-bold text-white">Sign In</h1>

          <LoginForm />

          {/* extra text below form like real Netflix */}
          <div className="flex items-center justify-between mt-3 text-sm text-gray-400">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-red-600" />
              <span>Remember me</span>
            </label>
            <button className="hover:underline">Need help?</button>
          </div>

          <p className="mt-6 text-sm text-gray-400">
            New to Netflix?{" "}
            <span className="text-white cursor-pointer hover:underline">
              Sign up now
            </span>
          </p>

          <p className="mt-3 text-xs text-gray-400">
            This page is protected by Google reCAPTCHA to ensure you&apos;re not a bot.
          </p>
        </div>

        {/* DEMO CREDENTIAL BOX */}
        <div className="max-w-md px-6 py-4 mt-6 text-center border rounded-md bg-black/60 backdrop-blur-md border-white/20">
          <h2 className="mb-2 text-lg font-semibold text-white">
            Beginner Demo Credentials
          </h2>

          <p className="text-sm text-gray-300">
            <span className="font-semibold text-white">Email:</span> abc@gmail.com
          </p>

          <p className="mt-1 text-sm text-gray-300">
            <span className="font-semibold text-white">Password:</span> 123
          </p>

          <p className="mt-3 text-xs text-gray-400">
            (This project is in its beginner phase for learning and demonstration.)
          </p>
        </div>

      </main>
    </div>
  );
};

export default LoginPage;
