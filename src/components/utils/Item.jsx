import React from 'react'

import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";

const Item = ({ id,
    color,
    shadow,
    title,
    text,
    img,
    btn,
    rating,
    price,}) => {

        console.log(id)
  return (
    <div>
        <div  className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center
         rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}>
            <div>
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
            <div><h1>{price}</h1></div>
            <div>
            <StarIcon className="icon-style w-5 h-5 md:w-4 md:h-4" />
                <h1>{rating}</h1></div>
            <div>
                <button>
                    
              <ShoppingBagIcon className="icon-style text-slate-900" />
                </button>
                <button   type="button"
              className="bg-white/90 blur-effect-theme button-theme px-2 py-1 shadow shadow-sky-200 text-sm text-black">{btn}</button>
            </div>
        </div>
        <div>
        <img
            src={img}
            alt=''
           
          />
        </div>
    </div>
  )
}

export default Item