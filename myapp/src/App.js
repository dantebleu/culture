export default function App() {
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
              <label For="email" className="font-medium text-base mb-2">
                Email
              </label>
              <input
                className="w-full border border-gray-300 rounded-md p-2 mt-2"
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
                <span>Show</span>
              </div>
              <div>
                <input
                  className="w-full border border-gray-300 rounded-md p-2 mt-2"
                  type="password"
                  id="password"
                />
              </div>
            </div>
          </form>
        </div>

        {/* button sections */}
        <div className="mt-5">
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
            <button className="w-full rounded-full bg-blue-500 hover:bg-blue-700 text-white text-[16px] font-normal p-3">
              Continue with Facebook
            </button>
          </div>
          <div className="mt-2">
            <button className="w-full border border-gray-300 rounded-full bg-white hover:bg-gray-300 text-black text-[16px] font-normal p-3">
              Continue with Google
            </button>
          </div>
          <div className="mt-2">
            <button className="w-full border border-gray-300 rounded-full bg-white hover:bg-blue-700 text-black text-[16px] font-normal p-3">
              Continue with GitHub
            </button>
          </div>
          <div className="mt-5 flex justify-center items-center text-[13px] text-[#282a35] font-semibold">
            <a href="www.google.com">Forgot Password?</a>
          </div>
        </div>
      </div>
    </div>
  );
}

// https://profile.w3schools.com/log-in?redirect_url=https%3A%2F%2Fmy-learning.w3schools.com
