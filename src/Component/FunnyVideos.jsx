import React, { useEffect } from 'react';
import Pagination from './Pagination';

const FunnyVideos = ({onChange }) => {

  useEffect(()=>{
    onChange()
  },[onChange])
    return (
        <div className="funny-container">
        <div>
        <h4 style={{paddingLeft:"30px",textDecoration:"underline",textAlign:"center"}}>#Trending Videos</h4>
        </div>
        <div>
        <Pagination></Pagination>
        </div>
    </div>
    );
}

export default FunnyVideos;
