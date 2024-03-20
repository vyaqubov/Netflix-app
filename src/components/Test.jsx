import React from 'react'
import { Outlet } from 'react-router-dom';

function Test() {

    return (
        <>
            <div className='h-screen w-full' style={{ background: "url('https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/acf17698-ba1f-4485-b7a7-65b7ed9fceef/AZ-en-20230417-popsignuptwoweeks-perspective_alpha_website_medium.jpg') center/cover" }}>
            <div className='bg-black/60 absolute z-20 top-0 left-0 w-full h-screen'></div>
            </div>
            <Outlet />
        </>
    )
}

export default Test