import "./App.css";
import "./index.css";
import Header from "./Component/Header/Header";
import Slider from "./Component/Slider/Slider";
import Services from "./Component/Services/Services";
import Partners from "./Component/Partners/Partners";
import Line from "./Component/Line/Line";
import Blogs from "./Component/Blogs/Blogs";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import Downarrow from "./Component/DownArrow/Downarrow";

function App() {
  return (
    <>
      <Header />
        <Slider />
        <Downarrow />
        <Services />
        <Line />
        <Partners />
        <Line />
        <Blogs />
        <Contact />
        <Footer />
      </>
    
  );
}

export default App;
