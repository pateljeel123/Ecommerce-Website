import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Import autoplay styles

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

function Slider() {
    return (
        <div>
            <Swiper
                modules={[EffectFade, Navigation, Pagination, Autoplay]} // Add Autoplay module
                className="mySwiper"
                loop={true} // Enable infinite loop
                autoplay={{ delay: 3000 }} // Set autoplay delay to 2000ms (2 seconds)
            >
                <SwiperSlide>
                    <h1 style={{ top: "300px", position: "absolute", fontSize: "70px", left: "90px" }}>
                        Perfect <br /> Kids Collection
                    </h1>
                    <h6 style={{ top: "500px", position: "absolute", left: "90px" }}>
                        New Spring drops from Over. Shop the Collection
                    </h6>
                    <button
                        className="btn-color"
                        style={{
                            top: "550px",
                            position: "absolute",
                            padding: "15px",
                            left: "90px",
                            paddingLeft: "40px",
                            paddingRight: "40px",
                        }}
                    >
                        Discover Now
                    </button>
                    <img height={900} src="https://wphix.com/template/mazia/img/slider/1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <h1 style={{ top: "300px", position: "absolute", fontSize: "70px", left: "90px" }}>
                        Perfect <br /> Kids Collection
                    </h1>
                    <h6 style={{ top: "500px", position: "absolute", left: "90px" }}>
                        New Spring drops from Over. Shop the Collection
                    </h6>
                    <button
                        className="btn-color"
                        style={{
                            top: "550px",
                            position: "absolute",
                            padding: "15px",
                            left: "90px",
                            paddingLeft: "40px",
                            paddingRight: "40px",
                        }}
                    >
                        Discover Now
                    </button>
                    <img height={900} src="https://wphix.com/template/mazia/img/slider/2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <h1 style={{ top: "300px", position: "absolute", fontSize: "70px", left: "90px" }}>
                        Perfect <br /> Kids Collection
                    </h1>
                    <h6 style={{ top: "500px", position: "absolute", left: "90px" }}>
                        New Spring drops from Over. Shop the Collection
                    </h6>
                    <button
                        className="btn-color"
                        style={{
                            top: "550px",
                            position: "absolute",
                            padding: "15px",
                            left: "90px",
                            paddingLeft: "40px",
                            paddingRight: "40px",
                        }}
                    >
                        Discover Now
                    </button>
                    <img height={900} src="https://wphix.com/template/mazia/img/slider/3.jpg" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Slider;
