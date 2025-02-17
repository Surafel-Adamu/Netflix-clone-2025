import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from '../../../utils/Axios'
import movieTrailer from 'movie-trailer'
import YouTube from 'react-youtube'

const Row = ({title,fetchUrl,isLargeRow}) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');
  // 

  const base_url = "https://image.tmdb.org/t/p/original/";
    
   useEffect(()=>{
    (async()=>{
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);        
      } catch (error) {
        console.log('error',error)  
      }

    })()
   },[fetchUrl]);

   const handleClick = (movie)=>{
    if(trailerUrl){
      setTrailerUrl('');
    }else{
      movieTrailer(movie?.title ||  movie?.name || movie?.original_name)
      .then((url)=>{
        console.log(url)
        const urlParams = new URLSearchParams(new URL(url).search);
        console.log(urlParams)
        setTrailerUrl(urlParams.get('v'));
      })
      .catch((error)=>console.log('error',error))
    }
   }

    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        autoplay: 1,
      },
    };


  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className='row_posters'>
      {movies?.map((movie, i) => (
        <img 
          onClick={() => handleClick(movie)} 
          key={i} 
          src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
          alt={movie.name} 
          className={`row_poster ${isLargeRow && "row_posterLarge"}`}  
        />
      ))}
      </div >
      <div style={{padding: '40px'}}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
      </div>
    </div>
  )
}
export default Row
