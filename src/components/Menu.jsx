import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import { BsThreeDotsVertical } from "react-icons/bs";
import { UserAuth } from '../context/AuthContext';

function Menu() {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    const { logOut, local_exit } = UserAuth();
    const navigate = useNavigate();

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target)
        ) {
            return;
        }
        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    async function Logout() {
        try {
            await logOut();
            local_exit();
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className='hidden md:block'>
                <ul className="flex text-white items-center gap-5">
                    <NavLink className="whitespace-nowrap" to="/home">Home</NavLink>
                    <NavLink className="whitespace-nowrap" to="/tvshows">Tv Shows</NavLink>
                    <NavLink className="whitespace-nowrap" to="/movies">Movies</NavLink>
                    <NavLink className="whitespace-nowrap" to='/account'>My List</NavLink>
                </ul>
            </div>
            <div className='block md:hidden'>
                <Stack direction="row" spacing={2}>
                    <div>
                        <Button
                            ref={anchorRef}
                            id="composition-button"
                            aria-controls={open ? 'composition-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleToggle}
                        >
                            <p className='browser'><BsThreeDotsVertical /></p>
                        </Button>
                        <Popper
                            open={open}
                            anchorEl={anchorRef.current}
                            role={undefined}
                            placement="bottom-start"
                            transition
                            disablePortal
                        >
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    style={{
                                        transformOrigin:
                                            placement === 'bottom-start' ? 'left top' : 'left bottom',
                                    }}
                                >
                                    <Paper>
                                        <ClickAwayListener onClickAway={handleClose}>
                                            <MenuList
                                                autoFocusItem={open}
                                                id="composition-menu"
                                                aria-labelledby="composition-button"
                                                onKeyDown={handleListKeyDown}
                                                className='dropdown'
                                            >
                                                <MenuItem onClick={handleClose}><NavLink className="whitespace-nowrap" to="/home">Home</NavLink></MenuItem>
                                                <MenuItem onClick={handleClose}><NavLink className="whitespace-nowrap" to="/tvshows">Tv Shows</NavLink></MenuItem>
                                                <MenuItem onClick={handleClose}><NavLink className="whitespace-nowrap" to="/movies">Movies</NavLink></MenuItem>
                                                <MenuItem onClick={handleClose}><NavLink className="whitespace-nowrap" to='/account'>My List</NavLink></MenuItem>
                                                <MenuItem onClick={Logout}>Log out</MenuItem>
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                    </div>
                </Stack>
            </div>
        </>
    )
}

export default Menu