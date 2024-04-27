import React, { useRef, useState, useEffect } from "react";
// import useFetch from "../hooks/useFetch";

const Predict = () => {
  const file = useRef();

  const [files, setFiles] = useState(null);
  const [isLoader, setIsLoader] = useState(null);
  const [error, setError] = useState(null);

  // const {data, isLoader, error} = useFetch("http://localhost:5000/upload")
  const handleFile = () => {
    // file.current.focus();
    console.log(file);
    file.current.click();
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(file.current.files[0]);

    try {
      const formData = new FormData();
      formData.append("file", file.current.files[0]);

      setIsLoader(true);

      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }
      const result = await response.json();
      console.log(result.data);
    } catch (error) {
      console.log("error", error);
    } finally {
      setIsLoader(false);
    }
  };
  const handleChange = (e) => {
    console.log(e.target);
    const selectedFile = file.current.files[0];
    console.log("Selected file:", selectedFile);

    // Read the selected file as a URL
    const reader = new FileReader();
    reader.onload = () => {
      setFiles(reader.result); // Set the selected image URL
    };
    reader.readAsDataURL(selectedFile);
  };

  if (files !== null) console.log(files);

  let element = <p>select the image</p>;
  if (files !== null) {
    element = (
      <div className=" flex justify-center">
        <img className="w-36 rounded-3xl" src={files} />
      </div>
    );
  }
  return (
    <div className="w-full bg-green-500">
      <h1 className="text-center">Welcome to great magic show</h1>

      {element}
      <form
        onSubmit={handleSubmit}
        className="flex h-screen flex-col items-center justify-center"
      >
        <p>
          {/* <label>insert the image</label> */}
          <input
            ref={file}
            onChange={handleChange}
            className="hidden"
            type="file"
          />

          <button
            onClick={handleFile}
            className=" rounded-3xl  border-green-500 px-4 py-2 font-semibold text-white hover:border-transparent hover:bg-white hover:text-green-500"
          >
            Upload Image
          </button>
        </p>

        <p>
          <button
            className=" rounded-3xl  border-green-500 px-4 py-2 font-semibold text-white hover:border-transparent hover:bg-white hover:text-green-500"
            type="submit"
          >
            Submit
          </button>
        </p>
      </form>
    </div>
  );
};

export default Predict;
