import React, { useEffect, useState } from 'react';
import axios from 'axios';
const CookingPagination = () => {
    const [userData,setUserData] = useState([]);
    const [currentPage,setCurrentPage] =useState(1);
    const count =  userData.length;
    let pages = [];
  
   
    useEffect(()=>{
     getCookingData();
    },[])


       const getCookingData =async() =>{
       await axios.get('http://localhost:8080/api/get-listing')
        .then((res)=>{
          const cookingData = res.data.data;
          const final = [];
          const stringify_Object = JSON.stringify((cookingData))
          var stringify = JSON.parse(stringify_Object);
          for (var i = 0; i < stringify.length; i++) {
           if(stringify[i]['category'] === 'Cooking'){
            final.push(stringify[i]);
           }
          }
          if(final.length !== 0){
            setUserData(final)
          }
          else{
            setUserData('');
          }
        })
        .catch((error)=>{
          console.log(error)
        })
       }
       const itemsPerPage = 3;
       const startIndex = (currentPage - 1) * itemsPerPage;
       const endIndex = startIndex +itemsPerPage;
       
       for(let i =1;i<=Math.ceil(count/itemsPerPage);i++){
        pages.push(i)
      }
     
      function generateFullLink(data){
        const text1 = "https://img.youtube.com/vi/";
        const text2 = "/hqdefault.jpg";
        const result = text1.concat(data);
        const finalResult = result.concat(text2);
        return finalResult;
      }
    
    const itemsToDisplay = userData.slice(startIndex,endIndex);
    return (
      <div>
            <div className='pagination-container'>
            { 
                
                itemsToDisplay && itemsToDisplay?.length > 0 ? itemsToDisplay.map((story)=>{
                    return (
                        <div>
                        <b key={story.id}>{story.title}</b>
                        <img style={{ borderRadius: "10px"}} src={generateFullLink(story.link)} alt='image'></img>
                        <div>
                        <a  style={{textDecoration:"none",color:"white"}}href={story.url}>Click here to Watch on youtube</a>
                        </div>
                        </div>
                    ) 
                }) :''
            }
            
        </div>
        <div className='pagination1'>
        {
          pages.map((page,index)=>{
          return <button key={index} onClick={()=>{
            setCurrentPage(page)
          }} className={page === currentPage ? 'active' : ''}>{page}</button>
          })
        }
        </div>
        </div>
      
    );
}

export default CookingPagination;
