import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Shirt from '../Shirt/Shirt';

const Home = () => {
    const shirts = useLoaderData()
    const [cart,setCart] = useState([])
    const handleCart = (shirts) =>{
        const newCart = [...cart,shirts]
        setCart(newCart)
    }
    console.log(cart)
    return (
        <section className="grid grid-cols-[3fr,1fr] gap-10 my-20">
            <div className="grid md:grid-cols-3 gap-10">
                {
                    shirts.map(shirt => <Shirt key={shirt._id} shirt={shirt} handleCart={handleCart} />)
                }
            </div>
            <div>

            </div>
        </section>
    );
};

export default Home;