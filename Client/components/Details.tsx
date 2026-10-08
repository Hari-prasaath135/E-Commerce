"use client"
import { currentEvent, featuresSec, testimonial } from '@/app/data'
import React, { useState } from 'react'

const Details = () => {
    const [hover, sethover] = useState<number | null>(null);
  return (
    <div className='flex w-full flex-wrap justify-center mt-5 gap-8'>
        <div className='eco-banner rounded-xl w-[320px] min-h-[375px] p-8 flex flex-col justify-center gap-5'>
            <p className='eco-section-title text-sm font-bold'>OUR ECO PROMISE</p>
            <h2 className='text-3xl font-semibold'>Better choices for everyday living.</h2>
            <p className='text-sm leading-6'>Explore products thoughtfully presented with sustainability details, so you can shop with more confidence.</p>
            <div className='flex flex-wrap gap-2 text-xs font-semibold'>
                <span className='rounded-full bg-white/70 px-3 py-2'>Reusable</span>
                <span className='rounded-full bg-white/70 px-3 py-2'>Durable</span>
                <span className='rounded-full bg-white/70 px-3 py-2'>Low waste</span>
            </div>
        </div>
        <div>
            <p className='tracking-base text-xl font-semibold text-eblack border-b-[1px] pb-3 border-b-gray-200'>Testimonial</p>
            <div className='rounded-xl w-80 h-[375px] border-[1px] mt-8 flex justify-center items-center flex-col gap-4'>
                <img height={80} width={80} src={testimonial.imgLink} className=' rounded-full'/>
                <p className=' text-silver font-bold text-lg tracking-wide'>{testimonial.name} </p>
                <p className=' text-onyx'>{testimonial.position} </p>
                <img width={30} src='https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/quotes.svg'/>
                <p className='w-[175px] text-center text-silver'>{testimonial.description} </p>
            </div>
        </div>
        <div className='w-[640px] h-[450px] relative rounded-xl justify-center items-center overflow-hidden shadow-sm'>
            <img className='h-full w-full rounded-xl absolute object-cover' alt="Eco Living Festival" src='https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80'/>
            <div className='w-[60%] h-[70%] left-0 right-0 top-0 bottom-0 m-auto absolute bg-white/90 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center gap-2 p-6 shadow-md'>
                <p className={`text-white bg-[#2f8064] px-3 py-1 rounded-full font-bold text-xs text-center tracking-wider uppercase ${currentEvent.isDiscount ? 'block' : 'hidden'}`}>{currentEvent.discount}% OFF ZERO-WASTE SWAPS</p>
                <p className='text-2xl font-bold text-[#164c3b] text-center'>{currentEvent.titleFirst}</p>
                <p className='text-2xl font-bold text-[#2f8064] text-center -mt-1'>{currentEvent.titleLast}</p>
                <p className='text-sm text-[#486355] font-medium'>Starters from only ${currentEvent.starting}</p>
                <a href={currentEvent.eventLink} className='mt-2 bg-[#164c3b] hover:bg-[#2f8064] text-white px-5 py-2 rounded-lg font-semibold text-sm transition-colors shadow'>SHOP SUSTAINABLE</a>
            </div>
        </div>
        <div>
            <p className='tracking-base text-xl font-semibold text-eblack border-b-[1px] pb-3 border-b-gray-200 tracking-wide'>Our Eco Services</p>
            <div className='rounded-xl w-80 h-[375px] border-[1px] p-8 mt-8 flex justify-center flex-col gap-4'>
                {featuresSec.map((each,index)=>
                    <a key={index} href='/our-services' onMouseEnter={()=>sethover(index)} onMouseLeave={()=>sethover(null)} className='flex justify-start items-center gap-5'>
                    <div className='w-[40px] h-[40px] flex items-center justify-center text-[#2f8064]'><i className={`${each.icon} ${hover==index ? 'text-[#164c3b] scale-110' : 'text-[#2f8064]'} transition-transform`}></i></div>
                    <div>
                        <p className='font-semibold tracking-wide text-xs text-[#20352e]'>{each.title}</p>
                        <p className='text-xs tracking-wide text-[#65786f]'>{each.description}</p>
                    </div>
                    </a>
                )}
            </div>
        </div>
    </div>
  )
}

export default Details