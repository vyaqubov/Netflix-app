import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { UserAuth } from '../context/AuthContext';
import Rating from './Rating';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'black',
    border: '1px solid #eee',
    boxShadow: 24,
};

export default function BasicModal() {
    const { handleClose, open, modal } = UserAuth()

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='text-white' sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <p className='text-xl px-4 text-red-600 py-2 md:text-4xl'>
                            {modal?.title || modal?.name}
                        </p>
                    </Typography>
                    <img className={`cursor-pointer w-full h-[250px] object-cover`} src={`https://image.tmdb.org/t/p/w500/${modal?.backdrop_path || modal?.poster_path}`} alt="" />
                    <Typography className='px-4' id="modal-modal-description" sx={{ mt: 2 }}>
                        <span>
                            <abbr className='text-red-600 text-lg font-bold'>Original title:</abbr>
                            <abbr className='pl-2'>{modal.original_title || modal.original_name}</abbr>
                        </span><br />
                        <span>
                            <abbr className='text-red-600 text-lg font-bold'>Popularity:</abbr>
                            <abbr className='pl-2'>{modal.popularity}</abbr>
                        </span><br />
                        <span className='flex gap-2 items-center'>
                            <abbr className='text-red-600 text-lg font-bold'>Rating:</abbr>
                            <abbr><Rating rating={modal.vote_average} /></abbr>
                        </span>
                        <span className='block'>
                        <abbr className='text-red-600 text-lg font-bold'>Overview:</abbr>
                            {
                                modal?.overview
                            }
                        </span>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
