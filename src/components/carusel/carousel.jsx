import Slider from "react-slick";

// eslint-disable-next-line react/prop-types
function Carousel({ data }) {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
    return (
        <div className="slider-container">
        <Slider {...settings}>
            {
                // eslint-disable-next-line react/prop-types
                data.map((item,index)=>{
                    return (
                        <div key={index}>
                            <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} 
                alt={item.title}  />
                        </div>
                    )
                }
            )
            }
          
        </Slider>
      </div>
    );
}

export default Carousel;
