/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { UserPlus } from 'lucide-react';
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import Image from 'next/image';

const Postitem = () => {
    return (
        <div className='bg-slate-600 flex flex-col items-center text-white my-2 p-4 rounded-lg w-full h-fit'>

            <div className='flex justify-between w-full pb-2'>
                <div className='flex justify-center items-center gap-2'>
                    <Image width={100} height={100} src={'/blanckprofile.jpg'} alt="profile" className='rounded-full w-10 h-10' />
                    <div className='flex flex-col'>
                        <span className='text-xl font-semibold'>Baburao Apte</span>
                        <span className='text-sm font-normal'>Borivali, Engineer</span>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <UserPlus className='h-6 w-6 mr-3 cursor-pointer text-blue-300 hover:text-blue-400' />
                </div>
            </div>

            <div className="flex flex-col w-full justify-between items-center border-t border-slate-400 mt-1 pt-1">

                <div className='flex justify-start w-full py-2'>
                    <span>Hello Na Public</span>
                </div>
                <div className=''>
                    <img src={'/food.jpg'} alt="demo" className='w-fit h-fit' />
                </div>
            </div>


            <div className='flex justify-between w-full mt-2 items-center'>
                <div className="flex ml-2 gap-3 md:gap-6">
                    <BsHeart className=' text-2xl md:text-3xl' />
                    <BsHeartFill className='text-2xl md:text-3xl hidden' />
                    <FaRegCommentDots className='text-2xl md:text-3xl' />
                    <IoSend className='text-2xl md:text-3xl' />
                </div>
                <div className="flex mr-2">
                    <FaRegBookmark className='text-2xl md:text-3xl' />
                    <FaBookmark className='text-2xl md:text-3xl hidden' />
                </div>
            </div>

        </div>
    )
}

export default Postitem