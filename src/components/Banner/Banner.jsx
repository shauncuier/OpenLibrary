import React from 'react';
import BannerImg from '../../assets/book1.png';

const Banner = () => {
    return (
        <div className='flex justify-between items-center bg-gray-200'>
            <div className='p-10'>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                <button className='btn btn-primary'>Load More</button>
            </div>
            <div className='h-[668px]'>
                <img className='h-full' src={BannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;