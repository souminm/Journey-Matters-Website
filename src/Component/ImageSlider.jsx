
import "./ImgSlider.css";
import data from "../YoutubeVideo.json"


const ImageSlider = () => {
    
  console.log(data);
  
    return (
        <div class="slider">
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
        {/* <span id="slide-1"></span>
        <span id="slide-2"></span>
        <span id="slide-3"></span>
        <div class="image-container">
          <img src="https://img.youtube.com/vi/F7JuYUN9YYg/hqdefault.jpg" class="slide" width="500" height="300" />
          <img src="https://img.youtube.com/vi/F7JuYUN9YYg/hqdefault.jpg" class="slide" width="500" height="300" />
          <img src="https://img.youtube.com/vi/F7JuYUN9YYg/hqdefault.jpg" class="slide" width="500" height="300" />
        </div>
        <div class="buttons">
          <a href="#slide-1"></a>
          <a href="#slide-2"></a>
          <a href="#slide-3"></a>
        </div>
        <div>
        <a href ="https://www.youtube.com/shorts/eI5SW9VEOL8">Click to view</a>
        </div> */}

       {/* cssss */}
      <span id="slide-1"></span>
      <span id="slide-2"></span>
      <span id="slide-3"></span>
      <span id="slide-4"></span>
      <div class="image-container">
        {data.stories.map((story,index) => (
          <a href={story.url}>
          <img
            className="slide"
            src={story.link}
            width="500"
            height="300"
            alt="youtube video"
          />
          </a>
        ))}
      </div>

      <div class="buttons">
        <a href="#slide-1"></a>
        <a href="#slide-2"></a>
        <a href="#slide-3"></a>
        <a href="#slide-4"></a>
      </div>
      {/* <div>
        <a href="https://www.youtube.com/shorts/eI5SW9VEOL8">Click to view</a>
      </div> */}
    </div>
    );
  };

  export default ImageSlider;