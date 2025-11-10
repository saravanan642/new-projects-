import { Route, Routes } from "react-router-dom";
import About from "./Componentss/SessionRoutes/About";
import Contact from "./Componentss/SessionRoutes/Contact";
import WhtChoose from "./Componentss/SessionRoutes/WhtChoose";
import PageNotFound from "./Componentss/SessionRoutes/PageNotFound";
import Header from "./Componentss/Routes/Header";
import Atag from "./Componentss/Routes/Atag";
import Link from "./Componentss/Routes/LInk";
import Nagivator from "./Componentss/Routes/Nagivator";

function App() {
  return (
    <div >
      <Header/>
  <Routes>
    
    <Route path="/about" element={<About />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/choose" element={<WhtChoose />}/>
    <Route path="*" element={<PageNotFound />} />
    


    <Route path="/home" element={<Atag/>}/>        
    
    <Route path="/about" element={<Link/>}/>
    
    <Route path="/s" element={<Nagivator/>}/>
    
    <Route path="*" element={<PageNotFound/>}/>
  </Routes>

    </div>
  );
}

export default App;
