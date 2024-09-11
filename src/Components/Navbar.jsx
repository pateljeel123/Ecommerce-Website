import { Link } from "react-router-dom"
import { FaAngleDown } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";


function Navbar() {
    return (
        <>
            <div  className="d-flex justify-content-around p-3">
                <div>
                    <Link to={"/"}><img src="https://wphix.com/template/mazia/img/logo/logo1.png" height={30} alt="" /></Link>
                </div>
                <div className="container p-0 m-0 ">
                    <div className="text-center  ">
                        <div className="col-12 d-flex gap-4 justify-content-center">
                            <Link to={"/"}> <h6 className="basic-1">HOME<FaAngleDown /></h6></Link>
                            <Link to={"/shop"}><h6 className="basic-1 text-decoration-none">SHOP<FaAngleDown /></h6></Link>
                            <Link to={"/blog"}><h6 className="basic-1">BLOG<FaAngleDown /></h6></Link>
                            <Link to={"/portfolio"}><h6 className="basic-1">PORTFOLIO<FaAngleDown /></h6></Link>
                            <Link to={"/page"}><h6 className="basic-1">PAGE<FaAngleDown /></h6></Link>
                            <Link to={"/contect"}><h6 className="basic-1">CONTECT<FaAngleDown /></h6></Link>
                        </div>

                    </div>
                </div>
                <div>
                   <ul className="gap-3" style={{listStyle:"none",display:"flex",}}>
                        <li><IoPeopleSharp style={{fontSize:"28"}} /> Login/Sign up</li>
                        <li><IoIosSearch style={{fontSize:"20"}}  /></li>
                        <li><FaRegHeart  style={{fontSize:"20"}} /></li>
                        <li><GrCart  style={{fontSize:"20"}} /></li>
                        <li><CgProfile style={{fontSize:"20"}} /></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
