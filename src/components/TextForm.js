import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
  };

  const handleClearClick = () => {
    setText("");
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    alert("Text copied!");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/\s+/).join(" ");
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <h2>{props.heading}</h2>

      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          rows="8"
        ></textarea>
      </div>

      <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
        Uppercase
      </button>

      <button className="btn btn-success mx-1 my-1" onClick={handleLoClick}>
        Lowercase
      </button>

      <button className="btn btn-warning mx-1 my-1" onClick={handleCopyClick}>
        Copy
      </button>

      <button className="btn btn-info mx-1 my-1" onClick={handleExtraSpaces}>
        Remove Extra Spaces
      </button>

      <button className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>
        Clear
      </button>

      {/* 🔍 TEXT SUMMARY */}
      <div className="my-4">
        <h4>Text Summary</h4>
        <p>
          {text.split(" ").filter((e) => e.length !== 0).length} words and{" "}
          {text.length} characters
        </p>
      </div>

      {/* 👀 PREVIEW SECTION */}
      <div className="my-3">
        <h4>Preview</h4>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
