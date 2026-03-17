import React, { useState } from "react";

const SignUp = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName:"",
    email: "",
    password: "",
    confirmPassword:"", 
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    console.log("User Data:", form);

    // Simulate API call
    alert("Account created successfully!");
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      
      {/* LEFT - FORM */}
      <div className="flex items-center justify-center bg-gray-50 px-6">
        <div className="w-full max-w-sm bg-white p-6 rounded-xl shadow-md">
          
          <h2 className="text-xl font-semibold mb-4">
            Create an account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 pr-10 outline-none focus:ring-2 focus:ring-blue-400"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2 text-sm text-gray-500"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition"
            >
              Continue
            </button>

          </form>

          <p className="text-sm text-gray-500 mt-4 text-center">
            Already have an account?{" "}
            <span className="text-blue-900 cursor-pointer">
              Login
            </span>
          </p>

        </div>
      </div>

      {/* RIGHT - IMAGE */}
      <div className="hidden md:block">
        <img
          src="Frame 296.svg"
          alt="Building"
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  );
};

export default SignUp;