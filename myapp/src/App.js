export default function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-indigo-600">
      <div className="w-96 p-6 bg-white rounded-md shadow-lg">
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
            <button className="w-full rounded-full bg-blue-500 hover:bg-blue-700 text-white font-bold p-3">
              Log in
            </button>
          </div>
          <div className="pt-6 flex justify-between items-center">
            <hr className="border-gray-400 w-full" />
            <p className="px-2 font-light tracking-wider text-gray-500">OR</p>
            <hr className="border-gray-400 w-full" />
          </div>
          <div className="mt-3">
            <button className="rounded-full bg-blue-500 hover:bg-blue-700 text-white font-bold">
              Facebook
            </button>
          </div>
          <hr />
          <div className="">
            <button className="rounded-full bg-blue-500 hover:bg-blue-700 text-white font-bold">
              Google
            </button>
          </div>
          <hr />
          <div className="">
            <button className="rounded-full bg-blue-500 hover:bg-blue-700 text-white font-bold">
              GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// https://profile.w3schools.com/log-in?redirect_url=https%3A%2F%2Fmy-learning.w3schools.com
