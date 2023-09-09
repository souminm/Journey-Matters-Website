import React from "react";
import LifeStylePagination from "./LifeStylePagination";

// function LifeStyleVideos({onChange}) {
function LifeStyleVideos() {
  // useEffect(()=>{
  //     onChange()
  // },[onChange])
  return (
    <div className="lifestyle-container">
      <h4
        style={{
          paddingLeft: "30px",
          textDecoration: "underline",
          textAlign: "center",
        }}
      >
        #Trending Videos
      </h4>
      <div>
        <LifeStylePagination></LifeStylePagination>
      </div>
    </div>
  );
}

export default LifeStyleVideos;
