import React from "react";


const Cart = ({ cart, removeCart}) => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center">{cart.length}</h1>
      <div>
        {cart.map((shirt) => (
          <div
            key={shirt._id}
            className="shadow p-3 rounded flex justify-between items-center"
          >
            <p className="text-xl font-bold">{shirt.name}</p>
            <button
              onClick={() => removeCart(shirt._id)}
              className="font-semibold px-7 py-3 rounded-md bg-slate-900 text-white my-4"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
