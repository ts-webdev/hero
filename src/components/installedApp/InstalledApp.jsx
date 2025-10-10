import NumberAbbreviate from 'number-abbreviate';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { RiDownload2Fill } from 'react-icons/ri';
import { Bounce, toast } from 'react-toastify';

const InstalledApp = ({ app, handleUninstall }) => {
    let numAbbreviate = new NumberAbbreviate(["", "K", 'M', 'B', "T"])


    const handleAlert = () => {
        toast.warn(`"${app.title}" Uninstalled`, {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }

    return (
        <ul className="list bg-base-100 rounded-box shadow-md">
            <li className="list-row items-center">
                <div><img className="size-16 rounded-box" src={app.image} /></div>
                <div>
                    <div className='text-xl font-medium text-[#001931]'>{app.title}</div>
                    <div className='sm:flex gap-3 hidden'>
                        <div className='flex items-center gap-1 text-[#00D390] py-1.5 rounded-sm'>
                            <RiDownload2Fill />
                            <p className=''>{numAbbreviate.abbreviate(app.downloads)}</p>
                        </div>
                        <div className='flex items-center gap-1 text-[#FF8811] py-1.5  rounded-sm'>
                            <FaStar></FaStar>
                            <p>{numAbbreviate.abbreviate(app.reviews)}</p>
                        </div>
                        <div className='flex items-center gap-1 text-[#627382] py-1.5  rounded-sm'>
                            <p>{numAbbreviate.abbreviate(app.size)} MB</p>
                        </div>
                    </div>
                </div>
                <button onClick={() => { handleUninstall(app.id); handleAlert() }} className='btn bg-[#00D390] text-white'>Uninstalled</button>
            </li>
        </ul>
    );
};

export default InstalledApp;