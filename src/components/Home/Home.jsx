import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Shirt from '../shirt/shirt';

const Home = () => {
    const shirts = useLoaderData()
    return (
        <section className="grid grid-cols-[3fr,1fr] gap-10 my-20">
            <div className="grid md:grid-cols-3 gap-10">
                {
                    shirts.map(shirt => <Shirt key={shirt._id} shirt={shirt} />)
                }
            </div>
            <div>

            </div>
        </section>
    );
};

export default Home;