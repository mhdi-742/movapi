import React, { useContext,useState,useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { AppContext } from './contex'
import { ApiUrl } from './contex';
import  './singlepage.css'
import Navbar from './Navbar';
const Singlepage = () => {
    const {id}=useParams();
    const[movie,SetMovie]=useState([]);
    const[isloading,Setloading]=useState(true);
    const getMovies= async(url)=>
    {
      Setloading(true);
       try{
        const res= await fetch(url);
        const data= await res.json();
        console.log(data);
        if(data.Response==='True')
        {
        console.log("working");
        Setloading(false);
        SetMovie(data);
        }
       }catch(error){
        console.log(error);
       }
    }
    useEffect(()=>
    {
      let time=setTimeout(()=>{
      getMovies(`${ApiUrl}i=${id}`);
      },500);
      return ()=>clearTimeout(time);
    },[id]) 
    if(isloading)
    {
      return(
        <div >
          <Navbar></Navbar>
          <div className='loading'>
          <h1>LOADING...</h1>
          </div>
        </div>
      )
    }
    else
  return (
    <div>
       <Navbar></Navbar>
       <div className='outer'>
       <div className='box'>
        <div className='poster'>
         <img src={movie.Poster}></img>
        </div>
        <div className='details'>
         <div>Actors:{movie.Actors}</div>
         <div>Director:{movie.Director}</div>
         <div>Release Date:{movie.Year}</div>
         <div>Genre:{movie.Genre}</div>
         <div>IMDB:{movie.imdbRating}</div>
         <div><NavLink to={`https://www.imdb.com/title/${id}/`}><button>IMDB PAGE</button></NavLink><NavLink to="/"><button>GO BACK</button></NavLink></div>
        </div>
        </div>
       </div>
    </div>
  )
}

export default Singlepage;
