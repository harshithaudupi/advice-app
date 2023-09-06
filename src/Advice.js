import React,{useState ,useEffect } from 'react'
import axios from 'axios';
import Card from './Card';
import './Advice.css';

const Advice = () => {
    const [advice,setAdvice]=useState("");

   useEffect(()=>{
    fetchAdvice();
   },[]);



  function fetchAdvice(){
    axios
    .get("https://api.adviceslip.com/advice")
    .then((response)=>{
     setAdvice(response.data.slip.advice);
    })
    .catch((err)=>{
     console.log(err);
    })
   
    
 }
 console.log("advice",advice);
  return (
    <div className='app'>
          <Card advice={advice} fetchAdvice={fetchAdvice}/>      
      
    </div>
  )
}

export default Advice;