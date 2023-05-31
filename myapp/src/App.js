export default function App() {
  return (
    <div className="flex justify-center">
      <div className="w-480">
        <h1>log in</h1>
        <form action="">
          {/* email label section */}
          <div>
            <label For="email">Email</label>
            <span>
              Need an account? <span>Sign Up</span>{" "}
            </span>
            <div>
              <input
                className="border border-gray-300 rounded-md px-4 py-2"
                type="text"
                name=""
                id="email"
              />
            </div>
          </div>
          {/* password section */}
          <div>
            <div>
              <label htmlFor="">PassWord</label>
              <span>Show</span>
            </div>
            <div>
              <input
                className="border border-gray-300 rounded-md px-4 py-2"
                type="text"
              />
            </div>
          </div>
        </form>
        {/* button sections */}

        <div>
          <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-3/4">
              Log in
            </button>
          </div>
          <hr />
          <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-3/4">
              facebook
            </button>
          </div>
          <hr />
          <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-3/4">
              google
            </button>
          </div>
          <hr />
          <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-3/4">
              github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// https://profile.w3schools.com/log-in?redirect_url=https%3A%2F%2Fmy-learning.w3schools.com
