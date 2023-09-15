import React from 'react'
import AutocompleteAddress from './AutocompleteAddress'

function Booking() {
    const screenHeight = globalThis.innerHeight;
  return (
    <>
    <div className='p-5'>
        <h2 className='text-[20px] font-semibold'>Booking</h2>
        <div className='border-[2px] p-5 rounded-lg border-black ' style={{height:screenHeight}}>
        <AutocompleteAddress/>
        </div> 
    </div>
    </>
  )
}

export default Booking 