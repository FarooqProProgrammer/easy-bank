import React from 'react'
import { BiMoney } from "react-icons/bi"
import CardComponent from '../../common/CardComponent'
import { RiBillLine } from "react-icons/ri"
import { AiOutlineMobile } from "react-icons/ai"


export default function EasyCard() {
    return (
        <div className='w-full bg-gray-100 py-2 px-1 flex justify-center items-center gap-3'>

            <CardComponent icon={BiMoney} text={'Send Money'} />
            <CardComponent icon={RiBillLine} text={'Bill Payments'} />
            <CardComponent icon={AiOutlineMobile} text={'Mobile Packages'} />

        </div>
    )
}
