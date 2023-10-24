import React from 'react'
import DisplayCard from '../../components/DisplayCard'
import EasyCard from '../../components/EasyCard'
import MoreWithEasyPaisa from '../../components/MoreWithEasyPaisa'
import DebitCard from '../../components/DebitCard'

export default function Home() {
  return (
    <div className='overflow-y-auto'>
      <DisplayCard />
      <EasyCard />
      <MoreWithEasyPaisa />
      <DebitCard />
    </div>
  )
}
