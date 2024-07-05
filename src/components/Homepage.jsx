import React from "react";
import background from "../assets/background.png";
import dog1 from "../assets/dog1.png";
import dog2 from "../assets/dog2.png";
import dog3 from "../assets/dog3.png";
import dog4 from "../assets/dog4.png";
import cat from "../assets/cat.png";
import bone from "../assets/bone.png";
import paw from '../assets/paw.png';
import paw2 from '../assets/paw2.png';
import paw3 from '../assets/paw3.png';
import belt from '../assets/belt.png';


function Homepage() {
  return (
    <div
      className="h-[100vh]"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <img src={bone} alt="bone" className="absolute left-[35%] top-[20%] w-12 h-12"/>
        <img src={paw} alt="paw" className="absolute left-[15%] top-[35%] w-12 h-12"/>
        <img src={paw2} alt="paw2" className="absolute left-[50%] top-[35%] w-[90px] h-[90px]" />
       
        <h1 className="absolute top-[47%] left-[27%] text-6xl font-serif text font-semibold ">
          Taking Care
        </h1>

        <img src={belt} alt="belt" className="absolute left-[45%] bottom-[25%] w-[80px] h-[80px]" />
        <img src={paw3} alt="paw3" className="absolute left-[25%] bottom-[10%] w-[80px] h-[80px]" />
        <img src={bone} alt="bone" className="absolute left-[8%] bottom-[-2%] w-12 h-12"/>
        <img src={paw2} alt="paw2" className="absolute left-[50%] bottom-[-5%] w-[90px] h-[90px]" />
      </div>

      <div className="float-right">
        <img
          src={cat}
          alt="cat"
          className="absolute right-[28%] top-[20%] w-[180px] z-10"
        />
        <img
          src={dog2}
          alt="dog2"
          className="absolute right-[0%] top-[10%] w-[180px] z-10"
        />
        <img
          src={dog1}
          alt="dog1"
          className="absolute right-[24%] top-[57%] w-[180px] z-5"
        />

        <img
          src={dog3}
          alt="dog3"
          className="absolute right-[3%] top-[60%] w-[230px] h-[230px]"
        />
        <img
          src={dog4}
          alt="dog4"
          className="absolute right-[11%] top-[20%] w-[250px] z-10"
        />
      </div>
    </div>
  );
}

export default Homepage;
