import React from "react";
import LoginForm from "../components/LoginForm";

const BG_IMAGE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_small.jpg";

const LoginPage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${BG_IMAGE})` }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* top logo */}
      <header className="relative z-10 px-6 sm:px-12 py-6">
        <h1 className="font-netflix text-red-600 text-6xl tracking-[0.3em] scale-y-125">
          NETFLIX
        </h1>
      </header>

      {/* center card */}
      <main className="relative z-10 flex items-center justify-center px-4 pb-16">
        <div className="bg-black/75 max-w-md w-full px-8 sm:px-12 py-10 sm:py-12 rounded-md">
          <h1 className="text-white text-3xl font-bold mb-6">Sign In</h1>

          <LoginForm />

          {/* extra text below form like real Netflix */}
          <div className="flex items-center justify-between text-sm text-gray-400 mt-3">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-red-600" />
              <span>Remember me</span>
            </label>
            <button className="hover:underline">Need help?</button>
          </div>

          <p className="text-gray-400 text-sm mt-6">
            New to Netflix?{" "}
            <span className="text-white hover:underline cursor-pointer">
              Sign up now
            </span>
          </p>

          <p className="text-gray-400 text-xs mt-3">
            This page is protected by Google reCAPTCHA to ensure you&apos;re not
            a bot.
          </p>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
