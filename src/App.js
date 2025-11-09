import { Route, Routes } from "react-router-dom";
import Home from "./Componentss/Home";
import About from "./Componentss/About";
import Contact from "./Componentss/Contact";
import WhtChoose from "./Componentss/WhtChoose";
import PageNotFound from "./Componentss/PageNotFound";

function App() {
  return (
    <div >
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/choose" element={<WhtChoose />}/>
    <Route path="*" element={<PageNotFound />} />
    <Route path="/home/:name" element={<Home />}/>
  </Routes>

    </div>
  );
}

export default App;
