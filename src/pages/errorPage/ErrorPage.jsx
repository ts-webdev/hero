import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import errImage from '../../assets/error-404.png'
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='bg-[#d2d2d240] flex justify-center items-center px-5 py-20'>
                <div className='flex flex-col items-center'>
                    <img src={errImage} alt="" />
                    <h1 className='text-3xl sm:text-5xl font-semibold mt-5'>Oops, page not found!</h1>
                    <p className='text-[#627382] my-3 text-center'>The page you are looking for is not available.</p>
                    <Link><button className="btn bg-linear-120 from-[#632ee3] to-[#9f62f2] text-white flex items-center px-7">Go Back!</button></Link>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;