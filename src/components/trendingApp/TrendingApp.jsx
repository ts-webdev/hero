import React from 'react';
import AppCard from '../appCard/AppCard';
import { Link } from 'react-router';
import Loading from '../loading/Loading';

const TrendingApp = ({data}) => {
    

    return (
        <div className='container mx-auto py-20'>
            <h2 className='text-[#001931] text-5xl font-bold text-center'>Trending Apps</h2>
            <p className='text-[#627382] text-center mt-3'>Explore All Trending Apps on the Market developed by us</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 px-5'>
                {
                    data.map(singleData => <AppCard key={singleData.id} singleData={singleData}></AppCard>)
                }
            </div>
            <div className='flex justify-center mt-8'>
                <Link to={'/apps'}><button className="btn bg-linear-120 from-[#632ee3] to-[#9f62f2] text-white flex items-center px-7">Show All</button></Link>
            </div>
        </div>
    );
};

export default TrendingApp;