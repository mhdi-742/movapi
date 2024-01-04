import React from 'react'
import { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom'
import './Navbar.css'
import { useGlobalContext } from './contex'
export default function Navbar() {
  const {query,SetQuery,isError}=useGlobalContext();
  return (
    <div>
    <div className="topnav">
    <NavLink className="active" to="/">The Movie Site</NavLink>
    <div className="search-container">
      <form role="search" id="form" onSubmit={(e)=>e.preventDefault()}>
        <input type="search" id="query" name="q" placeholder={query} onChange={(e)=>
        {
          SetQuery(e.target.value);
        }}></input>
      </form>
      <div>
        <p className='error'>{isError.show && isError.msg}</p>
      </div>
    </div>
  </div>
  </div>
  )
}



