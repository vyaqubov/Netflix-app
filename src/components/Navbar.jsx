import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import Logo from '../assets/img/Logo.png'
import Menu from './Menu';
import { SlMagnifier } from 'react-icons/sl'
import axios from 'axios';
import { request } from '../assets/data/Requests';

function Navbar() {
  const [width, setWidht] = useState(0)
  const [border, setBorder] = useState(0)
  const [inp, setInp] = useState('')
  const [userin, setUserin] = useState(false)
  const [position, setPosition] = useState(0);
  const { user, logOut, setSearchdata, local_exit } = UserAuth();// eslint-disable-line
  const divRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  async function Logout() {
    try {
      await logOut();
      local_exit();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setUserin(localStorage.getItem('bool'));
  }, [location])

  function change() {
    width === 0 ? setWidht(200) : setWidht(0);
    border === 0 ? setBorder(1) : setBorder(0);
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOutsideClick = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setInp('')
      setWidht(0);
      setBorder(0);
    }
  };

  function search(arg) {
    setInp(arg);
    if (arg.length > 0) {
      navigate('/search')
    } else {
      navigate('/home')
    }
    axios.get(request.requestSeacrhMovies(arg)).then(res => setSearchdata(res.data.results))
  }

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setPosition(scrollPosition);
  };

  return (
    <div className={`${position > 200 ? "bg-gradient-to-b from-[#060606] to-[#141414]" : ''} flex items-center justify-between p-4 z-[100] fixed w-full gap-2`}>
      <div className='flex items-center gap-5'>
        <div className='flex items-center gap-3'>
          <div className='basis-[90%] order-2 md:order-1'>
            {
              userin === "true" ? <Link to='/movies'><img className='w-36 md:w-30' src={Logo} alt="Logo" /></Link> : <Link to='/'><img className='w-36 md:w-30' src={Logo} alt="Logo" /></Link>
            }
          </div>
          <div className='order-1 md:order-2 basis-[5%]'>
            {
              (location.pathname !== "/" && location.pathname !== "/login" && location.pathname !== "/signup") ? <Menu /> : ''
            }
          </div>
        </div>
      </div>
      <div>
        {
          userin === "true" ? (
            <div className='flex items-center gap-10'>
              <div className='flex justify-end md:hidden'>
                <input value={inp} onChange={(e) => search(e.target.value)} className='border-[1px] w-[80%] h-full bg-black text-white placeholder:pl-2' type="text" placeholder='Title' />
              </div>
              <div ref={divRef} style={{ width: `${width}px`, border: `${border}px solid white` }} className='bg-black ease-in duration-300 h-[35px] relative hidden md:block'>
                <input value={inp} onChange={(e) => search(e.target.value)} className='w-[80%] h-full absolute left-[38px] bg-black text-white' type="text" />
                <SlMagnifier onClick={change} className='text-white absolute left-[7px] cursor-pointer top-[5px] font-bold text-2xl' />
              </div>
              <button onClick={Logout} className='bg-red-600 whitespace-nowrap px-6 py-2 rounded cursor-pointer text-white hidden md:block'>Log out</button>
            </div>
          ) : (
            <div className='whitespace-nowrap'>
              <Link to='/login'>
                <button className='text-white pr-4 cursor-pointer'>Sign in</button>
              </Link>
              <Link to='/signup'>
                <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign up</button>
              </Link>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar