import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { nanoid } from 'nanoid';
import SearchItem from './SearchItem';

function SearchList() {
    const { user, serachdata } = UserAuth();

    return (
        <div className='text-white pb-4 pt-20 mx-auto container'>
            <div className='flex items-center flex-wrap gap-5 md:px-10 justify-evenly'>
                {
                    serachdata.map(item => <SearchItem key={nanoid()} obj={item} />)
                }
            </div>
        </div>
    )
}

export default SearchList