import React from 'react';
import { FaDownLong } from 'react-icons/fa6';
import { RiDownload2Fill } from 'react-icons/ri';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';
import NumberAbbreviate from 'number-abbreviate';

const AppCard = ({ singleData }) => {
    let numAbbreviate = new NumberAbbreviate(["", "K", 'M', 'B', "T"])

    const { title, image, ratingAvg, id, downloads } = singleData;
    return (
        <Link to={`/apps/${id}`}>
            <div className='shadow-lg bg-white p-4 rounded-lg hover:scale-105 transition ease-in-out h-full flex flex-col'>
                <figure className='flex justify-center'>
                    <img src={image} alt="" />
                </figure>
                <div>
                    <h3 className='text-xl text-left font-medium text-[#001931] my-3'>{title}</h3>
                </div>
                <div className='mt-auto'>

                    <div className='flex justify-between'>
                        <div className='flex items-center gap-1 bg-[#F1F5E8] text-[#00D390] py-1.5 px-2.5 rounded-sm'>
                            <RiDownload2Fill />
                            <p>{numAbbreviate.abbreviate(downloads)}</p>
                        </div>
                        <div className='flex items-center gap-1 bg-[#FFF0E1] text-[#FF8811] py-1.5 px-2.5 rounded-sm'>
                            <FaStar></FaStar>
                            <p>{ratingAvg}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;