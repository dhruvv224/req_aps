import React from 'react';
import { Features_grid_data } from '../Data/MockData';
import { motion } from 'framer-motion';

const FeaturesGrid = () => {
  const FeaturedGridSettings = [
    // Your settings array
    
        {
          cardImgPadding: "px-5 pt-5",
          cardContentPadding: "px-6 pb-10",
          cardColSpan: "lg:col-span-1 col-span-full",
          cardFlexCol: "flex-col",
          cardGradientAfter: "after:content-[''] after:bg-grad-theme-135 after:absolute after:w-[213px] after:h-[213px] after:-top-[10%] after:-left-[10%] after:blur-[40px] after:rounded-full",
          cardGradientBefore: "before:content-[''] before:bg-grad-theme-135 before:absolute before:w-[200px] before:h-[200px] before:-bottom-[10%] before:-right-[10%] before:blur-[40px] before:rounded-full",
        },
        {
          cardImgPadding: "px-12 pt-6",
          cardContentPadding: "px-6 pb-10",
          cardColSpan: "lg:col-span-2 col-span-full",
          cardFlexCol: "flex-col",
          cardGradientAfter: "after:content-[''] after:bg-grad-theme-135 after:absolute after:w-[217px] after:h-[217px] after:-top-[10%] after:-right-[5%] after:blur-[30px] after:rounded-full",
          cardGradientBefore: "before:content-[''] before:bg-grad-theme-135 before:absolute before:w-[270px] before:h-[270px] before:bottom-0 before:-left-[10%] before:blur-[30px] before:rounded-full",
        },
        {
          cardImgPadding: "pt-5 px-7",
          cardContentPadding: "px-4 pb-9",
          cardColSpan: "lg:col-span-1 col-span-full",
          cardFlexCol: "flex-col",
          cardGradientAfter: "after:content-[''] after:bg-grad-theme-135 after:absolute after:w-[213px] after:h-[213px] after:-top-[10%] after:-right-[10%] after:blur-[40px] after:rounded-full",
          cardGradientBefore: "before:content-[''] before:bg-grad-theme-135 before:absolute before:w-[213px] before:h-[213px] before:top-[20%] before:-left-[15%] before:blur-[30px] before:rounded-full",
        },
        {
          cardImgPadding: "",
          cardContentPadding: "px-4 pt-7",
          cardColSpan: "lg:col-span-1 col-span-full",
          cardFlexCol: "flex-col-reverse",
          cardGradientAfter: "after:content-[''] after:bg-grad-theme-135 after:absolute after:w-[213px] after:h-[213px] after:top-[35%] after:-right-[30%] after:blur-[30px] after:rounded-full",
          cardGradientBefore: "before:content-[''] before:bg-grad-theme-135 before:absolute before:w-[200px] before:h-[200px] before:top-[-10%] before:-left-[10%] before:blur-[30px] before:rounded-full",
        },
        {
          cardImgPadding: "pt-8 px-12",
          cardContentPadding: "px-4 pb-9",
          cardColSpan: "lg:col-span-1 col-span-full",
          cardFlexCol: "flex-col",
          cardGradientAfter: "after:content-[''] after:bg-grad-theme-135 after:absolute after:w-[213px] after:h-[213px] after:top-[40%] after:-right-[25%] after:blur-[30px] after:rounded-full",
          cardGradientBefore: "before:content-[''] before:bg-grad-theme-135 before:absolute before:w-[200px] before:h-[200px] before:-top-[10%] before:-left-[10%] before:blur-[30px] before:rounded-full",
        }
      
  ];

  return (
    <div className="py-[65px] text-white px-4">
      <h2 className="text-center lg:text-3xl md:text-2xl text-xl font-semibold font-montserrat max-w-[986px] mx-auto">
        Never waste more than a day handing over design requirements with these
        features:
      </h2>
      <div className="max-w-[1200px] mx-auto lg:mt-[65px] mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {Features_grid_data.map(({ id, title, description, image }, index) => {
          const settings = FeaturedGridSettings[index] || {};
          return (
            <motion.div
              key={id}
              className={`bg-grad-theme-135 rounded-3xl overflow-hidden p-[3px] md:min-h-[444px] min-h-auto ${settings.cardColSpan || ''}`}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              whileHover={{ scale: 1.05 }}
            >
              <div
                className={`rounded-3xl overflow-hidden bg-jet flex relative flex-col justify-between items-center h-full lg:gap-y-[26px] md:gap-y-4 ${settings.cardFlexCol || ''} ${settings.cardGradientAfter || ''} ${settings.cardGradientBefore || ''}`}
              >
                <img
                  className={`z-10 relative ${settings.cardImgPadding || ''}`}
                  src={image || 'defaultImagePath.jpg'}
                  alt={title}
                />
                <div
                  className={`gap-y-2 flex flex-col items-center text-center relative z-10 ${settings.cardContentPadding || ''}`}
                >
                  <h4 className="lg:text-2xl md:text-xl text-lg text-white font-montserrat text-center font-semibold">
                    {title}
                  </h4>
                  <p className="text-white lg:text-base text-sm">{description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturesGrid;
