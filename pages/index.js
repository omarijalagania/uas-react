import Header from "../components/Header/Header";
import Feature from "../components/Feature";
import DroneLabel from "../components/Header/DroneLabel";

//animations
import "animate.css";
import Footer from "../components/Footer/Footer";
import Space from "../components/Header/Space";
import Info from "../components/Info/Info";

function Home() {
  return (
    <>
      <Header />
      <Feature />
      <DroneLabel />
      <Space />
      <Info />
      <Footer />
    </>
  );
}

export default Home;
