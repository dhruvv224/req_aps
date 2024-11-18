import React from 'react'
import { COLLECTIVE_DELIVERY_DATA } from '../Data/MockData'
import { motion } from 'framer-motion'
const CollectiveDelivery = () => {
  return (
    <div>
        <section className='max-w-[1180px] mx-auto lg:py-[65px] py-10 text-white px-4'>
            <div className='text-center'>
                <h3 className='font-montserrat lg:text-xl md:text-lg text-base mb-4'>
                Behind Every Great Delivery

                </h3>
                <h3 className='lg:text-3xl md:text:2xl text-xl font-montserrat font-semibold'>
                The Collective Delivery Squad


                </h3>
                <div className='lg:mt-[90px] md:mt-16 mt-12 grid lg:grid-cols-3 md:gird-cols-2 grid-cols-1 lg:gap-y-[70px] gap-y-12 lg:gap-x-[100px] md:gap-x-16 gap-x-12'>
                    {
                        COLLECTIVE_DELIVERY_DATA.map(({id,title,icon,description},index)=>{
                            return(
                                <>
<motion.div key={id} className='d-flex flex-col justify-center items-center text-center' initial={{
    opacity:0,y:80
}} whileInView={{
    opacity: 1,
    y: 0,
  }} transition={{
    duration: 0.5,
    ease: "easeInOut",
  }} whileHover={{
    scale: 1.05,
  }}>
<img src={icon} className='w-[82px] h-[82px] mx-auto'/>
<h4 className='font-montserrat lg:mt-10 md:mt-6 mt-4 lg:mg-4 mb-2 font-semibold lg:text-xl md:text-lg text-base'>
    {title}
</h4>
<p className="lg:text-base text-sm font-source-sans">
                {description}
              </p>
</motion.div>
                                </>
                            )
                        })
                    }

                </div>

            </div>
        </section>
    </div>
  )
}

export default CollectiveDelivery