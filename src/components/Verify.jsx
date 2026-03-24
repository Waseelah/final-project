import React from 'react'
import { useRef, useState } from 'react'

const Verify = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [message, setMessage] = useState("");
  const [verified, setVerified] = useState(false);
  const inputRefs = useRef([]);

  function handleChange(index, value) {
    // allow only one digit
    if (!/^\d$/.test(value))
      return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    // move to next input
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  }

  function handleKeyDown(index, e) {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const code = otp.join("");
    if (code.length < 4 || otp.includes("")) {
      setMessage("please enter your 4-digit OTP.");
      setVerified(false);
      return;
    }
    // sample successful verification
    if (code === "1234") {
      setMessage("OTP verified successfully!");
      setVerified(true);
    } else {
      setMessage("Invalid OTP. Please try again.");
      setVerified(false);
    }
  }

  function handleResend() {
    setOtp(["", "", "", ""]);
    setMessage("A new OTP has been sent.");
    setVerified(false);
    inputRefs.current[0].focus();
  }

  return (
    <section className="min-h-screen bg-[#38312d] px-4 py-6 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-[1280px] bg-white overflow-hidden rounded-[10px] shadow-xl grid grid-cols-1 lg:grid-cols-2 min-h-[760px]">
        {/* Left panel */}
        <div className="flex items-center justify-center px-6 py-12 sm:px-10 lg:px-16">
          <div className="w-full max-w-[380px] rounded-[18px] bg-white shadow-sm border border-[#f0f0f0] px-6 sm:px-8 py-8">
            <h1 className="text-[28px] sm:text-[34px] font-semibold text-[#111827]">
              Verify OTP
            </h1>

            <p className="mt-3 text-[14px] sm:text-[15px] leading-[1.6] text-[#6b7280] max-w-[320px]">
              We’ve sent a 4-digit code to your email. Please enter it below to
              complete your registration.
            </p>

            {message && (
              <div
                className={`mt-5 rounded-lg px-4 py-3 text-sm font-medium ${verified
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
                  }`}
              >
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-8">
              <div className="flex items-center justify-between gap-3 sm:gap-4">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl border border-[#d1d5db] text-center text-[22px] font-semibold text-[#111827] outline-none focus:border-[#0f2348] focus:ring-2 focus:ring-[#0f2348]/20"
                  />
                ))}
              </div>

              <button
                type="submit"
                className="mt-8 w-full rounded-2xl bg-[#081b3f] px-4 py-3 text-white text-[16px] font-medium shadow-md transition hover:bg-[#0d285c]"
              >
                Verify
              </button>
            </form>

            <p className="mt-6 text-center text-[14px] text-[#6b7280]">
              Didn’t receive a code?{" "}
              <button
                type="button"
                onClick={handleResend}
                className="font-semibold text-[#d55b5b] hover:underline"
              >
                Resend
              </button>
            </p>
          </div>
        </div>

        {/* Right panel image */}
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
  );
}
export default Verify;