import React from 'react'

export default function DebitCard() {
    return (
        <div className='w-full flex flex-col pb-16 justify-start items-start gap-2 px-2 py-2'>
            <h2 className='text-xs'>Gey your EasyBank Debit Card</h2>
            <div className='w-full flex justify-between items-center px-2'>
                <div className='w-[120px] p-3 h-[130px] rounded-md flex flex-col justify-between items-start gap-2 bg-teal-700'>
                    <div className='flex flex-col justify-start items-start gap-2'>
                        <p className='text-white text-xs'>Online Card</p>
                        <p className='text-xs text-yellow-400'>Only for Online Payments</p>
                    </div>

                    <button className='text-xs px-3 py-1 rounded-md  bg-green-700 text-white'>Manage Card</button>


                </div>
                <div className='w-[120px] p-3 h-[130px] rounded-md flex flex-col justify-between items-start gap-2 bg-black'>
                    <div className='flex flex-col justify-start items-start gap-2'>
                        <p className='text-white text-xs'>Online Card</p>
                        <p className='text-xs text-yellow-400'>Only for Online Payments</p>
                    </div>

                    <button className='text-xs px-3 py-1 rounded-md  bg-yellow-600 text-white'>Manage Card</button>
                </div>
            </div>
        </div>
    )
}
