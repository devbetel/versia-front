import { useEffect } from "react";
import "./App.css";
import Header from "./components/HeaderComponent/Header";
import "aos/dist/aos.css";
import Aos from "aos";
import Main from "./components/MainContent/Main";
import "@fontsource/dm-sans"; 
import TransitionSection from "./components/TransitionGradient/TransitionSection";
import Different from "./components/DifferentContent/Different";
import About from "./components/AboutContent/About";
import TransitionGradient2 from "./components/TransitionGradient2Content/TransitionGradient2";
import Produtos from "./components/ProductsContent/Products";
import TransitionGradientAbout from "./components/TransitionGradient3Content/TransitionGradient3";
import Method from "./components/MethodContent/Method";
import Cta from "./components/CtaContent/Cta";
import TransitionGradiente4 from "./components/TransitionGradient4Content/TransitionGradient4";
import TransitionGradient5 from "./components/TransitionGradient5Content/TransitionGradient5";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1300,
      once: false,
    });
  }, []);

  return (
    <>
      <Header />
      <Main />
      <TransitionSection />
      <div id="different">
        <Different />
      </div>
      <TransitionGradient2 />
      <div id="about">
        <About />
      </div>
      <TransitionGradientAbout />
      <div id="products">
        <Produtos />
      </div>
      <TransitionGradiente4 />
      <div id="method">
        <Method />
      </div>
      <TransitionGradient5 />
      <div id="cta">
        <Cta />
      </div>
    </> 
  );
}

export default App;