import React from "react";
import GoogleSvg from "../Images/GoogleIcon.svg";

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen bg-indigo-600">
      <div className="w-[480px] p-[48px] bg-white rounded-md shadow-lg ">
        <h1 className="text-3xl font-bold">Log in</h1>
        <div className="">
          <form action="" className="">
            {/* email label section */}
            <div
              className="mt-7
            "
            >
              <div className="flex justify-between">
                <label For="email" className="font-medium text-base mb-2">
                  Email
                </label>
                <span className="text-[14px]">
                  Need an account?
                  <span className="font-semibold ml-2 text-indigo-600">
                    <a href="www.google.com">Sign up</a>
                  </span>
                </span>
              </div>
              <input
                className="w-full border border-gray-300 rounded-md p-3 mt-1"
                type="text"
                name=""
                id="email"
              />
            </div>
            {/* password section */}
            <div className="mt-6">
              <div className="justify-between flex">
                <label For="password" className="font-medium text-base mb-2 ">
                  Password
                </label>
                <span className="flex items-center text-[14px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-eye"
                    viewBox="0 0 16 16"
                    className="mx-1"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                  </svg>
                  Show
                </span>
              </div>
              <div>
                <input
                  className="w-full border border-gray-300 rounded-md p-3 mt-2"
                  type="password"
                  id="password"
                />
              </div>
            </div>
          </form>
        </div>

        {/* button sections */}
        <div className="mt-10">
          <div className="">
            <button className="w-full rounded-full bg-indigo-600 hover:bg-indigo-400 text-white font-bold p-3">
              Log in
            </button>
          </div>
          <div className="pt-6 flex justify-between items-center">
            <hr className="border-gray-400 w-full" />
            <p className="px-2 font-light tracking-wider text-black text-sm">
              OR
            </p>
            <hr className="border-gray-400 w-full" />
          </div>
          <div className="mt-5">
            <button className="w-full flex justify-center items-center rounded-full bg-blue-500 hover:bg-blue-700 text-white text-[16px] font-normal p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="white"
                viewBox="0 0 24 24"
                className="mx-2"
              >
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.093 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.563V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
              </svg>
              Continue with Facebook
            </button>
          </div>
          <div className="mt-2">
            <button className="w-full flex items-center justify-center border border-gray-300 rounded-full bg-white hover:bg-gray-300 text-black text-[16px] font-normal p-3">
              <img src={GoogleSvg} alt="" className="h-[25px] mr-2" /> Continue
              with Google
            </button>
          </div>
          <div className="mt-2">
            <button className="w-full flex justify-center items-center border border-gray-300 rounded-full bg-white hover:bg-gray-300 text-black text-[16px] font-normal p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 16 16"
                className="mx-2"
              >
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
              </svg>{" "}
              Continue with GitHub
            </button>
          </div>
          <div className="mt-5 flex justify-center items-center text-[13px] text-[#282a35] font-semibold">
            <a href="www.google.com" className="hover:text-indigo-600">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
