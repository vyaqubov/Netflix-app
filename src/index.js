import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import { getData, getTvShows } from './assets/data/Requests';
import Login from './components/Login';
import Signup from './components/Signup';
import Account from './components/Account';
import Protected from './components/Protected';
import Test from './components/Test';
import Test2 from './components/Test2';
import Tvshows from './components/Tvshows';
import SearchList from './components/SearchList';
import Video from './components/Video';
import Error from './components/Error';
import MovieSection from './components/MovieSection';

const place = createBrowserRouter([
    {path: '/', element: <App/>, errorElement: <Error/>, children: [
        {path: '/', element: <Test/> , children: [
            {index: true, element: <Test2/>}
        ]},
        {path: '/home', element: <Home/>, loader: getData},
        {path: '/movies', element: <MovieSection />, loader: getData},
        {path: '/tvshows', element: <Tvshows/>, loader: getTvShows},
        {path: '/account', element: <Protected><Account/></Protected>},
        {path: '/login', element: <Login/>},
        {path: '/signup', element: <Signup/>},
        {path: '/search', element: <SearchList/>},
        {path: '/video', element: <Video/>}
    ]}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={place} />);