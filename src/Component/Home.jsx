import React, { useEffect, useState } from 'react';
import ImageSlider from './ImageSlider';

function Home({onChange}) {
    const [name,setName] = useState([""]);
     
     useEffect(()=>{
        if(name.length!==18){
            setTimeout(getName,200);
        }
        
     },[name])

     useEffect(()=>{
        onChange()
     },[onChange])

   function getName(){
        let fullName="Journey Matters :)";
        setName(fullName.slice(0,name.length+1));
    }
    
    return (
        <div className="HomeContainer">
            <div>
            <h1>Hey there!</h1>
            <h3>Welcome to <b>{name}</b></h3>
            </div>
            <div className='HomeSlider'>
             <p>Trending videos</p>
            <ImageSlider></ImageSlider>
            </div>
        </div>
    );
}

export default Home;