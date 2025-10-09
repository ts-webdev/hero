import React, { useState } from 'react';
import useAppData from '../../hooks/useAppData';
import AppCard from '../../components/appCard/AppCard';
import { Link } from 'react-router';
import Loading from '../../components/loading/Loading';

const Apps = () => {
    const { appData, loading } = useAppData();
    const [search, setSearch] = useState('')
    if (loading) {
        return <Loading></Loading>
    }

    const term = search.trim().toLocaleLowerCase()
    const searchData = term ? appData.filter(matchData => matchData.title.toLocaleLowerCase().includes(term)) : appData

    const handleInput = (e) => {
        setSearch(e.target.value)
    }

    const handleShowAll = () => {
        setSearch('')
    }
    return (
        <div className='bg-[#d2d2d240]'>
            <div className='container mx-auto py-20'>
                <h1 className='text-4xl font-bold text-center text-[#001931]'>Our All Applications</h1>
                <p className='text-[#627382] text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>
                <div className='flex justify-between mt-10'>
                    <p className='text-2xl font-semibold text-[#001931]'>({searchData.length})Apps Found</p>
                    <label>
                        <input value={search} onChange={handleInput} type="search" placeholder="Type here" className="input" />
                    </label>
                </div>
                {
                    searchData.length === 0 ?
                        <div className='flex flex-col items-center mt-30'>
                            <h4 className='text-5xl font-bold text-[#001931]z'>No Apps found</h4>
                            <button onClick={handleShowAll} className="mt-10 btn bg-linear-120 from-[#632ee3] to-[#9f62f2] text-white flex items-center px-7">Show All</button>
                        </div> :
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 px-5'>
                            {
                                searchData.map(singleData => <AppCard key={singleData.id} singleData={singleData}></AppCard>)
                            }
                        </div>

                }


            </div>
        </div>
    );
};

export default Apps;