import React from "react";

const Cart = ({ cart, removeCart }) => {
  return (
    <>
      {cart.length === 0 && (
        <h1 className="text-lg font-bold text-center">please add your Favourite T Shirts</h1>
      )}
      {
        cart.length > 0 && (
            <h1 className="text-lg font-bold text-center">Great have a nice day sir !!</h1>
        )
      }

      <div className={cart.length > 4 ? 'bg-gradient-to-t from-purple-500 p-5 to-pink-500 text-black rounded-lg' : ""}>
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
