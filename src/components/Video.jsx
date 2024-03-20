import React, { useEffect, useState } from 'react'
import { UserAuth } from '../context/AuthContext'
import YouTube from '@u-wave/react-youtube';
import { Link, useLocation } from 'react-router-dom';
import { Trail } from '../assets/data/Requests';


function Video() {
    const {videoTrail} = UserAuth();
    const [key, setkey] = useState("")
    const [height, setHeight] = useState('h-screen');
    const location = useLocation();

    useEffect(()=>{
      if(typeof videoTrail === 'object') {
        Trail(videoTrail?.id).then(data => {
          const trailer = data.videos?.results.find((video) => video.name === ("Official Trailer" ?? "Final Trailer") || video.name);
          if (trailer) {
            setkey(trailer.key);
          }
        })
      }else{
          setkey(videoTrail)
      }
    },[videoTrail])

    useEffect(()=>{
      location.pathname === "/video" ? setHeight('h-screen') : setHeight('h-full');
      window.scrollTo({top: 0,behavior: 'smooth'});
    },[])
  return (
    <div className={`${height} w-full`}>
        <div className='absolute right-[10px] top-[10px]'>
            <button className='text-white bg-red-600 py-2 px-4 rounded'><Link to='/home'>Back to Home</Link></button>
        </div>
        <YouTube className='h-full w-full' volume={100} modestBranding={true} showRelatedVideos={false} showInfo={false} autoplay allowFullscreen={false} annotations={false} video={key ? key || key[0] : ''} iframeClassName="youtube-container" />
    </div>
  )
}

export default Video