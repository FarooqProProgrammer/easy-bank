import { Icon } from '@chakra-ui/react'
import React from 'react'

export default function CardComponent({ icon , text }) {
    return (
        <div className='px-3 py-4 rounded-md bg-white shadow-xl flex flex-col justify-center items-center gap-2'>
            <Icon as={icon} color={'green.500'} />
            <h4 className='text-[10px]'>{text}</h4>
        </div>
    )
}
