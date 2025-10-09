import React, { useState } from 'react';
import { useParams } from 'react-router';
import useAppData from '../../hooks/useAppData';
import download from '../../assets/icon-downloads.png'
import ratingsImg from '../../assets/icon-ratings.png'
import review from '../../assets/icon-review.png'
import { storeData } from '../../utilities/utilities';
import NumberAbbreviate from 'number-abbreviate';
import { Bounce, toast } from 'react-toastify';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const AppDetails = () => {

    const [installBtn, setInstallBtn] = useState(true)

    const { id } = useParams()
    const { appData, loading } = useAppData();
    const appDetailsData = appData.find(d => d.id === Number(id))
    if (loading) {
        return <p>Loading...</p>
    }

    const { image, title, companyName, size, description, downloads, ratingAvg, reviews, ratings } = appDetailsData
    const handleInstall = (id) => {
        storeData(id)
        setInstallBtn(false)
        toast.success(`"${title}" Installed Successfully`, {
            position: "top-center",
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

    const numAbbreviate = new NumberAbbreviate(["", "K", 'M', 'B', "T"])

    return (
        <div className='bg-[#d2d2d240]'>
            <div className='pt-20 pb-10 container mx-auto'>
                <div className='flex items-center  gap-10'>
                    <img src={image} alt="" />
                    <div className='grow'>
                        <h3 className='text-3xl font-bold text-[#001931]'>{title}</h3>
                        <p className='my-1 text-[#627382]'>Developed by <span className='text-transparent font-bold bg-clip-text bg-linear-120 from-[#632ee3] to-[#9f62f2]'>{companyName}</span></p>
                        <hr className='border-gray-300' />
                        <div className='flex gap-5'>
                            <div className='mt-7 mr-10'>
                                <img src={download} />
                                <p className='my-1'>Downloads</p>
                                <p className='text-4xl font-bold text-[#001931]'>{numAbbreviate.abbreviate(downloads)}</p>
                            </div>
                            <div className='mt-7 mr-10'>
                                <img src={ratingsImg} />
                                <p className='my-1'>Average Ratings</p>
                                <p className='text-4xl font-bold text-[#001931]'>{ratingAvg}</p>
                            </div>
                            <div className='mt-7 mr-10'>
                                <img src={review} />
                                <p className='my-1'>Total Reviews</p>
                                <p className='text-4xl font-bold text-[#001931]'>{numAbbreviate.abbreviate(reviews)}</p>
                            </div>
                        </div>
                        {
                            installBtn ?
                                <button onClick={() => handleInstall(id)} className='btn bg-[#00D390] text-white mt-7'>Install Now ({size}MB)</button> :
                                <button disabled className='btn bg-[#00D390] text-white mt-7'>Installed</button>
                        }
                    </div>
                </div>
                <hr className='border-gray-300 mt-10' />
                <div className='w-full h-[25rem] my-10'>
                    <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart
                            layout="vertical"
                            width={500}
                            height={400}
                            data={ratings}
                            margin={{
                                top: 20,
                                right: 20,
                                bottom: 20,
                                left: 20,
                            }}
                        >
                            <XAxis type="number" />
                            <YAxis dataKey="name" type="category" />
                            <Tooltip />
                            <Bar dataKey="count" barSize={35} fill="#FF8811" />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
                <hr className='border-gray-300 mt-10' />
                <div className='py-10'>
                    <h3 className='text-2xl font-semibold text-[#001931]'>Description</h3>
                    <p className='text-[#627382]'>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;