import React, { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { UserAuth } from '../context/AuthContext';
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { nanoid } from 'nanoid';
import {AiOutlineClose} from 'react-icons/ai'

function SavedMovies() {
    const [movies, setMovies] = useState([]);
    const {user} = UserAuth();

    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            if(doc.data()){
                setMovies(doc.data().savedMovies);
            }
        });
      }, [user?.email]);
    
    const slideLeft = ()=>{
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500
    }
    const slideRight = ()=>{
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500
    }

    const movieArr = doc(db, 'users', `${user?.email}`)
    const deleteMovie = async (arg)=>{
        try{
            const newArr = movies.filter(item => item.id !== arg);
            await updateDoc( movieArr, {savedMovies: newArr})
        }catch(error){
            console.log(error);
        }
    }
    return (
        <>
            <h2 className='text-white font-bold md:text-xl p-4'>My Shows</h2>
            <div className="relative flex items-center group">
                <MdChevronLeft onClick={slideLeft} className='bg-white absolute rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} />
                <div id={'slider'} className='w-full h-full whitespace-nowrap overflow-x-scroll scrollbar-hide scroll-smooth'>
                    {
                        movies.map(item => {
                            return <div key={nanoid()} className='p-2 relative cursor-pointer inline-block lg:w-[280px] md:w-[240px] sm:w-[200px] w-[160px]'>
                                <img className='w-full h-[150px] object-cover' src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt="" />
                                <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                                    <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
                                        {
                                            item?.title
                                        }
                                    </p>
                                    <p onClick={() => deleteMovie(item.id)} className='absolute right-0 top-0 p-4'><AiOutlineClose/></p>
                                </div>
                            </div>
                        })
                    }
                </div>
                <MdChevronRight onClick={slideRight} className='bg-white absolute right-0 rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} />
            </div>
        </>
    )
}

export default SavedMovies