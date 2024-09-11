import { Route, Routes } from "react-router"
import Home from "./Page/Home"
 
import Blog from "./Components/Blog"
import Portfolio from "./Components/Portfolio"
import Page from "./Components/Page"
import Contect from "./Components/Contect"
import Shop from "./Datafetch/Shop"

function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/contect" element={<Contect/>}/>
        <Route path="/page" element={<Page/>}/>
      </Routes>
    </div>
  )
}

export default Allroutes
