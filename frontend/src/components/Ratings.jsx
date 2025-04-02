import React from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import {
  deepOrange,
  deepPurple,
  lightBlue,
  lightGreen,
  teal,
  indigo,
  cyan,
} from "@mui/material/colors";

function Card({ rating }) {
  const color = [
    deepPurple,
    deepOrange,
    cyan,
    lightBlue,
    teal,
    lightGreen,
    indigo,
  ];

  let bgcolor = () => {
    let avColor = color[Math.floor(Math.random() * color.length)];
    return { bgcolor: avColor[500] };
  };

  return (
    <div className="card col-md-5 offset-md-0 col-11 m-2">
      <div className="card-header d-flex align-items-center">
        <Avatar sx={bgcolor()}>{rating.name.charAt(0).toUpperCase()}</Avatar>
        <div className="ps-2">{rating.name}</div>
      </div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>
            <Rating
              name="half-rating-read"
              defaultValue={rating.rating}
              precision={0.5}
              readOnly
            />
          </p>
          <footer className="blockquote-footer">
            <cite title="Source Title">{rating.message}</cite>
          </footer>
        </blockquote>
      </div>
    </div>
  );
}

function Ratings({ ratingFormData }) {
  let [data, setData] = React.useState([]);
  let [error, setError] = React.useState("");

  React.useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_BACKEND_BASE_URL);
        console.log("Response:", response.data.data);
        setData([...response.data.data]);
      } catch (err) {
        setError("SomeError");
      }
    })();
  }, [ratingFormData]);

  return data.length ? (
    <div className="container py-5 ps-md-3 ps-4">
      <h4>Ratings</h4>
      <div className="row">
        {data.map((rating, index) => (
          <Card rating={rating} key={index} />
        ))}
      </div>
    </div>
  ) : (
    <h4>No Ratings</h4>
  );
}

export default Ratings;
