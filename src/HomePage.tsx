import Categories from "./components/Categories";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function HomePage() {
  return (
    <>
        <Navbar/>
        {/* Hero */}
        <Hero/>
        {/* Categories */}
        <Categories/>
    </>
  );
}