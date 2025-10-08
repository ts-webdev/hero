import React, { useState } from 'react';
import useAppData from '../../hooks/useAppData';
import AppCard from '../../components/appCard/AppCard';

const Apps = () => {
    const { appData } = useAppData();

    const [search, setSearch] = useState('')
    const term = search.trim().toLocaleLowerCase()
    const searchData = term? appData.filter(matchData => matchData.title.toLocaleLowerCase().includes(term)) : appData
    return (
        <div className='bg-[#d2d2d240]'>
            <div className='container mx-auto py-20'>
                <h1 className='text-4xl font-bold text-center text-[#001931]'>Our All Applications</h1>
                <p className='text-[#627382] text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>
                <div className='flex justify-between mt-10'>
                    <p className='text-2xl font-semibold text-[#001931]'>({searchData.length})Apps Found</p>
                    <label>
                        <input value={search} onChange={(e)=> setSearch(e.target.value)} type="search" placeholder="Type here" className="input" />
                    </label>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 px-5'>
                    {
                        searchData.map(singleData => <AppCard key={singleData.id} singleData={singleData}></AppCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Apps;