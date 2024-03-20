import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { UserAuth } from '../context/AuthContext';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { nanoid } from 'nanoid';
import Movies from './Movies';

function Row({ title, url}) {
    const [cat, setCat] = useState([]);
    const {user} = UserAuth();// eslint-disable-line

    useEffect(() => {
        axios.get(url).then(response => setCat(response.data.results))
    }, [url])
    return (
        <div>
            <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
            <div className='container mx-auto pb-[2px] md:pb-[70px]'>
                <Swiper
                    // install Swiper modules
                    breakpoints={ {
                        // when window width is >= 320px
                        320: {
                          slidesPerView: 2
                        },
                        // when window width is >= 480px
                        480: {
                          slidesPerView: 4
                        },
                        // when window width is >= 640px
                        640: {
                          slidesPerView: 6
                        }
                      }}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={5}
                    slidesPerView={5}
                    navigation
                    pagination={{ clickable: true }}
                >
                    {
                        cat.map(item => <SwiperSlide key={nanoid()}><Movies item={item}/></SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Row