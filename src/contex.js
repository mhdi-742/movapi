import React, { useEffect, useState, useContext } from "react";

const AppContext=React.createContext();
export const ApiUrl=`http://www.omdbapi.com/?apikey=f172c965&`;
const AppProvider =({children})=>{
    const[movie,SetMovie]=useState([]);
    const[isloading,Setloading]=useState(true);
    const[isError,SetError]=useState({show:false,msg:""});
    const[query,SetQuery]=useState('batman');
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
        SetMovie(data.Search);
        SetError({show:false,msg:data.Error});
        }
        else{
          SetError({show:true,msg:data.Error});
        }
       }catch(error){
        console.log(error);
       }
    }
    useEffect(()=>
    {
      let time=setTimeout(()=>{
      getMovies(`${ApiUrl}s=${query}`);
      },1000);
      return ()=>clearTimeout(time);
    },[query]) 
    return <AppContext.Provider value={{movie ,isError ,isloading,SetQuery,query}}>{children}</AppContext.Provider>
};
const useGlobalContext = () => {
    return useContext(AppContext);
  };
export{ AppContext,AppProvider,useGlobalContext};