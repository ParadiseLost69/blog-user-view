import { useRef } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Posts from "./components/Posts";
import Button from "./components/Button";
import Logo from "./img/software-engineer.svg";

function App() {
  //For scrolls to posts section
  const postsRef = useRef(null);

  function scrollToRef(ref) {
    window.scrollTo({
      top: ref.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className={`App mx-4`}>
      <div className="container mx-auto flex flex-col">
        <Header />
        <section
          id="hero"
          className="container flex flex-col-reverse mx-auto m-6 md:flex-row justify-center"
        >
          <div className="flex flex-col justify-center space-y-1">
            <h1 className="text-5xl md:text-left mt-2">Welcome to my Blog </h1>
            <p className="text-lg md:text-left">
              A blog dedicated to #tech, #programming, and any thing else I feel
              like talking about.
            </p>
            <div className="flex justify-center md:justify-start">
              <div onClick={() => scrollToRef(postsRef)}>
                <Button>View Posts</Button>
              </div>
            </div>
          </div>
          <div className="flex">
            <img src={Logo} className="reversed" alt="dat alt do" />
          </div>
        </section>
        <div className=" h-40 spider-background"></div>
        <section id="posts" className="container flex">
          <Posts postsRef={postsRef} />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
