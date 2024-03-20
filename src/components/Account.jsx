import React from 'react'
import SavedMovies from './SavedMovies'

function Account() {
  return (
    <>
      <div className='w-full text-white'>
        <img className='w-full h-[50vh] object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/acf17698-ba1f-4485-b7a7-65b7ed9fceef/AZ-en-20230417-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />
        <div className='bg-black/60 absolute top-0 left-0 w-full h-[50vh]'></div>
        <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>My saved List</h1>
        </div>
      </div>
      <SavedMovies/>
    </>
  )
}

export default Account