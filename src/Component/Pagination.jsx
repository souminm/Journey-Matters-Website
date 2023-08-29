import React, { useEffect, useState } from 'react';
import data from "../YoutubeVideo.json"
const Pagination = () => {
    const [userData,setUserData] = useState([]);
    const [currentPage,setCurrentPage] =useState(1);
    const [totalPages,setTotalPages] = useState(0);
    const count =  Object.keys( data.stories ).length;
    let pages = [];
  
   
    useEffect(()=>{
      setUserData(data);
      setTotalPages(Math.ceil(count/10));
    },[])


      

       const itemsPerPage = 3;
       const startIndex = (currentPage -1) * itemsPerPage;
       const endIndex = startIndex +itemsPerPage;
      // console.log( Object.keys( data.stories ).length ) ;
       
       for(let i =1;i<=Math.ceil(count/itemsPerPage);i++){
        pages.push(i)
      }
     
    
    const itemsToDisplay = data.stories.slice(startIndex,endIndex);
 
    console.log(totalPages);
    return (
      <div>
            <div className='pagination-container'>
            { 
                
                itemsToDisplay && itemsToDisplay?.length > 0 ? itemsToDisplay.map((story)=>{
                    return (
                        <div>
                        <b key={story.id}>{story.title}</b>
                        <img style={{ borderRadius: "10px"}} src={story.link}></img>
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

export default Pagination;
