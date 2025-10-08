import React from 'react';
import playStore from '../../assets/playStore.png'
import appStore from '../../assets/appStore.png'
import heroImg from "../../assets/hero.png"

const Banner = () => {
    return (
        <div className='container mx-auto text-center pt-20 px-5'>
            <h1 className=' text-[3.5rem] md:text-[4.5rem] font-bold text-[#001931] text-base/15 md:text-base/20'>We Build <br /> <span className='text-transparent bg-clip-text bg-linear-120 from-[#632ee3] to-[#9f62f2]'>Productive</span> Apps</h1>
            <p className='text-[#627382] mt-5'>
                At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br className='hidden md:block' /> Our goal is to turn your ideas into digital experiences that truly make an impact.
            </p>
            <div className='mt-5 flex flex-col sm:flex-row gap-2 justify-center'>
                <a href="https://play.google.com/">
                    <button className='btn sm:w-auto w-2/3 border bg-white hover:bg-gray-100 text-lg font-semibold'>
                        <img className='w-6' src={playStore} alt="" />Google Play</button>
                </a>
                <a href="https://www.apple.com/app-store/">
                    <button className='btn sm:w-auto w-2/3 border bg-white hover:bg-gray-100 text-lg font-semibold'><img className='w-6' src={appStore} alt="" />App Store</button>
                </a>
            </div>
            <div className='mt-10 flex justify-center'>
                <img className='w-[923px]' src={heroImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;