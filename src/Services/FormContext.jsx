import React, { useContext, useState } from "react";
import { createContext } from "react";

const formContext = createContext({
  formData: null,
  setFormData: () => {},
});

const FormContextProvider = ({children}) => {
  const [formData, setFormData] = useState({
    category: "",
    link: "",
    url: "",
    title: "",
    id: null,
  });

  return (
    <formContext.Provider
      value={{ formData, setFormData }}
    >{children}</formContext.Provider>
  );
};

export default FormContextProvider;
export const useFormData = () =>useContext(formContext)
