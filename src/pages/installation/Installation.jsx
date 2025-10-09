import React, { useEffect, useState } from 'react';
import useAppData from '../../hooks/useAppData';
import { getStoredData, removeStoredData } from '../../utilities/utilities';
import InstalledApp from '../../components/installedApp/InstalledApp';
import Loading from '../../components/loading/Loading';
import { IoMdArrowDropdown } from 'react-icons/io';

const Installation = () => {
    const { appData, loading } = useAppData()
    const [storedId, setInstalledApp] = useState([])
    const [sort, setSrot] = useState('')
    const [allInstalledData, setAllInstalledData] = useState([])
    // console.log(allInstalledData)

    const handleUninstall = (id) => {
        removeStoredData(id)
        const appId = getStoredData()
        const convertedAppId = appId.map(id => Number(id))
        setInstalledApp(convertedAppId)
    }

    useEffect(() => {
        const appId = getStoredData()
        const convertedAppId = appId.map(id => Number(id))
        setInstalledApp(convertedAppId)
    }, [])

    useEffect(() => {
        const installedApp = appData.filter(singleApp => storedId.includes(singleApp.id))
        console.log(installedApp)
        setAllInstalledData(installedApp)
    }, [appData, storedId])

    if (loading) {
        return <Loading></Loading>
    }

    const handleSort = (type) => {
        setSrot(type)

        if(type === 'High to Low'){
            const sortByHight = [...allInstalledData].sort((a,b)=>  b.downloads - a.downloads)
            setAllInstalledData(sortByHight)
        }

        if(type === 'Low to High'){
            const sortByLow = [...allInstalledData].sort((a,b)=>  a.downloads - b.downloads )
            setAllInstalledData(sortByLow)
        }

    }
    return (
        <div className='bg-[#d2d2d240]'>
            <div className='container mx-auto py-20'>
                <h1 className='text-4xl font-bold text-center text-[#001931]'>Your Installed Apps</h1>
                <p className='text-[#627382] text-center'>Explore All Trending Apps on the Market developed by us</p>
                <div className='flex justify-between items-center mt-10 mb-2'>
                    <p className='text-2xl font-semibold text-[#001931]'>({allInstalledData.length})Apps Found</p>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn m-1 flex items-center">{sort ? sort : 'Sort By Size'} <IoMdArrowDropdown size={24} />
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li onClick={() => handleSort('High to Low')}><a>High to Low</a></li>
                            <li onClick={() => handleSort('Low to High')}><a>Low to High</a></li>
                        </ul>
                    </div>
                </div>
                <div className='space-y-3'>
                    {
                        allInstalledData.map(app => <InstalledApp key={app.id} app={app} handleUninstall={handleUninstall}></InstalledApp>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Installation;