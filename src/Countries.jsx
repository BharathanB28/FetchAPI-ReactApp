import React from 'react'
import { useEffect, useState } from 'react';
import Country from './Country';
import './App.css';


function Countries() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
    .then((data)=>data.json())
    .then((data)=>{setPosts(data)});
    
    },[])
    
  return (
    <>
    <h1>Countries Details</h1>
    <div className='App'>
      
      {
        posts.map((country)=>
        // console.log(post.name.common)
        <Country key={country.name.common} country={country}/>
        )
      }
     
    </div>
    </>
  )
}

export default Countries;