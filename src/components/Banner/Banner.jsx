import React from 'react';
import BannerImg from '../../assets/book1.png';

const Banner = () => {
    return (
        <div className='flex justify-between items-center bg-[#1313130D] p-32 rounded-3xl'>
            <div className='p-10'>
                <h1 className='text-6xl font-bold text-[#131313]'>Books to freshen up <br /> your bookshelf</h1>
                <button className='btn bg-[#23BE0A] text-[#FFFFFF] text-xl mt-12'>Load More</button>
            </div>
            <div className='h-[394px]'>
                <img className='h-full' src={BannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;