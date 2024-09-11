import axios from "axios";
import { useEffect, useState } from "react";

function Shop() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []); // Empty array ensures this runs only once after initial render

  return (
    <div className="cardjeel d-flex flex-wrap justify-content-center">
      {data.map((e) => (
        <div key={e.id} className="">
          {/* Container for images with hover effect */}
          <div className="image-container">
            <img className="img1" src={e.img_src} alt="Product Image 1" />
            <img className="img2" src={e.img_hover} alt="Product Image 2" />
          </div>
          {/* Static title (not affected by hover) */}
          <p>{e.title}</p>
          <p>{e.price}</p>
          </div>
      ))}
    </div>
  );
}

export default Shop;
