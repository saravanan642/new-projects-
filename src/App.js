import { Route, Routes } from "react-router-dom";
import Home from "./Componentss/New folder/Home";
import About from "./Componentss/New folder/About";
import Contact from "./Componentss/New folder/Contact";
import WhtChoose from "./Componentss/New folder/WhtChoose";
import PageNotFound from "./Componentss/New folder/PageNotFound";
import Header from "./Componentss/New folder/Routes/Header";
import Atag from "./Componentss/New folder/Routes/Atag";
import Link from "./Componentss/New folder/Routes/Link";
import Nagivator from "./Componentss/New folder/Routes/Nagivator";

function App() {
  return (
    <div >
      <Header/>
  <Routes>
    {/* <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/choose" element={<WhtChoose />}/>
    <Route path="*" element={<PageNotFound />} />
    <Route path="/home/:name" element={<Home />}/> */}


    <Route path="/home" element={<Atag/>}/>        
    
    <Route path="/about" element={<Link/>}/>
    
    <Route path="/contact" element={<Nagivator/>}/>
    
    <Route path="*" element={<PageNotFound/>}/>
  </Routes>

    </div>
  );
}

export default App;
