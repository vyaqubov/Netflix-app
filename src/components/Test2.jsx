import React from 'react';
import Tv from '../assets/img/tv.png';
import Mobile from '../assets/img/mobile.jpg';
import BoxShot from '../assets/img/boxshot.png';
import Watchp from '../assets/img/device-pile.png';
import Kids from '../assets/img/kids.png';
import DownloadIcon from '../assets/img/download-icon.gif';
import Evideo from '../assets/video/video.m4v';
import Wvideo from '../assets/video/video2.m4v';
import { HiDownload } from "react-icons/hi";
import FrequentlyUsed from './FrequentlyUsed';

function Test2() {
  return (
    <>
      <div className='border-t-[10px] border-[#232323]'>
        <div className='z-50 top-0 absolute flex justify-center items-center h-full w-full font-bold'>
          <div className="text-white text-center">
            <h1 className='text-3xl md:text-4xl'>Unlimited movies, TV shows, and more</h1>
            <p className='text-lg mt-4'>Watch anywhere. Cancel anytime.</p>
          </div>
        </div>
        <div className="text-center container flex flex-col mx-auto py-16 text-white md:text-left md:items-center  md:flex-row">
          <div className='md:basis-[58%]'>
            <h2 className='text-4xl md:text-5xl font-bold'>Enjoy on your TV</h2>
            <p className='text-lg md:text-2xl mt-8'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
          </div>
          <div className='h-[400px] md:h-[350px] md:basis-[40%]'>
            <div className='relative flex justify-center items-center h-full'>
              <img className='w-full md:h-full top-0 z-10 absolute' src={Tv} alt="" />
              <div className='relative -mt-60 md:-mt-10 h-52 w-80 overflow-hidden'>
                <video className='absolute h-30 top-6 left-0' autoPlay muted loop>
                  <source src={Evideo} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center md:text-left py-16 border-t-[10px] border-[#232323]'>
        <div className="container mx-auto md:flex items-center">
          <div className='text-white md:order-last'>
            <h2 className='text-4xl md:text-5xl font-bold'>Download your shows to watch offline</h2>
            <p className='text-lg md:text-2xl mt-8'>Save your favorites easily and always have something to watch.</p>
          </div>
          <div className='text-white relative flex md:order-first justify-center'>
            <img src={Mobile} alt="Mobile" />
            <div className='left-[15%] border-2 absolute bg-black bottom-0 w-[70%] p-2 rounded-xl justify-between flex items-center'>
              <img src={BoxShot} alt="BoxShot" className='h-14 md:h-20' />
              <div>
                <p className='text-base font-medium md:whitespace-nowrap'>Stranger Things</p>
                <span className='text-[#0071eb]'>Downloading...</span>
              </div>
              <div className='basis-[20%]'>
                <img src={DownloadIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center md:text-left py-16 border-t-[10px] border-[#232323]'>
        <div className='container mx-auto md:flex md:items-center'>
          <div className='text-white basis-1/2'>
            <h2 className='text-4xl md:text-5xl font-bold'>Watch everywhere</h2>
            <p className='text-lg md:text-2xl mt-8'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
          </div>
          <div className='basis-1/2 relative'>
            <img className='' src={Watchp} alt="Wacth Pile" />
            <div className='top-[6vh] left-[20vh] md:left-[16vh] w-[60%] -z-20 absolute'>
              <video className='absolute top-0 left-[-25%] sm:left-[-2%] md:left-[0]' autoPlay muted loop>
                <source src={Wvideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center md:text-left py-16 border-t-[10px] border-[#232323]'>
        <div className="container mx-auto md:flex items-center gap-4">
          <div className='text-white md:order-last'>
            <h2 className='text-4xl md:text-5xl font-bold'>Create profiles for kids</h2>
            <p className='text-lg md:text-2xl mt-8'>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
          </div>
          <div className='md:order-first'>
            <img src={Kids} alt="" />
          </div>
        </div>
      </div>
      <FrequentlyUsed />
    </>
  )
}

export default Test2