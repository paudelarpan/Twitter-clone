import Home from "./Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route ,Routes} from "react-router-dom";
import About from "./About";
import SingleTweet from "./SIngleTweet";

const Shell = () =>{
    return(
        <>
        <Navbar />
        {/* <About /> */}
         <BrowserRouter>
         <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tweet/:id" element={<SingleTweet />} />
         </Routes>
         
         </BrowserRouter>
    
        </>
    )
}
export default Shell