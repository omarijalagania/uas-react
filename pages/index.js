import Header from "../components/Header/Header";
import Feature from "../components/Feature";
import DroneLabel from "../components/Header/DroneLabel";

//animations
import "animate.css";
import Footer from "../components/Footer/Footer";
import Space from "../components/Header/Space";

function Home() {
  return (
    <>
      <Header />
      <Feature />
      <DroneLabel />
      <Space />
      <Footer />
    </>
  );
}

export default Home;
