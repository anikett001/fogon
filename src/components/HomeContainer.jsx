import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { heroData } from "../utils/data";

const HomeContainer = () => {
  return (
    <section
      className=" mt-16  grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
      id="home"
    >
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex border-grey-100 border-2 items-center gap-2 justify-center bg-black px-4 py-1 rounded-full">
          <p className="text-base  text-red-500 font-semibold">
            Fast Delivery
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-white">
          Best Resturant in 
          <br />
          <span className="text-red-600 text-[3rem] lg:text-[5rem]">
            Your City
          </span>
        </p>

        <p className="text-red-600 text-2xl">THE STATE OF ART RECIPES :</p>
        <p className="text-base text-white text-center md:text-left md:w-[80%]">

         Fogon is an Indian Cuisine Restaurant . Our search for authentic and long-preserved dishes resulted in a gathering of the North’s most cherished recipes. Flavors close to the heart with authentic recipes and ingredients.
        </p>

        <button
          type="button"
          className="bg-gradient-to-br from-red-600 to-red-500 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          className=" ml-auto h-420 w-full lg:w-500 lg:h-650"
          alt="hero-bg"
        />

        <div className="w-full h-full absolute top-5 left-0 flex items-center justify-center lg:px-32  py-4 gap-4 flex-wrap">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="  lg:w-190  p-4 bg-grey backdrop-blur-md rounded-2xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img 
                onClick={()=> console.log("clicked")} // Need To be completed by creating new page showing the discription of the item
                  src={n.imageSrc}
                  className="w-20 flex lg:w-40 -mt-10 lg:-mt-20 rounded-2xl "
                  alt="I1"
                />
                {/* {Category Name} */}

                {/* <p className="text-white lg:text-xl font-semibold text-white mt-2 lg:mt-4">
                  {n.name}
                </p> */}

                <p  className="text-[12px] lg:text-sm text-white font-semibold my-1 lg:my-3">
                  {n.name}
                </p>

                <p className="text-md font-semibold text-white">
                  <span className="text-md text-red-500">₹</span> {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
