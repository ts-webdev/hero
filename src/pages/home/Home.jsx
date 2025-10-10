import React from 'react';
import Banner from '../../components/banner/Banner';
import Status from '../../components/status/Status';
import TrendingApp from '../../components/trendingApp/TrendingApp';
import useAppData from '../../hooks/useAppData';
import Loading from '../../components/loading/Loading';

const Home = () => {
    const { appData, loading } = useAppData()
    const data = appData.slice(0, 8)
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className='bg-[#d2d2d240]'>
            <Banner></Banner>
            <Status></Status>
            <TrendingApp data={data}></TrendingApp>
        </div>
    );
};

export default Home;