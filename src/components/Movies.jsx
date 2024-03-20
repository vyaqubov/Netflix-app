import React, { useRef, useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { useLocation } from 'react-router-dom';
import Nophoto from '../assets/img/no-photo.png';
import { useEffect } from 'react';
import { Trail } from '../assets/data/Requests';
import YouTube from '@u-wave/react-youtube';

function Movies({ item }) {
    const [like, setLike] = useState(false);
    const [miniTrailer, setminiTrailer] = useState('')
    const [pause, setPause] = useState(false)
    const [id, setId] = useState(0);
    const { user, PasstoVideo, handleOpen } = UserAuth();
    const Videoref = useRef();
    const movieId = doc(db, 'users', `${user?.email}`)
    const Urlpath = useLocation();

    async function savedShows() {
        console.log('s');
        if (user?.email) {
            setLike(!like)
            await updateDoc(movieId, {
                savedMovies: arrayUnion({
                    id: item?.id,
                    title: item?.title || item?.name,
                    img: item?.backdrop_path || item?.poster_path
                })
            });
        } else {
            alert('Please log in to saved a movie')
        }
    }

    function MouseEnter(e) {
        if (e.type === "mouseenter") {
            setPause(false)
            Trail(e.target.id).then(res => {
                const trailer = res.videos?.results.find((video) => video.name === ("Official Trailer" ?? "Final Trailer") || video.name);
                if (trailer) {
                    setminiTrailer(trailer.key);
                }
            })
        } else {
            setPause(true);
        }
    }

    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            if (doc.data()) {
                doc.data().savedMovies.map(obj => obj.id === item?.id ? setId(obj.id) : '')
            }
        });
    }, [user?.email]); // eslint-disable-line

    return (
        <>
            <div className='group cursor-pointer relative'>
                <div className={`md:group-hover:hidden `}>
                    {
                        item?.backdrop_path || item?.poster_path ? <img className={`w-full h-[150px] object-cover md:${item?.poster_path ? "h-[150px]" : "h-full"}`} src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path || item?.poster_path}`} alt="" /> : <img src={Nophoto} alt='No_photo' />
                    }
                </div>
                <div onMouseLeave={MouseEnter} onMouseEnter={MouseEnter} className={`hidden h-[200px] scale-0 bg-black group-hover:scale-[1.4] z-[5] overflow-hidden text-white top-[-30px] cursor-pointer w-[250px] absolute md:flex items-end justify-between`}>
                    <div className='flex items-center justify-between w-full p-2 bg-black bg-opacity-[.8]'>
                        <div className='absolute top-0 left-0 w-full h-full -z-10 cursor-pointer '>
                            {
                                miniTrailer !== '' ? <YouTube startSeconds={0} onPause={pause} ref={Videoref} className='cursor-pointer h-[150px] w-full' muted={true} modestBranding={true} showRelatedVideos={false} showInfo={false} autoplay allowFullscreen={false} annotations={false} video={miniTrailer} iframeClassName="youtube-container" /> : <img id={item?.id} className={`cursor-pointer w-full h-full `} src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path || item?.poster_path}`} alt="" />
                            }
                        </div>
                        <p onClick={savedShows}>
                            {
                                item?.id === id ? <FaHeart className='text-2xl text-red-600' /> : like ? <FaHeart className='text-2xl text-red-600' /> : <FaRegHeart className='text-gray-300 text-2xl' />
                            }
                        </p>
                        <p className='white-space-normal text-red-600 italic text-xl font-black md:text-sm text-center'>
                            {
                                Urlpath.pathname === '/tvshows' ? item?.name : item?.title
                            }
                        </p>
                        {
                            miniTrailer !== '' ? <button onClick={() => PasstoVideo(item)} className='bg-red-600 px-4 py-[3px]'>Play</button> : <button onClick={() =>handleOpen(item)} className='bg-red-600 px-4 py-[3px]'>More</button>
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Movies