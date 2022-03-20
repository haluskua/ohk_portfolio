import React from "react";
import { useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";

import "./uploadForm.scss";

const UploadForm = () => {
  const [file, setFile] = useState(null);

  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    // console.log("changed");
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file in (png or jpeg)");
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
        <div className="output">
          {error && <div className="error"> {error} </div>}
          {file && <div className="file"> {file.name} </div>}
          {file && <ProgressBar file={file} setFile={setFile} />}
        </div>
      </label>
    </form>
  );
};

export default UploadForm;
