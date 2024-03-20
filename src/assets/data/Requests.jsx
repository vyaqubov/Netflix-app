import axios from 'axios';

const key = "29eaaefc705c2a8903246f2831e506ba";

export const request = {
    popular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    upComing: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    trending: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
    tvpopular: `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`,
    tvtopRated: `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=1`,
    tvshows: `https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${key}`,
    requestSingleMovie: (id) => `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&append_to_response=videos`,
    requestSingleTvshow: (id) => `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${key}&language=en-US`,
    requestSeacrhMovies: (arg) => `https://api.themoviedb.org/3/search/movie?api_key=29eaaefc705c2a8903246f2831e506ba&language=en-US&query=${arg}&page=1&include_adult=false`,
}

export async function getTvShows() {
    let req = await axios.get(request.tvshows);
    let res = await req.data.results[rand(0, 15)];

    return res
}

export async function getData() {
    let req = await axios.get(request.popular);
    let res = await req.data.results[rand(0, 15)];

    return res
}

export async function Trail(arg) {
    try {
        let req = await axios.get(request.requestSingleMovie(arg));
        if(req.status === 200){
            let res = await req.data;
            return res
        }
    } catch (error) {
        if(error.response.status !== 404){
        }else{
            console.log(error);
        }
    }
}

export async function Tvtrail(arg) {
    try {
        let req = await axios.get(request.requestSingleMovie(arg));
        if(req.status === 200){
            let res = await req.data;
            return res
        }
    } catch (error) {
        if(error.response.status !== 404){
        }else{
            console.log(error);
        }
    }
}

function rand(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }