import Logo from "/chatter_sphere_logo.png";

function App() {
  return (
    <div className="flex selection:bg-green-400 selection:text-black items-center justify-center w-full h-screen bg-gradient-to-b from-green-900 to-blue-950">
      <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-950 to-black p-8 text-white rounded-2xl shadow-xl w-96">
        <img src={Logo} alt="Chatter Sphere Logo" className="w-24 h-24 mb-6" />
        <div className="text-2xl font-bold mb-4">
          <h1 className="inline">Welcome to</h1>
          <h1 className="bg-green-600 inline ml-2 text-black rounded-md">
            Chatter Sphere
          </h1>
        </div>
        <div className="mb-6">
          <p className="text-yellow-400/75 mr-1 inline">Connect.</p>
          <p className="text-green-400/75 inline">Converse.</p>
          <p className="text-blue-400/75 ml-1 inline">Collaborate.</p>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-col items-start mb-4">
            <label htmlFor="email" className="text-sm mb-2 text-gray-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-800"
            />
          </div>
          <div className="flex flex-col items-start mb-4">
            <label htmlFor="password" className="text-sm mb-2 text-gray-300">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-800"
            />
          </div>
          <button className="hover:scale-105 active:scale-95 w-full py-2 mt-4 bg-gradient-to-br from-green-900 to-blue-900 hover:from-green-950 hover:to-blue-950 text-white font-medium rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            Login
          </button>
          <div className="text-gray-400 flex items-center justify-center mt-4">
            Don't have an account yet?
            <a className="underline text-green-700 ml-2" href="/signup">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
