import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import { request } from '../assets/data/Requests'

function Home() {
  return (
    <>
      <div className='hidden md:block'>
        <Main/>
      </div>
      <div className='pt-[50px] md:-mt-[120px] overflow-x-hidden py-4'>
        <Row RowId="1" title="Movies Upcoming" url={request.upComing} />
        <Row RowId="2" title="Movies Popular" url={request.popular} />
        <Row RowId="1" title="Tv Shows Popular" url={request.tvpopular} />
        <Row RowId="4" title="TopRated" url={request.topRated} />
      </div>
    </>
  )
}

export default Home