import React from "react";
import { useState } from "react";
import {auth} from "../firebase/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
 const handleSubmit = async (e) => {
  e.preventDefault();

  // Basic validation first (frontend)
  if (
    !formData.firstName ||
    !formData.lastName ||
    !formData.email ||
    !formData.password ||
    !formData.confirmPassword
  ) {
    alert("Please fill all fields");
    return;
  }

  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

 try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      formData.email,
      formData.password
    );

    const user = userCredential.user;

    // ✅ Save full name
    await updateProfile(user, {
      displayName: `${formData.firstName} ${formData.lastName}`,
    });

    console.log("User created:", user);

    alert("Account created successfully!");
  } catch (error) {
   
    if (error.code === "auth/weak-password") {
      alert("Password should be at least 6 characters");
    } else if (error.code === "auth/email-already-in-use") {
      alert("Email already in use");
    } else if (error.code === "auth/invalid-email") {
      alert("Invalid email address");
    } else {
      alert(error.message);
    }

    console.error(error);
  }
};

  return (
    <div className="flex h-screen w-full">
      <div className="w-1/2 bg-white flex items-center justify-center px-10">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Create an account
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="flex flex-col w-1/2">
                <label className="text-xs text-gray-500 mb-1">First name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1a2d5a]"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label className="text-xs text-gray-500 mb-1">Last name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1a2d5a]"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-xs text-gray-500 mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="mailhub@example.com"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1a2d5a]"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-xs text-gray-500 mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="xxxxxxxxxxx"
                  value={formData.password}
                  onChange={handleChange}
                  className="border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 w-full focus:outline-none focus:ring-2 focus:ring-[#1a2d5a]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-xs text-gray-500 mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="xxxxxxxxxxx"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 w-full focus:outline-none focus:ring-2 focus:ring-[#1a2d5a]"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showConfirmPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="bg-[#1a2d5a] text-white rounded-lg py-3 text-sm font-semibold hover:bg-[#162347] transition-colors mt-2"
            >
              Continue
            </button>

            <p className="text-center text-xs text-gray-500">
              Already have an account?{" "}
              <a
                href="/Login"
                className="text-[#1a2d5a] font-semibold hover:underline"
              >
                Login
              </a>
            </p>
          </form>
        </div>
      </div>

    <div className="w-1/2 left-20 relative overflow-hidden blur-[10px]">
        <img
          src="Splash.svg"
          alt="Building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/20"></div>
      </div>
    </div>
  );
};

export default SignUp;