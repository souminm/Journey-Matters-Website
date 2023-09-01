import React, { useEffect } from 'react';
import CookingPagination from './CookingPagination';

function CookingVideos({onChange}) {

    useEffect(()=>{
        onChange()
    },[onChange])
    return (
        <div className='cooking-container'>
            <h4 style={{paddingLeft:"30px",textDecoration:"underline",textAlign:"center"}}>#Trending Videos</h4>
        <div>
        <CookingPagination></CookingPagination>
        </div>
        </div>
    );
}

export default CookingVideos;