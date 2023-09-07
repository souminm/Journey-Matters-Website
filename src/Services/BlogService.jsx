import axios from "axios";

const API_URL = `${process.env.REACT_APP_BASE_URL}`;

export const getData = () => {
  // const url ="http://localhost:8080/api/get-listing";
  return axios.get(`${API_URL + "api/get-listing"}`);
};

export const deleteData = (id) => {
  // const url ="http://localhost:8080/api/delete-listing/"+id;
  return axios.get(`${API_URL + "api/delete-listing"}/${id}`);
};

export const update = (formData) => {
  // const url = "http://localhost:8080/api/update-listing";
  return axios.post(`${API_URL + "api/update-listing"}`, formData);
};


