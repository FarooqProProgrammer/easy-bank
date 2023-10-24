import React from 'react'
import { AiOutlineMobile, AiFillAppstore, AiFillGift, AiOutlineUser, AiOutlineBook } from "react-icons/ai"
import { BsCashCoin } from "react-icons/bs"
import { MdOutlineEnergySavingsLeaf, MdCastForEducation } from "react-icons/md"
import { FiMoreHorizontal } from "react-icons/fi"

export default function MoreWithEasyPaisa() {
    return (
        <div className='w-full px-1 my-2  overflow-y-auto'>

            <div className='w-full bg-white py-2 px-2 grid grid-cols-4 place-items-center gap-2'>

                <div className='w-full bg-gray-100 p-3 rounded-md flex flex-col justify-center items-center gap-1'>
                    <AiOutlineMobile className='text-green-500' />
                    <p className='text-xs'>Easyload</p>
                </div>
                <div className='w-full bg-gray-100 p-3 rounded-md flex flex-col justify-center items-center gap-1'>
                    <BsCashCoin className='text-green-500' />
                    <p className='text-[10px]'>Easycash</p>
                </div>
                <div className='w-full bg-gray-100 p-3 rounded-md flex flex-col justify-center items-center gap-1'>
                    <AiFillGift className='text-green-500' />
                    <p className='text-[10px]'>Tohfa</p>
                </div>
                <div className='w-full bg-gray-100 p-3 rounded-md flex flex-col justify-center items-center gap-1'>
                    <AiOutlineUser className='text-green-500' />
                    <p className='text-[10px]'>Invite</p>
                </div>
                <div className='w-full bg-gray-100 p-3 rounded-md flex flex-col justify-center items-center gap-1'>
                    <AiFillAppstore className='text-green-500' />
                    <p className='text-[10px]'>Mini App</p>
                </div>
                <div className='w-full bg-gray-100 p-3 rounded-md flex flex-col justify-center items-center gap-1'>
                    <MdOutlineEnergySavingsLeaf className='text-green-500' />
                    <p className='text-[10px]'>Savings</p>
                </div>

                <div className='w-full bg-gray-100 p-3 rounded-md flex flex-col justify-center items-center gap-1'>
                    <AiOutlineBook className='text-green-500' />
                    <p className='text-[10px]'>Savings</p>
                </div>
                <div className='w-full bg-gray-100 p-3 rounded-md flex flex-col justify-center items-center gap-1'>
                    <MdCastForEducation className='text-green-500' />
                    <p className='text-[10px]'>Education</p>
                </div>
                <div className='w-full bg-gray-100 p-3 rounded-md flex flex-col justify-center items-center gap-1'>
                    <FiMoreHorizontal className='text-green-500' />
                    <p className='text-[10px]'>See All</p>
                </div>

                <div className='w-full bg-gray-100 p-3 rounded-md flex flex-col justify-center items-center gap-1'>
                    <AiOutlineMobile className='text-green-500' />
                    <p className='text-xs'>Topups</p>
                </div>

                <div className='w-full bg-gray-100 p-3 rounded-md flex flex-col justify-center items-center gap-1'>
                    <AiOutlineMobile className='text-green-500' />
                    <p className='text-xs'>Topups</p>
                </div>
                <div className='w-full bg-gray-100 p-3 rounded-md flex flex-col justify-center items-center gap-1'>
                    <AiOutlineMobile className='text-green-500' />
                    <p className='text-xs'>Topups</p>
                </div>
                <div className='w-full bg-gray-100 p-3 rounded-md flex flex-col justify-center items-center gap-1'>
                    <AiOutlineMobile className='text-green-500' />
                    <p className='text-xs'>Topups</p>
                </div>
                <div className='w-full bg-gray-100 p-3 rounded-md flex flex-col justify-center items-center gap-1'>
                    <AiOutlineMobile className='text-green-500' />
                    <p className='text-xs'>Topups</p>
                </div>
                <div className='w-full bg-gray-100 p-3 rounded-md flex flex-col justify-center items-center gap-1'>
                    <AiOutlineMobile className='text-green-500' />
                    <p className='text-xs'>Topups</p>
                </div>


            </div>
        </div>
    )
}
