import React, { useEffect, useRef, useState } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import NotFound from "../img/NotFound.svg";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const RowContainer = ({ flag, data, scrollValue }) => {
  const rowContainer = useRef();
  
  const [items, setItems] = useState([]);
  
  const [{ cartItems }, dispatch] = useStateValue();
  
  // let foodItem = props.items

  // const handleAddTocart = async () =>{
  //   let food = []
  //   for (const item of data){
  //     if (item.id === props.foodItem._id){
  //       food = item
  //       break;
  //     }
  //   }
  // }

  const addtocart = (item) => {
    
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items
    });
    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  useEffect(() => {
    addtocart();
  }, [items]);

  return (
    <div
      ref={rowContainer}
      className={`w-full flex items-center gap-3  my-12 scroll-smooth  ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap justify-center"
      }`}
    >
      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            key={item?.id}
            className="w-275 h-[175px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-white rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
          >
            <div className="w-full flex items-center justify-between">
              <motion.div
                className="w-40 h-40 -mt-8 drop-shadow-2xl"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={item?.imageURL}
                  alt=""
                  className="w-50 h-30 mt-7 sm:mt-6 "
                />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.65 }}
                className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"
                onClick={() => setItems([...cartItems, item])}
              >
                <MdShoppingBasket className="text-white" />
              </motion.div>
            </div>

            <div className="w-full flex flex-col items-end justify-end -mt-8">
             
              <p className=" text-sm text-red-500">
                {item?.calories} Calories
              </p>
              <p className="text-black text-md font-semibold z-1 md:text-sm">
                {item?.title}
              </p>
              <div className="flex items-center gap-6">
                <p className="text-sm text-headingColor font-semibold">
                  <span className="text-sm text-red-500">₹</span> {item?.price}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <img src={NotFound} className="h-340" />
          <p className="text-xl text-red-600 font-semibold my-2">
            Items Not Available
          </p>
        </div>
      )}
    </div>
  );
};

export default RowContainer;
