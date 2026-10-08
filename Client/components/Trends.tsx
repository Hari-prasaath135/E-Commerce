import React from 'react';
import { topCat } from '@/app/data';

const Trends = () => {
  return (
    <div className='w-[80%] min-w-[300px] h-auto gap-5 m-5 flex justify-center'>
        <div className='flex overflow-x-auto gap-5 snap-proximity snap-x pb-2'>
            {topCat.map((Cat,index)=>
                <div key={index} className='min-w-[300px] mb-2 min-h-[80px] rounded-[12px] border-[1px] border-[#dbe7da] bg-white flex justify-between items-center snap-center hover:shadow-md hover:border-[#2f8064] transition-all duration-200'>
                    <div className='flex flex-row ml-3 items-center justify-center'>
                        <div className='p-[6px] rounded-[10px] bg-[#edf6ee] flex items-center justify-center'>
                            <img className='w-[36px] h-[36px] rounded-md object-cover' src={Cat.imgLink} alt={Cat.name}/>
                        </div>
                            <div className='ml-3'>
                                <p className='text-[13px] font-bold text-[#1b3d2f] tracking-[0.5px]'>{Cat.name}</p>
                                <a href={Cat.showLink} className='text-[13px] font-semibold tracking-[0.5px] text-[#2f8064] hover:text-[#194b39] flex items-center gap-1'>
                                  <span>Explore</span>
                                  <span>&rarr;</span>
                                </a>
                            </div>
                        </div>
                    <div className='h-[60%] mr-4'>
                        <span className='text-[11px] font-medium text-[#2d5843] bg-[#edf6ee] px-2 py-0.5 rounded-full'>{Cat.quantity} items</span>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default Trends