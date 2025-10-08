import React from 'react';
import { FaStar } from 'react-icons/fa';
import { RiDownload2Fill } from 'react-icons/ri';

const InstalledApp = ({ app }) => {
    return (
        <ul className="list bg-base-100 rounded-box shadow-md">
            <li className="list-row items-center">
                <div><img className="size-16 rounded-box" src={app.image} /></div>
                <div>
                    <div className='text-xl font-medium text-[#001931]'>{app.title}</div>
                    <div className='flex gap-3'>
                        <div className='flex items-center gap-1 text-[#00D390] py-1.5 rounded-sm'>
                            <RiDownload2Fill />
                            <p>9M</p>
                        </div>
                        <div className='flex items-center gap-1 text-[#FF8811] py-1.5  rounded-sm'>
                            <FaStar></FaStar>
                            <p>5</p>
                        </div>
                        <div className='flex items-center gap-1 text-[#627382] py-1.5  rounded-sm'>
                            <p>125MB</p>
                        </div>
                    </div>
                </div>
                <button className='btn bg-[#00D390] text-white'>Uninstalled</button>
            </li>
        </ul>
    );
};

export default InstalledApp;