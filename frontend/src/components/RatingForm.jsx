import React from "react";
import Rating from "@mui/material/Rating";
import "../index.css";

function RatingForm() {
  return (
    <div className="container-fluid custom-blue-color">
      <div className="container">
        <div className="row">
          <form className="col-md-7 py-5 col-12">
            <h4 className="mb-3">Rate Us</h4>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="email"
                className="form-control text-black-50"
                id="email"
                placeholder="Jhon Doe"
                style={{ borderRadius: "0" }}
              />
            </div>
            <div>
              <label htmlFor="half-ating" className="form-label">
                Rating
              </label>
              <br />
              <Rating
                name="half-rating"
                defaultValue={0}
                precision={0.5}
                className="fs-2"
                id="half-rating"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control text-black-50"
                id="message"
                rows="3"
                style={{ resize: "none", borderRadius: "0" }}
                defaultValue=" Any Suggestion....."
              ></textarea>
            </div>

            <button
              className="btn px-5 py-2 text-white fw-medium"
              style={{ borderRadius: "0", backgroundColor: "#03b1e5" }}
            >
              Submit
            </button>
          </form>
          <div className="d-none col-md-5 ps-md-5 d-md-flex justify-content-md-center align-items-md-center">
            <img src="/connect.png" alt="" style={{ height: "60%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RatingForm;
