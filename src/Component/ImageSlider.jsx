import "./ImgSlider.css";
import { useEffect, useState } from "react";
import { getData } from "../Services/BlogService";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const [userData, setUserData] = useState({});
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await getData()
      .then((res) => {
        console.log(res, "result");
        const cookingData = res.data.data;
        const final = [];
        const stringify_Object = JSON.stringify(cookingData);
        var stringify = JSON.parse(stringify_Object);
        for (var i = 0; i < stringify.length; i++) {
          if (stringify[i]["category"] !== "") {
            final.push(stringify[i]);
          }
        }
        console.log(final, "final Data");
        if (final.length !== 0) {
          setUserData(final);
        } else {
          setUserData("");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const itemsToDisplay = Array.from(userData).slice(0, 5);

  const nextSlide = () => {
    setCurrent(current === itemsToDisplay.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? itemsToDisplay.length - 1 : current - 1);
  };

  if (!Array.isArray(itemsToDisplay) || itemsToDisplay.length <= 0) {
    return null;
  }
  console.log(itemsToDisplay, "data");
  return (
    <section className="slider">
      <BiChevronsLeft className="left-arrow" onClick={prevSlide} />
      <BiChevronsRight className="right-arrow" onClick={nextSlide} />
      {itemsToDisplay.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <div>
                <h5>{slide.title}</h5>

                <a href={slide.url}>
                  {" "}
                  <img src={
                      "https://img.youtube.com/vi/" +
                      slide.link +
                      "/hqdefault.jpg"
                    }
                    alt="blog"
                    className="image"
                  />
                </a>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
