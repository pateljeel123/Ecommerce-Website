import { Link } from "react-router-dom"
import Blogdatafetch from "../Datafetch/Blogdatafetch"

function Blog() {
  return (
    <>
    <div className="container-fluid">
      <div className="row ">
        <div className="col-12 pen-img ">
          <div className="text-center justify-content-center  align-items-center w-100">
          <h1  style={{marginTop:"300px",fontSize:"70px"}}>Blog</h1>
           
          <p><Link className="link-color" to={"/"}>Home </Link>/ shop</p>
           
           
          </div>
        </div>
      </div>
    </div>

    <Blogdatafetch/>
    </>
  )
}

export default Blog