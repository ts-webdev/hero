import React from 'react';
import errImage from '../../assets/App-Error.png'
import { Link, Navigate } from 'react-router';

const AppNotFound = () => {
    return (

        <div className='bg-[#d2d2d240] flex justify-center items-center py-20 px-5'>
            <div className='flex flex-col items-center'>
                <img src={errImage} alt="" />
                <h1 className='text-3xl sm:text-5xl font-semibold mt-5 text-center'>Oops, page not found!</h1>
                <p className='text-[#627382] my-3 text-center'>The page you are looking for is not available.</p>
                <Link onClick={()=> Navigate(-1)}><button className="btn bg-linear-120 from-[#632ee3] to-[#9f62f2] text-white flex items-center px-7">Go Back!</button></Link>
            </div>
        </div>

    );
};

export default AppNotFound;