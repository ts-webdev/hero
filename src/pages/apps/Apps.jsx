import React, { useEffect, useState } from 'react';
import useAppData from '../../hooks/useAppData';
import AppCard from '../../components/appCard/AppCard';
import { Link } from 'react-router';
import Loading from '../../components/loading/Loading';

const Apps = () => {
    const { appData, loading } = useAppData();
    const [search, setSearch] = useState('')
    const [searchLoading, setSearchLoading] = useState(false)
    const [filteredData, setFilteredData] = useState([])

    useEffect(() => {
        setFilteredData(appData)
    }, [appData])


    const handleInput = (e) => {
        const inputValue = e.target.value;
        setSearch(inputValue)
        setSearchLoading(true)

        setTimeout(() => {
            const term = search.trim().toLocaleLowerCase()
            const searchData = term ? appData.filter(matchData => matchData.title.toLocaleLowerCase().includes(term)) : appData

            setFilteredData(searchData)
            setSearchLoading(false)
        }, 400)

    }

    const handleShowAll = () => {
        setSearch('')
        setFilteredData(appData)
    }

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='bg-[#d2d2d240]'>
            <div className='container mx-auto px-5 py-20'>
                <h1 className='text-4xl font-bold text-center text-[#001931]'>Our All Applications</h1>
                <p className='text-[#627382] text-center mt-2'>Explore All Apps on the Market developed by us. We code for Millions</p>
                <div className='flex flex-col gap-5 sm:gap-0 sm:flex-row items-center justify-between mt-10'>
                    <p className='text-2xl font-semibold text-[#001931]'>({filteredData.length}) Apps Found</p>
                    <label>
                        <input value={search} onChange={handleInput} type="search" placeholder="Type here" className="input" />
                    </label>
                </div>
                {
                    searchLoading? <Loading></Loading> : filteredData.length === 0 ?
                        <div className='flex flex-col items-center mt-30'>
                            <h4 className='text-4xl md:text-5xl font-bold text-[#001931]'>No Apps found</h4>
                            <button onClick={handleShowAll} className="mt-10 btn bg-linear-120 from-[#632ee3] to-[#9f62f2] text-white flex items-center px-7">Show All</button>
                        </div> :
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10'>
                            {
                                filteredData.map(singleData => <AppCard key={singleData.id} singleData={singleData}></AppCard>)
                            }
                        </div>

                }


            </div>
        </div>
    );
};

export default Apps;