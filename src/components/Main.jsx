import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Trail } from '../assets/data/Requests';
import YouTube from '@u-wave/react-youtube';
import { UserAuth } from '../context/AuthContext';

function Main() {
  let popular = useLoaderData();
  const {PasstoVideo} = UserAuth();
  const [trailer, setTrailer] = useState(null);
  const [pass, setPass] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {}, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    Trail(popular?.id).then(data => {
      const trailer = data.videos?.results.find((video) => video.name === ("Official Trailer" ?? "Final Trailer") || video.name);
      if (trailer) {
        setPass(trailer.key);
        setTimeout(() => { setTrailer(trailer.key) }, 5000);
      }
    })
  }, [popular])

  return (
    <div className='w-full h-[550px] text-white'>
      <div className="w-full h-full">
        {
          trailer ? <YouTube className='h-full w-full' volume={100} modestBranding={true} showRelatedVideos={false} showInfo={false} autoplay muted controls={false} allowFullscreen={false} annotations={false} background="1" video={trailer}/>: <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original/${popular?.backdrop_path}`} alt={popular?.title} />
        }
      </div>
      <div className='absolute top-[20%] p-4 md:p-8 w-full'>
        <h1 className='text-3xl md:text-5xl font-bold'>{popular?.title}</h1>
        <div className='my-4'>
          <button onClick={() => PasstoVideo(pass)} className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
          <button className='border ml-4 text-white border-gray-300 py-2 px-5'>Watch Later</button>
        </div>
        <p className='text-gray-400 text-sm'>Relaesed: {popular?.release_date}</p>
        <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] line-clamp-2 text-gray-200'>{popular?.overview}</p>
      </div>
    </div>
  )
}

export default Main