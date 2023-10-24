import { IconButton } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineHome, AiOutlineNotification, AiOutlineUser } from "react-icons/ai"
import { CiLocationOn } from "react-icons/ci"

export default function Bottom() {
    return (
        <div className='fixed w-full flex h-[60px] bottom-0 border shadow-lg bg-white'>

            <div className='flex-1 flex flex-col justify-center items-center gap-3 border-r-2 border-gray-200'>
                <IconButton>
                    <AiOutlineHome />
                </IconButton>
            </div>
            <div className='flex-1 flex flex-col justify-center items-center gap-3 border-r-2 border-gray-200'>
                <IconButton>
                    <CiLocationOn />
                </IconButton>
            </div>
            <div className='flex-1 flex flex-col justify-center items-center gap-3 border-r-2 border-gray-200'>
                <IconButton>
                    <AiOutlineUser />
                </IconButton>
            </div>
            <div className='flex-1 flex flex-col justify-center items-center gap-3 border-r-2 border-gray-200'>
                <IconButton>
                    <AiOutlineNotification />
                </IconButton>
            </div>


        </div>
    )
}
