import React from "react";

import "./Input.css";

export default function Input({ handleSubmit }) {
  return (
    <div className="Input">
      <form onSubmit={handleSubmit}>
        <input
          className="input-city"
          name="cityName"
          type="text"
          autoComplete="off"
          placeholder="Enter your city"
        />
        <button type="submit" className="btn btn-primary submit_btn">
          Search
        </button>
      </form>
    </div>
  );
}
