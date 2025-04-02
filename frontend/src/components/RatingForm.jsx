import React from "react";
import axios from "axios";
import Rating from "@mui/material/Rating";
import "../index.css";

function RatingForm({ setFormDataHandler }) {
  const [validated, setValidated] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    rating: 0,
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation(); // Stops event from propagating further
      setValidated(true); // Enables Bootstrap validation styles
      return; // Stops form submission
    }

    if (formData.rating === 0) {
      formData.rating = 1;
    }

    try {
      const response = await axios.post(
        "http://localhost:4500/api/ratings",
        JSON.stringify(formData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response:", response.data);
      alert("Thank you for your feedback!");
      setFormDataHandler(formData);
      setFormData({ name: "", rating: 0, message: "" });
      setValidated(false);
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="container-fluid custom-blue-color">
      <div className="container ps-3">
        <div className="row">
          <form
            className={`col-md-7 py-5 col-12 needs-validation ${
              validated ? "was-validated" : ""
            }`}
            noValidate
            onSubmit={handleSubmit}
          >
            <h4 className="mb-3">Rate Us</h4>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control text-black-50"
                id="name"
                style={{ borderRadius: "0" }}
                required
                value={formData.name}
                onChange={handleInputChange}
              />
              <div className="invalid-feedback">Please enter your name.</div>
              <div className="valid-feedback">Looks Good.</div>
            </div>
            <div>
              <label htmlFor="half-ating" className="form-label">
                Rating
              </label>
              <br />
              <Rating
                name="half-rating"
                value={formData.rating}
                precision={0.5}
                className="fs-2"
                id="half-rating"
                onChange={(event, newValue) =>
                  setFormData({ ...formData, rating: newValue })
                }
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                name="message"
                className="form-control text-black-50"
                id="message"
                rows="3"
                style={{ resize: "none", borderRadius: "0" }}
                required
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
              <div className="invalid-feedback">
                Please provide some suggestion.
              </div>
              <div className="valid-feedback">Looks Good.</div>
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
