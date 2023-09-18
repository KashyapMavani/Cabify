'use client';
import React, { useEffect, useState } from 'react'

function AutocompleteAddress() {

   
  const[source, setSource] = useState<any>();
  const[addressList,setAddressLsit]= useState<any>([]);
  
  useEffect(()=>{
    const delayDebounceFn = setTimeout(()=>{
      getAddressList()
    },1000)
    return () => clearTimeout(delayDebounceFn)
  },[source]);

  const getAddressList = async()=>{
    
    const res = await fetch('/api/search-address?q='+source,
    {
      headers:{"content-Type":"application/json",}
    });
    const result = await res.json();
    setAddressLsit(result); 
  }

  return (
    <>
    <div className=''>
        <div className='relative'>
            <label className='text-gray-600 font-semibold'>Where From?</label>
            <input type='text' className='bg-white p-1 border-[2px] border-yellow-600 w-full rounded-lg focus:outline-violet-600'
            value={source}
            onChange={(e)=>setSource(e.target.value)}
            />
            {addressList?.suggestions?
            <div className=' shadow-md p-1 rounded-md absolute w-full bg-white'>
            {addressList?.suggestions.map((item:any,index:number)=>(
              <h2 className='p-3 hover:bg-gray-100 cursor-pointer'
              onClick={()=> {setSource(item.full_address)
              setAddressLsit([])}}>
                {item.full_address}</h2>
            ))}f
            </div>:null}
        </div>
        <div className='mt-3'>
            <label className='text-gray-600 font-semibold'>Where To?</label>
            <input type='text' className='bg-white p-1 border-[2px] border-yellow-600 w-full rounded-lg focus:outline-violet-600'
            />
        </div>
    </div>
    </>
  )
}

export default AutocompleteAddress