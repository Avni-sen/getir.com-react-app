import Header from "components/Header";
import Cards from "components/Cards";
import Footer from "components/Footer";
import Favorites from "components/Favorites";
import HeroSection from "components/HeroSection";
import Categories from "components/Categories";
import Companies from "components/Companies";
import MobileApp from "components/MobileApp";
import "./style.css";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Categories />
      <Companies />
      <Favorites />
      <MobileApp />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
