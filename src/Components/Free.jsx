import { LiaShippingFastSolid } from "react-icons/lia";
import { TbWorld } from "react-icons/tb";
import { IoCallOutline } from "react-icons/io5";
import { GiReceiveMoney } from "react-icons/gi";


function Free() {
    return (
        <>
            <div className="container-fluid" style={{marginBottom:"150px"}}>
                <div className="row">
                    <div className="col-12 text-center ">
                        <LiaShippingFastSolid fontSize={100} />
                        <h1>All Order Over $60 Ship Free!</h1>
                        <div className="col-6 m-auto"><p>Donec vehicula cursus vestibulum lectus, sit eros integer varius cum turpis et quam congue nislaccumsan ac bibendum ac in erat. Donec posuere consectetuer volutpat rutrum ac, sollicitudin quam quisque, atinterdum dignissim, fringilla elit risus lorem, eu condimentum eros mollis.Discover now</p></div>
                        <button
                            className="btn-color"
                            style={{ padding: "15px", left: "90px", paddingLeft: "40px", paddingRight: "40px", }}>
                            Discover Now
                        </button>
                    </div>
                </div>
            </div>

            <div className="container d-flex  justify-content-around " style={{marginBottom:"90px"}}>
                <div className="row  d-flex ">
                    <div className="col-12 ">
                        <h2>Sign Up For Our Newsletter</h2>
                        <p>Subscribe our newsletter and get discount 20% Off</p>


                    </div>

                </div>
                <div className=" m-auto jeel"><input style={{ border: "none", outline: "none" }} type="text" placeholder="Search for our newsletter..." /></div>
                <div>
                <button
                    className="btn-color"
                    style={{ padding: "15px", left: "90px", paddingLeft: "40px", paddingRight: "40px", }}>
                   Subscribe Now
                </button>
                </div>
                
            </div>


            <div className="container">
                <div className="row">
                    <div className="col-12  ">
                    <div className="d-flex">
                    <div className="d-flex">
                    <TbWorld style={{fontSize:"50px"}} className="" /><br />
                    <div>
                    <h5>Worldwide Shipping</h5>
                    <p style={{fontSize:"15px"}}>Duis autem vel eum iriure dolor in hendrerit velit esse molestie consequat.</p>
                    </div>
                    </div><div className="d-flex">
                    <IoCallOutline  style={{fontSize:"50px"}} className="" /><br />
                    <div>
                    <h5>Worldwide Shipping</h5>
                    <p style={{fontSize:"15px"}}>Duis autem vel eum iriure dolor in hendrerit velit esse molestie consequat.</p>
                    </div>
                    </div><div className="d-flex">
                    <GiReceiveMoney  style={{fontSize:"50px"}} className="" /><br />
                    <div>
                    <h5>Worldwide Shipping</h5>
                    <p style={{fontSize:"13px"}}>Duis autem vel eum iriure dolor in hendrerit velit esse molestie consequat.</p>
                    </div>
                    </div>
                    </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Free
