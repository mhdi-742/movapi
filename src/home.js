import React, { useContext } from 'react'
import { AppContext, useGlobalContext } from './contex';
import { NavLink } from 'react-router-dom';
import Navbar from'./Navbar'
import './card.css'
const Home = () => {
  const {movie,isloading}=useGlobalContext();
  if(isloading)
    {
      return(
        <>
          <Navbar></Navbar>
          <h1>LOADING...</h1>
        </>
      )
    }
    else
  return ( 
   <>
   <Navbar></Navbar>
   <div className='items'>
   {movie.map((curr)=>
   {
    return(
      <>
      <div className="card">
      <NavLink to={`singlepage/${curr.imdbID}`} key={curr.imdbID}>
          <div className='poster1'>
          <img src={curr.Poster} id="image" className="thumbnail"/>
          </div>
          <h3 id="title">{curr.Title}</h3>
        </NavLink>
      </div>
      </>
    );
   })}
   </div>
   </>
  )
}

export default Home;
