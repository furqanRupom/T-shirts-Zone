import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const shirts = useLoaderData()
    return (
        <div>
            our home page {shirts.length}
        </div>
    );
};

export default Home;