import React from 'react'
import { useState, useEffect } from 'react'
import MovieCards from '../components/MovieCards';
import "./moviesGrid.css"

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
   const[topMovies, setTopMovies] = useState([])
   const getTopRateMovies = async (url) =>{
    const res = await fetch(url)
    const data = await res.json();
    setTopMovies(data.results);
   }

   useEffect(()=>{
      const topRateMoviUrl = `${moviesURL}top_rated?${apiKey}`;
        getTopRateMovies(topRateMoviUrl)
   },[])

  return (
    <div className='container'>
        <h2 className='title'>Best movie</h2>
        <div className='movies-container'>
         {topMovies.length === 0 && <p>Carregando....</p>}   
        {topMovies.length > 0 && topMovies.map((movie)=><MovieCards key={movie.id} movie={movie} />)}
        </div>
    </div>
  )
}

export default Home