"use client"
import React, { useEffect, useRef, useState } from 'react'
import TrendingPrimary from './TrendingSec'
import { topDataHandler } from '@/app/api/homeData';
import Loading from '../Loading';
import { fallbackEcoProducts } from '@/app/data';
interface Product {
    productid: number;
    title: string;
    price: number;
    discount: number;
    imglink: string;
    imgalt: string;
    category_name: string;
    maincategory:string;
}
interface data{
    trending:Product[];
    top_rated:Product[];
    new_arrival:Product[];
}
const TrendSection = () => {
    const data = useRef<data>({trending:[],top_rated:[],new_arrival:[]});
    const [loading, setloading] = useState(true);
    async function sync(){
        const res = await topDataHandler();
        if (res.status === 200 && res.data?.data?.trending?.length > 0) {
            data.current = res.data.data;
        } else {
            const mapped = fallbackEcoProducts.map(p => ({
                productid: p.productid,
                title: p.title,
                price: parseFloat(p.price),
                discount: parseFloat(p.discount),
                imglink: p.images.imglink,
                imgalt: p.images.imgalt,
                category_name: p.category,
                maincategory: p.maincategory
            }));
            data.current = {
                trending: mapped.slice(0, 8),
                top_rated: mapped.slice(4, 12).concat(mapped.slice(0, 2)),
                new_arrival: mapped.slice(2, 10)
            };
        }
        setloading(false);
    }
    useEffect(() => {
      sync();
    }, [])
    
  return (
    <div className='flex-wrap xl:w-[100%] w-auto flex justify-center'>
            <div className='sm:ml-4'>
                    <p className='border-b-[1px] font-semibold text-lg leading-[50px] '>New Arrivals</p>
                    <div className='flex max-w-[310px] overflow-x-auto snap-x snap-mandatory'>
                        <div className='snap-center relative'>
                        {loading && <div className='w-[310px] h-[450px]'>{loading && <div className='absolute left-0 right-8 top-20 z-50'><Loading/></div>}</div> }
                            <TrendingPrimary data={data.current.new_arrival.slice(0,4)} isSecondary={false}/>
                        </div>
                        <div className='snap-center relative'>
                        {loading && <div className='w-[310px] h-[450px]'>{loading && <div className='absolute left-0 right-8 top-20 z-50'><Loading/></div>}</div> }
                            <TrendingPrimary data={data.current.new_arrival.slice(4)} isSecondary={true}/>
                        </div>
                    </div>
            </div>
            <div className='sm:ml-4 font-semibold text-[18px]'>
                    <p className='border-b-[1px] leading-[50px] '>Trending</p>
                    <div className='flex max-w-[310px] overflow-x-auto snap-x snap-mandatory'>
                        <div className='snap-center relative'>
                        {loading && <div className='w-[310px] h-[450px]'>{loading && <div className='absolute left-0 right-8 top-20 z-50'><Loading/></div>}</div> }
                            <TrendingPrimary data={data.current.trending.slice(0,4)} isSecondary={false}/>
                        </div>
                        <div className='snap-center relative'>
                        {loading && <div className='w-[310px] h-[450px]'>{loading && <div className='absolute left-0 right-8 top-20 z-50'><Loading/></div>}</div> }
                            <TrendingPrimary data={data.current.trending.slice(4)} isSecondary={true}/>
                        </div>
                    </div>
            </div>
            <div className='sm:ml-4 font-semibold text-[18px]'>
                    <p className='border-b-[1px] leading-[50px] '>Top Rated</p>
                    <div className='flex max-w-[310px]  overflow-x-auto snap-x snap-mandatory'>
                        <div className='snap-center relative'>
                        {loading && <div className='w-[310px] h-[450px]'>{loading && <div className='absolute left-0 right-8 top-20 z-50'><Loading/></div>}</div> }
                            <TrendingPrimary data={data.current.top_rated.slice(0,4)} isSecondary={false}/>
                        </div>
                        <div className='snap-center relative'>
                            {loading && <div className='w-[310px] h-[450px]'>{loading && <div className='absolute left-0 right-8 top-20 z-50'><Loading/></div>}</div> }
                            <TrendingPrimary data={data.current.top_rated.slice(4)} isSecondary={true}/>
                        </div>
                    </div>
            </div>
        </div>
  )
}

export default TrendSection