import React from "react";
import { Link } from "react-router-dom";
import blogService from "../Services/BlogService";
import { useState, useEffect } from "react";
import { useFormData } from "../Services/FormContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ViewListing = () => {
  // const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const { formData, setFormData } = useFormData();

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const count = userData.length;
  let pages = [];

  //

  const onUpdate = (item) => {
    setFormData(item);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await blogService
      .getData()
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

  const deleteListing = async (id, e) => {
    var response = await blogService.deleteData(id);
    if (response.data.success === true) {
    //  alert(response.data.msg);
      document.getElementById(id).parentElement.parentElement.parentElement.parentElement.remove();
      toast.success("listing deleted successfully .")
    } else {
      toast.error("listing deletion failed .")
    }
  };
  //Pagination
  const itemsPerPage = 8;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  for (let i = 1; i <= Math.ceil(count / itemsPerPage); i++) {
    pages.push(i);
  }

  const itemsToDisplay = Array.from(userData).slice(startIndex, endIndex);
  console.log(itemsToDisplay);
  return (
    <div className="view-listing">
       <ToastContainer/>
         <h1>View All Listings!</h1>
        {itemsToDisplay && itemsToDisplay?.length > 0 && (
          <div>
            <table  style ={{border:"1px solid black"}} className="table tabled-striped table-bordered">
              <thead>
                <tr>
                <th>Date of Creation</th>
                <th>Category</th>
                <th>Title</th>
                <th>Img Link</th>
                <th>Video Url</th>
                <th>Actions</th>
                </tr>
              </thead>
              
              <tbody>
                {console.log(itemsToDisplay, "items")}
                {itemsToDisplay.map((post) => (
                  <tr>
                    {console.log(post, "attributes")}
                    <td>{post.createdAt}</td>
                    <td>{post.category}</td>
                    <td>{post.title}</td>
                    <td>
                      <img
                        src={
                          "https://img.youtube.com/vi/" +
                          post.link +
                          "/hqdefault.jpg"
                        }
                        style={{
                          width: "100px",
                          height: "50px",
                        
                        }}
                        alt="youtube videos"
                      />
                    </td>
                    <td>{post.url}</td>
                    <td>
                      <div className="actions">
                        <div>
                          <button
                            id={post._id}
                            onClick={(e) => deleteListing(post._id, e)}
                            className="btn btn-danger"
                          >
                            Delete
                          </button>
                        </div>
                        <div>
                          <Link
                            style={{ paddingTop: "20px" }}
                            to={`/update-listing/${post._id}`}
                          >
                            <button onClick={() => onUpdate(post)} className="btn btn-info">update</button>
                          </Link>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        )}
      {/* Pagination */}
      <div className="pagination1">
        {pages.map((page, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                setCurrentPage(page);
              }}
              className={page === currentPage ? "active" : ""}
            >
              {page}
            </button>
          );
        })}
      </div>

      {/* Pagination end */}
      <div>
        <Link to="/create-listing">
          <button  className="btn btn-danger">Prev</button>
        </Link>
      </div>
  </div>
  );
  
};

export default ViewListing;
