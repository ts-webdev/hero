import React from 'react';
import useAppData from '../../hooks/useAppData';
import { getStoredData } from '../../utilities/utilities';
import InstalledApp from '../../components/installedApp/InstalledApp';

const Installation = () => {
    const { appData, loading } = useAppData()

    if (loading) {
        return <p>Loading...</p>
    }

    const appId = getStoredData()
    const convertedAppId = appId.map(id => Number(id))

    const installedApp = appData.filter(singleApp => convertedAppId.includes(singleApp.id))


    // 
    // console.log(installedApp)
    return (
        <div className='bg-[#d2d2d240]'>
            <div className='container mx-auto py-20'>
                <h1 className='text-4xl font-bold text-center text-[#001931]'>Your Installed Apps</h1>
                <p className='text-[#627382] text-center'>Explore All Trending Apps on the Market developed by us</p>
                <div className='flex justify-between mt-10'>
                    <p className='text-2xl font-semibold text-[#001931]'>({installedApp.length})Apps Found</p>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn m-1">Click  ⬇️</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                </div>
                <div className='space-y-3'>
                    {
                        installedApp.map(app => <InstalledApp key={app.id} app={app}></InstalledApp>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Installation;