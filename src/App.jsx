import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Posts from "./components/Posts";

function App() {
  return (
    <div className={`App mx-4`}>
      <div className="container mx-auto flex flex-col">
        <Header />
        <Hero />
        <div className=" h-40 spider-background"></div>
        <section id="posts" className="container flex">
          <Posts />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
