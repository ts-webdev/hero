import React from 'react';

const Status = () => {
    return (
        <div className='bg-linear-120 from-[#632ee3] to-[#9f62f2] text-white px-5'>
            <div className='container mx-auto py-20'>
                <h1 className='text-4xl sm:text-5xl font-bold text-center mb-10'>Trusted by Millions, Built for You</h1>
                <div className='text-center flex flex-col gap-10 md:flex-row justify-around'>
                    <div>
                        <h3>Total Downloads</h3>
                        <p className='text-5xl sm:text-7xl font-extrabold my-2 sm:my-4'>29.6M</p>
                        <p>21% More Than Last Month</p>
                    </div>
                    <div>
                        <h3>Total Reviews</h3>
                        <p className='text-5xl sm:text-7xl font-extrabold my-2 sm:my-4'>906k</p>
                        <p>46% More Than Last Month</p>
                    </div>
                    <div>
                        <h3>Active Apps</h3>
                        <p className='text-5xl sm:text-7xl font-extrabold my-2 sm:my-4'>132+</p>
                        <p>31 More Will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Status;