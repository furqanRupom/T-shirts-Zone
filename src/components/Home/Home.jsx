import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Shirt from "../Shirt/Shirt";
import Cart from "../Cart/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const shirts = useLoaderData();
  const [cart, setCart] = useState([]);
  const handleCart = (shirts) => {
    const newCart = [...cart, shirts];
    const isAdded = cart.some((exists) => exists._id === shirts._id);
    if (!isAdded) {
      setCart(newCart);
    } else {
      toast("you can add one shirts");
    }
  };
  const removeCart = (id) => {
    const selectedShirt = cart.filter((cd) => cd._id !== id);
    setCart(selectedShirt);
  };

  return (
    <section className="grid grid-cols-[3fr,1fr] gap-10 my-20">
      <div className="grid md:grid-cols-3 gap-10">
        {shirts.map((shirt) => (
          <Shirt key={shirt._id} shirt={shirt} handleCart={handleCart} />
        ))}
      </div>
      <div>
        <Cart cart={cart} removeCart={removeCart}></Cart>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
};

export default Home;
