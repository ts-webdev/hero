import React from 'react';
import Banner from '../../components/banner/Banner';
import Status from '../../components/status/Status';

const Home = () => {
    return (
        <div className='bg-[#d2d2d240]'>
            <Banner></Banner>
            <Status></Status>
        </div>
    );
};

export default Home;