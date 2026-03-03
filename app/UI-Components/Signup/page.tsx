"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

const SignUp = () => {

  const [isSignUp, setIsSignUp] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleAuth = () => {
    if (!email || !password) {
      alert("Please Fill in both Email and Password")
      return
    }

    if (isSignUp && !name) {
      alert("Please enter your Name")
      return
    }

    const userData = { name, email };
    localStorage.setItem("user", JSON.stringify(userData));
    router.push("/Dashboard")
  }

  return (
    <div className="bg-[#F8FAFC] text-black w-full h-full min-h-screen fixed top-0 left-0 z-[9999] overflow-y-auto">
      {/* Header / Logo */}
      <div className="absolute top-5 left-5 lg:left-10 z-50">
        <Link href="/" className="text-3xl lg:text-4xl font-bold Merienda text-black flex items-center gap-1 group">
          Job<span className="text-prim group-hover:text-black transition-colors duration-300">Linker</span>
          <motion.div
            className="w-2 h-2 rounded-full bg-prim mb-[-12px]"
            animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
          />
        </Link>
      </div>

      {/* Close Button */}
      <Link href="/" className="absolute top-5 right-5 lg:right-10 w-[50px] h-[50px] flex items-center justify-center border rounded-full border-gray-200 bg-white shadow-sm hover:bg-prim hover:text-white hover:border-white transition-all duration-300 cursor-pointer hover:scale-110 z-50">
        <i className="bi bi-x-lg text-xl"></i>
      </Link>

      {/* Main Content */}
      <div className="flex flex-col justify-center items-center min-h-screen p-6 relative">
        {/* Decorative Background Blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[600px] max-h-[600px] bg-prim/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)] border border-gray-100 w-full max-w-[520px]"
        >
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold Merienda mb-3 tracking-tight">
              {isSignUp ? "Create Account" : "Welcome Back"}
            </h1>
            <p className="text-gray-500 font-medium">
              {isSignUp ? "Join our community and find your dream job" : "Sign in to continue your job search"}
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {isSignUp && (
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                <div className="relative group">
                  <i className="bi bi-person absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg group-focus-within:text-prim transition-colors"></i>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-prim focus:ring-4 focus:ring-prim/5 outline-none transition-all font-medium placeholder:text-gray-400"
                  />
                </div>
              </div>
            )}

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
              <div className="relative group">
                <i className="bi bi-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg group-focus-within:text-prim transition-colors"></i>
                <input
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-prim focus:ring-4 focus:ring-prim/5 outline-none transition-all font-medium placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-700 ml-1">Password</label>
              <div className="relative group">
                <i className="bi bi-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg group-focus-within:text-prim transition-colors"></i>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-prim focus:ring-4 focus:ring-prim/5 outline-none transition-all font-medium placeholder:text-gray-400"
                />
              </div>
            </div>

            {!isSignUp && (
              <div className="flex justify-end -mt-2">
                <button className="text-sm font-bold text-prim hover:text-black transition-colors">
                  Forgot Password?
                </button>
              </div>
            )}

            <button
              onClick={handleAuth}
              className="w-full bg-prim text-white py-4.5 rounded-2xl font-bold shadow-xl shadow-prim/25 hover:bg-black hover:shadow-black/10 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 group mt-2"
            >
              {isSignUp ? "Create Account" : "Sign In"}
              <i className="bi bi-arrow-right text-xl group-hover:translate-x-1 transition-transform"></i>
            </button>

            <div className="mt-8 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-500 font-medium">
                {isSignUp ? "Already have an account?" : "Don't have an account yet?"}
                <button
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="ml-2 text-prim font-bold hover:underline"
                >
                  {isSignUp ? "Sign In" : "Sign Up"}
                </button>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SignUp