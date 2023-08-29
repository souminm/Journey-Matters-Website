import React, { useEffect, useState } from 'react';
import data from "../YoutubeVideo.json"
const Pagination = () => {
    const [userData,setUserData] = useState([]);
    const [currentPage,setCurrentPage] =useState(1);
    const [totalPages,setTotalPages] = useState(0);
   
    useEffect(()=>{
      setUserData(data);
      setTotalPages(Math.ceil(data.length/10));
    },[])


    //current page
    const handlePageChange = (newPage) =>{
      setCurrentPage(newPage);
    }

    const handleNextClick = () =>{
       if(currentPage < totalPages){
        setCurrentPage(currentPage+1);
       }
      }

      const handlePrevClick = () =>{
        if(currentPage > 1){
         setCurrentPage(currentPage - 1);
        }
       }

       const preDisabled = currentPage === 1;
       const nextDisabled = currentPage===totalPages;

       const itemsPerPage = 3;
       const startIndex = (currentPage -1) * itemsPerPage;
       const endIndex = startIndex +itemsPerPage;
    
    const itemsToDisplay = data.stories.slice(startIndex,endIndex);
    console.log(itemsToDisplay);

    // console.log(itemsToDisplay);
    // const story_arr = [];
    // for(var value of){
    //     story_arr.push(value);
    // }
    // console.log(story_arr);
    // console.log(userData.stories);
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
            { 
                Array.from({length:totalPages},(_,i) =>{
                    return(
                        <button onClick={()=>handlePageChange(i+1)} key={i}>
                            {i+1}
                        </button>
                    )
                })
            }
            </div>
        </div>
    );
}

export default Pagination;
