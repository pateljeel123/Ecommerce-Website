import axios from "axios"
import { useEffect, useState } from "react"

function Blogdatafetch() {

    const [blogdatafetch, setblogdatafetch] = useState([])

    function blogdata() {
        axios.get("http://localhost:3000/blog")
            .then((res) => {
                setblogdatafetch(res.data)
            })
            .catch((err) => console.log(err))
    }


    useEffect(() => {
        blogdata()
    }, [])
    return (
        <div className=" d-flex flex-wrap justify-content-center" style={{width:"70%",justifyContent:"start",gap:"50px"}} >
            {blogdatafetch.map((e) => (
                <>
                   <div key={e.id}>
                    <div className="text-center">
                    <img height={350} width={550}  src={e.image} alt="" />
                    <h5>{e.title}</h5>
                    <p style={{width:"490px"}}>{e.description}</p>
                    </div>

                                
                    </div>
                </>
            ))}
        </div>
    )
}

export default Blogdatafetch
