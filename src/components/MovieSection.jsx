import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import { request } from '../assets/data/Requests'

function MovieSection() {
    return (
        <>
            <div className='hidden md:block'>
                <Main />
            </div>
            <div className='pt-[50px] md:-mt-[120px] overflow-x-hidden py-4'>
                <Row RowId="1" title="Upcoming" url={request.upComing} />
                <Row RowId="2" title="Popular" url={request.popular} />
                <Row RowId="3" title="Trending" url={request.trending} />
                <Row RowId="4" title="TopRated" url={request.topRated} />
            </div>
        </>
    )
}

export default MovieSection