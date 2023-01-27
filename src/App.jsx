import Logo from "./img/software-engineer.svg";

function App() {
  return (
    <div className={`App mx-4`}>
      <div className="container mx-auto flex flex-col">
        <header className="bg-offWhite dark:bg-black flex justify-between m-6 items-center">
          <h1 className="text-3xl dark:bg-white md:text-4xl">
            {" "}
            <span className="text-red-500 font-bold">Teddy's</span> Blog
          </h1>
          <div className="flex space-x-2">
            <button className="hidden p-3 w-28 text-white outline-black m-1 bg-red-500 hover:bg-red-400 rounded-full md:block shadow-sm outline">
              Register
            </button>
            <button className="hidden p-3 w-28 text-white outline-black baseline m-1 px-5 bg-red-500 hover:bg-red-400 rounded-full md:block shadow-sm outline">
              Login
            </button>
          </div>
        </header>

        <section
          id="hero"
          className="container flex flex-col-reverse mx-auto m-6 md:flex-row justify-center"
        >
          <div className="flex flex-col justify-center space-y-1 ">
            <h1 className="text-5xl md:text-left mt-2">Welcome to my Blog</h1>
            <p className="text-lg md:text-left">
              A blog dedicated to #tech, #programming, and any thing else I feel
              like talking about.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="p-3 text-white outline-black w-28 baseline m-1 bg-red-500 hover:bg-red-400 rounded-full shadow-sm outline md:block">
                View Posts
              </button>
            </div>
          </div>
          <div className="flex">
            <img src={Logo} alt="dat alt do" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
