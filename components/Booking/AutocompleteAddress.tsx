import React from 'react'

function AutocompleteAddress() {
  return (
    <>
    <div className=''>
        <div>
            <label className='text-gray-600 font-semibold'>Where From?</label>
            <input type='text' className='bg-white p-1 border-[2px] border-yellow-600 w-full rounded-lg focus:outline-violet-600'/>
        </div>
        <div className='mt-3'>
            <label className='text-gray-600 font-semibold'>Where To?</label>
            <input type='text' className='bg-white p-1 border-[2px] border-yellow-600 w-full rounded-lg focus:outline-violet-600'/>
        </div>
    </div>
    </>
  )
}

export default AutocompleteAddress