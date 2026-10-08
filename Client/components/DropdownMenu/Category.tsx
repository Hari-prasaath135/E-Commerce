import React, {useState, useEffect} from 'react'
import { categoryDropDown } from '@/app/data'
const Category = () => {
    const [margin, setMargin] = useState(10);
    const [opacity, setOpacity] = useState(0);
    
    useEffect(() => {
        const timer = setTimeout(() => {
        setMargin(0);
        setOpacity(1);
        }, 5);

        // Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timer);
    }, []);
  return (
    <div style={{
        marginTop: `${margin * 0.25}rem`,
        opacity: opacity,
        transition: 'margin-top 0.2s ease-in-out, opacity 0.3s ease-in-out'
      }} className='xl:min-h-[450px] xl:min-w-[1280px] min-h-[400px] min-w-[1000px] xl:-left-40 z-30 absolute bg-white flex gap-5 rounded-lg drop-shadow-md px-8 py-8'>
        {categoryDropDown.map((each,index)=>
            <div key={index} className='flex-1'>
                <div className='border-b-[1px] border-[#e2ede1] pb-3'>
                <a href={each.catLink.startsWith('/') ? each.catLink : `/categories/${each.catLink}`} className='font-bold text-base text-[#164c3b] hover:text-[#2f8064] transition-colors'>{each.title}</a>
                </div>
                <div className='flex flex-col gap-2 mb-6 mt-4'>
                    {each.subCategories.map((sub,subIndex)=>
                        <a href={sub.link} className='text-[#577265] text-sm hover:text-[#2f8064] transition-colors' key={subIndex}>{sub.title}</a>
                    )}
                </div>
                <a href={each.catLink}><img height={120} width={260} className='rounded-lg object-cover h-[130px] w-full shadow-sm hover:opacity-90 transition-opacity' src={each.imgLink} alt={each.imgAlt}/></a>
            </div>
        )}
    </div>
  )
}

export default Category