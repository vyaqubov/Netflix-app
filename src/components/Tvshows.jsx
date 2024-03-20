import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Row from './Row';
import { Tvtrail, request } from '../assets/data/Requests';
import YouTube from '@u-wave/react-youtube';
import { UserAuth } from '../context/AuthContext';

function Tvshows() {
    const obj = useLoaderData();
    const {PasstoVideo, setVideoTrail} = UserAuth();
    const [trailer, setTrailer] = useState(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {}, 1000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(()=>{
        Tvtrail(obj.id).then(res => {
            const trailer = res.results.map(item => item.key);
            if(trailer){ 
                setVideoTrail(trailer);
                setTimeout(() => { setTrailer(trailer) }, 5000);
            }; 
            if(trailer.length > 0){
                setShow(true);
            }
        })
    },[obj])// eslint-disable-line

    return (
        <div>
            <div className='w-full h-[550px] overflow-hidden hidden md:block text-white'>
                <div className="w-full h-full">
                    {
                        (trailer && trailer.length > 0) ? <YouTube className='h-full w-full' volume={100} modestBranding={true} showRelatedVideos={false} showInfo={false} autoplay muted controls={false} allowFullscreen={false} annotations={false} video={trailer ? trailer[0] : ''} iframeClassName="youtube-container" /> : <img className="w-full h-full object-contain" src={`https://image.tmdb.org/t/p/original/${obj.poster_path}`} alt={obj?.title} />
                    }
                </div>
                <div className='absolute top-[20%] p-4 md:p-8 w-full'>
                    <h1 className='text-3xl md:text-5xl font-bold'>{obj?.name}</h1>
                    {
                        show ? <div className='my-4'> <button onClick={PasstoVideo} className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
                        <button className='border ml-4 text-white border-gray-300 py-2 px-5'>Watch Later</button> </div>: ''
                    }
                    <p className='text-gray-400 text-sm'>Relaesed: {obj?.first_air_date}</p>
                    <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] line-clamp-2 text-gray-200'>{obj?.overview}</p>
                </div>
            </div>
            <div className='md:-mt-[120px] pt-[50px] overflow-x-hidden py-4'>
                <Row RowId="1" title="Popular" url={request.tvpopular} />
                <Row RowId="2" title="Top Rated" url={request.tvtopRated} />
            </div>
        </div>
    )
}

export default Tvshows