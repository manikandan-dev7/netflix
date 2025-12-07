import React from 'react'

const App = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="bg-zinc-900 w-full max-w-md p-8 rounded-xl shadow-lg">
        <h1 className="text-white text-3xl font-bold mb-6 text-center">Sign In</h1>

        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-zinc-800 text-white px-4 py-3 rounded-lg 
            focus:ring-2 focus:ring-red-600 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full bg-zinc-800 text-white px-4 py-3 rounded-lg
            focus:ring-2 focus:ring-red-600 outline-none"
          />

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg
            font-semibold transition-all"
          >
            Sign In
          </button>
        </form>

        <p className="text-gray-400 mt-5 text-center text-sm">
          New to Netflix?{" "}
          <span className="text-white hover:underline cursor-pointer">Sign up now</span>
        </p>
      </div>
    </div>
  )
}

export default App
