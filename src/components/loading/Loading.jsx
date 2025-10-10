import React from 'react';
import logo from '../../assets/logo.png'

const Loading = () => {
    return (
        <div className='flex py-30 justify-center px-5'>
            <div className='opacity-50'>
                <p className='text-5xl md:text-7xl font-bold flex gap-5'>L <span className='animate-spin'><img className='w-[2.5rem] md:w-[5rem]' src={logo} /></span> ading...</p>
            </div>
        </div>
    );
};

export default Loading;