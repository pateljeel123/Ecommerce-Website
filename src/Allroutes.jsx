import { Route, Routes } from "react-router"
import Home from "./Page/Home"

function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default Allroutes
