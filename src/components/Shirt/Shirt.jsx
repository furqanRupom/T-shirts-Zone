import React from 'react';

const Shirt = ({shirt,handleCart}) => {
    const {price,picture,name} = shirt
    return (
        <div className="p-4 border-1 shadow rounded-lg mx-auto">
            <img className="h-[250px] mx-auto" src={picture} alt="logo" />
            <h1 className="text-xl font-bold py-3 ">
                name : {name}
            </h1>
            <h4 className="text-lg font-bold">
                price : {price}
            </h4>
            <button onClick={() => handleCart(shirt)} className="font-semibold px-7 py-3 rounded-md bg-slate-900 text-white my-4">
                Buy Now
            </button>
        </div>
    );
};

export default Shirt;