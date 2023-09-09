import React from "react";
import { Link } from "react-router-dom";
import { update } from "../Services/BlogService";
import { useFormData } from "../Services/FormContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UpdateListing(props) {
  const { formData, setFormData } = useFormData();

  const handleEventChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const response = await update({
      id: formData._id,
      category: formData.category,
      link: formData.link,
      url: formData.url,
      title: formData.title,
    });
    if (response.data.success === true) {
      // setMsg('Listing updated Successfully')
      toast.success("Listing updated successfully .");
    } else {
      // setMsg('Listing failed! .');
      toast.error("Listing updation failed .");
    }
  };

  return (
    <div className="update-listing">
      <ToastContainer />
      <header>
        <h1 id="title">Update Admin Listing form</h1>
        <p id="description"></p>
      </header>

      <form id="listing-form" onSubmit={handleFormSubmit}>
        <div>
          <p>which listing has to be created?</p>
          <label for="category" required>
            Choose a category:
          </label>
          <select
            id="dropdown"
            name="category"
            value={formData.category}
            onChange={handleEventChange}
            className="form-input-size"
            required
          >
            <option disabled selected value>
              Select category
            </option>
            <option value="Entertainment">Entertainment</option>
            <option value="Cooking">Cooking</option>
            <option value="Lifestyle">Lifestyle</option>
          </select>
        </div>
        <div className="form-input">
          <label id="link-label">Link:</label>
          <span class="input-group-addon">https://img.youtube.com/vi/</span>
          <input
            type="text"
            name="link"
            value={formData.link}
            onChange={handleEventChange}
            id="link"
            placeholder="Enter short link of video"
            className="form-input-size"
            required
          />
          <span class="input-group-addon">/hqdefault.jpg</span>
        </div>
        <div className="form-input">
          <label id="title-label">Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleEventChange}
            id="title"
            placeholder="Enter title of video"
            className="form-input-size"
            required
          />
        </div>
        <div className="form-input">
          <label id="name-label">Url:</label>
          <input
            type="text"
            id="link"
            name="url"
            value={formData.url}
            onChange={handleEventChange}
            placeholder="Enter url of video"
            className="form-input-size"
            required
          />
        </div>
        <div className="form-input">
          <button className="btn btn-info" type="submit" id="submit">
            Submit
          </button>
        </div>
      </form>
      <Link to="/view-listing">
        <button className="btn btn-danger">Prev</button>
      </Link>
    </div>
  );
}

export default UpdateListing;
