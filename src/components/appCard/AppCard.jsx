import React from 'react';
import appImg from "../../assets/spotify.png"
import { FaDownLong } from 'react-icons/fa6';
import { RiDownload2Fill } from 'react-icons/ri';
import { FaStar } from 'react-icons/fa';

const AppCard = ({ singleData }) => {
    const { title, image, ratingAvg } = singleData;
    return (
        <div className='shadow-lg bg-white p-4 rounded-lg hover:scale-105 transition ease-in-out'>
            <figure>
                <img className='w-[336px] h-[336px]' src={appImg} alt="" />
            </figure>
            <div>
                <h3 className='text-xl text-left font-medium text-[#001931] my-3'>{title}</h3>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-1 bg-[#F1F5E8] text-[#00D390] py-1.5 px-2.5 rounded-sm'>
                        <RiDownload2Fill />
                        <p>9M</p>
                    </div>
                    <div className='flex items-center gap-1 bg-[#FFF0E1] text-[#FF8811] py-1.5 px-2.5 rounded-sm'>
                        <FaStar></FaStar>
                        <p>{ratingAvg}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppCard;