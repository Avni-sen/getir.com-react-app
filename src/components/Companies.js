import Banners from "../api/banners.json";
import { useState } from "react";
import { useEffect } from "react";
import Slider from 'react-slick'
import {IoIosArrowBack,IoIosArrowForward} from 'react-icons/io'


function nextButton({className, onClick}) {

  return (
    <button className={`${className} text-purple-700`}  onClick ={onClick}>
    <IoIosArrowForward  size={22}/>
    </button>
  );
}

function prevButton({className, onClick}) {
  return (
    <button  className={`${className} text-purple-700 `} onClick ={onClick}>
    <IoIosArrowBack  size={22}/>
    </button>
  );
}


export default function Companies() {

  const [banners , setBanners] = useState([]);

  useEffect(() => {
    setBanners(Banners);
  },[])

  var settings = {
    dots: false,
    arrow:true,
    infinite: true,
    slidesToShow:3,
    slidesToScroll:1,
    speed: 500,
    nextArrow:<nextButton />,
    prevArrow:<prevButton  />,
  };


  return (
  <div className="bg-white py-8">
    <div className="container mx-auto">
        <h3 className="text-sm font-semibold mb-3">Kampanyalar</h3>
        <Slider className="-mx-2" {...settings}>
         {
           banners.length && banners.map((banner , index) =>
            <div key={banner.id}>
              <picture className="block px-2">
              <img className="rounded-lg "  src={banner.image} />
              </picture>
            </div>
           )
         }
        </Slider>
    </div>
  </div>
  );
}
