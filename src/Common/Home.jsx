import React from 'react'
import Header from '../Layouts/Header'
import { Outlet } from 'react-router-dom'
import Features from './Features'
import FeaturesGrid from './FeaturesGrid'
import UpliftDelivery from './UpliftDelivery'
import CollectiveDelivery from './CollectiveDelivery'
import Framework from './Framework'
import Process from './Process'
import JoinUs from './JoinUs'
import Footer from '../Layouts/Footer'
const Home = () => {
  return (
    <div className='bg-errie-black min-h-screen'>
        <Header/>
        <main className='relative z-0'>
            <Outlet></Outlet>
        </main>
        <Features/>
        <FeaturesGrid/>
        <UpliftDelivery/>
        <CollectiveDelivery/>
        <Framework/>
      <Process/>
      <JoinUs/>
      <Footer/>
    </div>
  )
}

export default Home