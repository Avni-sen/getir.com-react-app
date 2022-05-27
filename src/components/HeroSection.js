import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";
import {FaFacebook} from 'react-icons/fa'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useState} from 'react';

export default function HeroSection() {
  var settings = {
    dots: false,
    arrow:false,
    infinite: true,
    autoplay: true,
    slidesToShow:1,
    slidesToScroll:1,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };



  const [selected, setSelected] = useState("TR");

  const phones = {
    TR: "+90",
    B:  "+880",
    BE: "+32",
    BF: "+226",
    BG: "+359",
    BA: "+387",
    BB: "+1-246",
    WF: "+681",
    BL: "+590",
    BM: "+1-441",
    BN: "+673",
    BO: "+591",
    BH: "+973",
    BI: "+257",
    BJ: "+229",
    BT: "+975",
    JM: "++1-876",
    BW: "+267",
    WS: "+685",
    BQ: "+599",
    BR: "+55",
    BS: "+1-242",
    JE: "+44-1534",
    BY: "+375",
    BZ: "+501",
    RU: "+7",
    RW: "+250",
    RS: "+381",
    TL: "+670",
    RE: "+262",
    TM: "+993",
    TJ: "+992",
    RO: "+40",
    TK: "+690",
    LK: "+94",
    LI: "+423",
    LV: "+371",
    TO: "+676",
    LT: "+370",
    LU: "+352",
    LR: "+231",
    LS: "+266",
    TH: "+66",
    TG: "+228",
    TD: "+235",
    TC: "+1-649",
    LY: "+218",
    VA: "+379",
    VC: "++1-784",
    AE: "+971",
    AD: "+376",
    AG: "+1-268",
    AF: "+93",
    AI: "+1-264",
    VI: "+1-340",
  }



  return (
    <div className="h-[500px] relative before:bg-gradient-to-r before:from-primaryBrandColor before:to-transparent before:absolute before:w-full before:h-full  before:inset-0 before:z-10">
      <Slider {...settings}>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            alt="görsel-1"
            src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg"
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            alt="görsel-3"
            src="https://getir.com/_next/static/images/getir-mainpage-3-ffd1e98c5da51809f9adcc3a4a37d751.jpg"
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            alt="görsel-2"
            src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg"
          />
        </div>
      </Slider>
      <div className="container flex justify-between items-center z-20 absolute top-0 left-1/2 -translate-x-1/2 h-full">
       <div>
       <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt="slider-logo"  />
        <h3 className="text-2xl mt-8  font-semibold text-white">Dakikalar içinde <br /> kapınızda <br/></h3>
       </div>
    <div className="w-[400px] rounded-lg bg-gray-50 p-6">
      <h3 className="text-primaryBrandColor text-center font-semibold mb-2">Giriş Yap veya Kayıt Ol</h3>
   
    <div className="grid gap-y-3">
    <div className="flex">
    <ReactFlagsSelect className="flag-select"
    selectedSize={18}
    optionsSize={14}
    countries={Object.keys(phones)}
  customLabels={phones}
    selected={selected}
    onSelect={(code) => setSelected(code)}
  />
  <label className="flex-1 ml-2 relative block">
  <input required
  className="h-14 px-4 text-sm border-2 rounded transition-colors
  border-gray-200 w-full hover:border-primaryBrandColor
  focus:border-primaryBrandColor outline-none peer pt-3" />
  <span className="absolute text-gray-500 text-sm top-0
  left-0 h-full px-4 flex items-center transition-all peer-focus:h-7 peer-focus:text-primaryBrandColor peer-focus:text-xs peer-valid:h-7 peer-valid:text-primaryBrandColor peer-valid:text-xs">
    Telefon Numarası
    </span>
  </label>
    </div>
    <button className="bg-brandColorYellow text-sm p-4 rounded-lg
    w-full h-12 flex items-center justify-center text-primaryBrandColor
    font-semibold transition-colors hover:bg-primaryBrandColor
    hover:text-brandColorYellow">
      Telefon Numarası İle Devam Et
      </button>
      <hr className="h-[1] bg-gray-300 my-2" />
    <button className="bg-blue-100 text-sm p-4 rounded-lg
    w-full h-12 flex items-center text-blue-700 px-4
    font-semibold transition-colors hover:bg-blue-700
    hover:text-white">
      <FaFacebook size={24} className="m"/>
     <span className="mx-auto">Facebook İle Devam Et</span>
      </button>
    </div>
    </div>
      </div>
    </div>
  );
}
