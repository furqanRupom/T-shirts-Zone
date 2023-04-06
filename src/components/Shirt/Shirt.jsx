import React from 'react';

const Shirt = ({shirt}) => {
    const {price,picture,name} = shirt
    return (
        <div className="p-4 border-4 rounded-lg mx-auto">
            <img className="h-[250px] mx-auto" src={picture} alt="logo" />
            <h1 className="text-xl font-bold py-3 ">
                name : {name}
            </h1>
        </div>
    );
};

export default Shirt;