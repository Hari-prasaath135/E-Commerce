import React, { useLayoutEffect, useRef, useState } from 'react'
import Loading from './Loading';
import articlesDataHandler from '@/app/api/articleData';
import formatDate from '@/app/api/dateConvert';
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { fallbackEcoArticles } from '@/app/data';
interface Article {
  article_id: number;
  category: string;
  title: string;
  imglink: string;
  imgalt: string;
  author: string;
  published_date: string;
  content: string;
}
const Tabs = () => {
  const [loading, setloading] = useState(true);
  const data = useRef<Article[]>([]);
  const [dialog, setdialog] = useState(false);
  const selectedData = useRef<Article>({article_id:0,category:'',title:'',imglink:'',imgalt:'',author:'',published_date:'',content:''});
  async function fetchData(){
    const response = await articlesDataHandler();
    switch (response.status) {
      case 200:
        if (response.data?.data && response.data.data.length > 0) {
          data.current = response.data.data;
        } else {
          data.current = fallbackEcoArticles;
        }
        setloading(false);
        break;
      default:
        data.current = fallbackEcoArticles;
        setloading(false);
        break;
    }
  }
  useLayoutEffect(() => {
    fetchData();
  }, [])
  return (
    <>
    <Dialog open={dialog} onClose={() => setdialog(false)} className="relative z-50">
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-5xl space-y-4 overflow-y-auto max-h-screen border bg-white p-8 rounded-xl shadow-2xl">
              <DialogTitle className="font-bold text-center text-2xl text-[#164c3b]">{selectedData.current.title}</DialogTitle>
              <img src={selectedData.current.imglink} className='mx-auto rounded-xl font-semibold max-h-[420px] object-cover' width={720} alt={selectedData.current.imgalt}/>
              <p className='font-medium text-end text-sm text-[#466957]'>By <span className='rounded-lg px-2.5 py-1 bg-[#e8f4eb] text-[#24634f] font-semibold'>{selectedData.current.author}</span></p>
              <Description className='text-center bg-[#f7faf6] text-[#20352e] border border-[#d8e8da] rounded-xl p-4 tracking-wide text-sm leading-relaxed'>{selectedData.current.content}</Description>
              <div className="flex justify-center gap-4">
              <button className='border-[1.5px] border-[#2f8064] text-[#2f8064] hover:bg-[#2f8064] transition-colors duration-300 hover:text-white py-2 px-6 rounded-xl font-medium' onClick={() => setdialog(false)}>Close</button>
              </div>
          </DialogPanel>
          </div>
      </Dialog>
    <div className='w-[80%] h-auto gap-5 m-5 flex flex-col items-center mt-10 mb-10 relative'>
      <div className='w-full border-b-[1px] pb-3 mb-4'>
        <p className='text-xl font-semibold text-[#164c3b] tracking-wide'>Sustainability Journal & Insights</p>
      </div>
      {loading && <div className='w-full h-[300px]'>{loading && <div className='absolute left-0 right-0 z-50'><Loading/></div>}</div> }
      <div className='flex overflow-x-auto gap-5 snap-mandatory snap-x relative w-full pb-2'>
          {data.current.map((each, index) => (
            <div key={index} className='flex flex-col gap-4 min-w-[300px] max-w-[320px] snap-center bg-white border border-[#e2ece0] rounded-xl p-3 hover:shadow-md transition-shadow'>
                <img width={300} onClick={()=>{selectedData.current=each;setdialog(true)}} className='rounded-lg cursor-pointer h-[180px] object-cover' src={each.imglink} alt={each.title} />
              <div className='flex flex-col'>
                <p className='text-[#2f8064] text-xs font-semibold uppercase tracking-wider'>{each.category}</p>
                <p className='font-semibold text-base text-[#1b3d2f] mb-1.5 cursor-pointer line-clamp-2 hover:text-[#2f8064]' onClick={()=>{selectedData.current=each;setdialog(true)}}>{each.title}</p>
                <p className='text-silver text-xs tracking-wide'>By <span className='text-[#2d4d3d] font-medium'>{each.author}</span> / {formatDate(each.published_date)}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
    </>
  );
};

export default Tabs;

