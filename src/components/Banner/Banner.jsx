import React from 'react';
import {BannerImg} from '../../assets/books.jpg';

const Banner = () => {
    return (
        <div className='flex justify-between items-center bg-gray-200'>
            <div className='p-10'>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                <button className='btn btn-primary'>Load More</button>
            </div>
            <div>
                <img src={BannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;