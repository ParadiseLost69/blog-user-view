import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className={`App mx-4`}>
      <div className="container mx-auto flex flex-col">
        <Header />
        <Hero />
        <div className=" h-40 spider-background"></div>
      </div>
    </div>
  );
}

export default App;
