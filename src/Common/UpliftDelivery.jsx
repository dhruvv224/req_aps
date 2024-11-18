import React from 'react'
import { UPLIFT_DELIVERY_DATA } from '../Data/MockData'
import { motion } from 'framer-motion'
const UpliftDelivery = () => {
  return (
    <div>
        <section className='lg:py-[65px] py-10 px-4'>
            <div className='max-w-[1200px] mx-auto'>
                <h3 className='text-center text-white font-montserrat lg:text-3xl md:text-2xl text-xl font-semibold'>
                Uplift Your Delivery Squad

                </h3>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-8 lg-gap-6 gap-4 lg:mt-10 md:mt-8 mt-6'>
                    {
                        UPLIFT_DELIVERY_DATA.map((
                            {id,title,icon,description},index
                        )=>{
                            return(
                                <>
                                <motion.div id={id}                   className="bg-grad-theme-135 rounded-3xl p-[3px] md:min-h-[315px] min-h-auto"
 initial={{
                    opacity: 0,
                    y: 80,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    scale: 1.05,
                  }}>
                                    <div className='rounded-3xl bg-jet flex flex-col items-start h-full lg:p-8 md:p-6 p-4'>
                                        <img src={icon}  className='w-12' alt={title} />
                                        <h4 className='lg:text-xl md:text-lg text-base text-white font-montserrat font-semibold mt-5 mb-4'>
                                            {title}
                                        </h4>
                                        <p className='lg:text-base text-sm font-source-sans text-white'>
                                            {description}
                                        </p>
                                    </div>

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

export default UpliftDelivery