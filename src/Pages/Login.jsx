import React from 'react'
import {HiOutlineEye, HiOutlineEyeOff} from "react-icons/hi"
import { useState } from 'react';
const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        remember: false,
    });
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    function handleChange(e) {
        const {name, value, type, checked} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (!formData.email.trim() || !formData.password.trim()) {
            setMessage("Input your details");
            setLoggedIn(false);
            return;
        }
        setMessage("Login successful");
        setLoggedIn(true);
    }
  return (
    <section className="min-h-screen  px-4 py-6 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-7xl bg-white overflow-hidden rounded-[10px] shadow-xl grid grid-cols-1 lg:grid-cols-2 min-h-[760px]">
        {/* Left side */}
        <div className="flex items-center justify-center px-6 py-12 sm:px-10 lg:px-16 ">
          <div className=" h-[410px] w-[414px] border rounded-[10px]">
            <h1 className="text-[20px] sm:text-[20px] font-bold text-[#213e81] px-5 py-4">
              Welcome Back
            </h1>



            {message && (
              <div
                className={`mt-6 rounded-lg px-4 py-3 text-sm font-medium ${
                  loggedIn
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-8 space-y-6 px-5  pb-6">
              {/* Email */}
              <div className='rounded-xl border border-[#d1d5db] px-6'>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#374151]"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="mailhub@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 outline-none py-3 text-[15px]"
                />
              </div>

              {/* Password */}
              <div className='rounded-xl border border-[#d1d5db] px-6'>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-[#374151]"
                >
                  Password
                </label>

                <div className="mt-2 relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                    className=" py-3  text-[15px] outline-none "
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6b7280]"
                  >
                    {showPassword ? (
                      <HiOutlineEyeOff className="text-xl" />
                    ) : (
                      <HiOutlineEye className="text-xl" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember + forgot */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <label className="flex items-center gap-3 text-sm text-[#0e1c3f] font-semibold">
                  <input
                    type="checkbox"
                    name="remember"
                    checked={formData.remember}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-gray-300 accent-[#0f2348]"
                  />
                  Remember Me
                </label>

                <a
                  href="#"
                  className="text-sm text-[#3b82f6] hover:underline font-semibold"
                >
                  Forgot password?
                </a>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full rounded-2xl bg-[#081b3f] px-4 py-2  text-white text-[16px] font-medium shadow-md transition hover:bg-[#0d285c]"
              ><a href="/Verify">
                Log In
                </a>
              </button>
            </form>
          </div>
        </div>

        {/* Right side image */}
       
    <div className="left-20 relative overflow-hidden blur-[10px]">
        <img
          src="Splash.svg"
          alt="Building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/20"></div>
      </div>
      </div>
    </section>
  )
}

export default Login