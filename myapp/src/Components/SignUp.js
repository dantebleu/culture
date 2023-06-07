import React from "react";

export default function SignUp() {
  return (
    <div className="flex justify-center items-center h-screen bg-indigo-600">
      <div className="w-[480px] p-[48px] bg-white rounded-md shadow-lg">
        <h3 className="text-3xl font-bold">Reset your password</h3>
        <div className="mt-8">
          <p className="text-base">
            If the account exists, we'll email you instructions to reset the
            password.
          </p>
        </div>
        <div className="mt-7">
          <label htmlFor="email" className="font-medium text-base mb-2">
            Email
          </label>
          <input
            className="w-full border border-gray-300 rounded-md p-3 mt-1"
            type="email"
            id="email"
          />
        </div>
        <div className="mt-10">
          <button className="w-full rounded-full bg-indigo-600 hover:bg-indigo-400 text-white text-lg font-semibold p-3">
            Reset Password
          </button>
        </div>
        <div className="mt-5 flex justify-center items-center text-[13px] text-[#282a35] font-semibold">
          <a href="www.google.com" className="hover:text-indigo-600">
            Return to login
          </a>
        </div>
      </div>
    </div>
  );
}
