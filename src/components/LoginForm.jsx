import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    // Frontend required validation
    if (!email || !password) {
      setError("Email and password are required")
      setLoading(false)
      return
    }

    try {
      const res = await axios.post(
        'https://netflix-backend-qhb5.onrender.com/login',
        { email, password }
      )

      if (res.data?.success) {
        navigate('/home')
      } else {
        setError(res.data?.message || "Wrong email or password")
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        required
        className="bg-zinc-800 text-white px-4 py-3 rounded-lg outline-none
        focus:ring-2 focus:ring-red-600"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        required
        className="bg-zinc-800 text-white px-4 py-3 rounded-lg outline-none
        focus:ring-2 focus:ring-red-600"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg text-white
        font-semibold transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Signing in..." : "Sign In"}
      </button>
    </form>
  )
}

export default LoginForm
