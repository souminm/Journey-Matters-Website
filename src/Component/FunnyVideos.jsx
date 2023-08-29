import React from 'react';
import Pagination from './Pagination';

const FunnyVideos = () => {
    return (
        <div>
         <h4 style={{paddingLeft:"30px",textDecoration:"underline",textAlign:"center"}}>#Trending Videos</h4>
        <div class="funny-container">
        <Pagination></Pagination>
      {/* {data.stories.map((story) => (
        <div>
          <div style={{paddingLeft:"10px"}}>
            <img className="images" src={story.link} alt="youtube video"></img>
          </div>
          <div>
          <br></br>
            <h5>{story.title}</h5>
            <a href={story.url}>Watch on Youtube</a>
          </div>
        </div>
      ))} */}
    </div>
    </div>
    );
}

export default FunnyVideos;
