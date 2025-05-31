import React from 'react';

interface SectionType {
    title:string;
    subTitle:string;
    description:string;
}

const TitleSection = ({title,subTitle,description}:SectionType) => {
  return (
    <div className='mb-8'>
        <div className='flex items-center mb-3'>
            <div className='mr-2 bg-[#8a2319] h-[2px] w-[30px]'/>
            <span className='text-[14px] font-semibold text-black/60'>{subTitle}</span>
        </div>
        <h1 className='text-[44px] font-semibold mb-3 text-black/90 max-w-[500px] leading-[60px]'>
            {title}
        </h1>
        <p className='text-black/70 text-[16px] max-w-[500px]'>{description}</p>
    </div>
  )
}

export default TitleSection