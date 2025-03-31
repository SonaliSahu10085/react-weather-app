import React from "react";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import { deepOrange, deepPurple, lightBlue, lightGreen, teal, indigo,cyan} from "@mui/material/colors";

function Card() {
  const color = [deepPurple, deepOrange, cyan, lightBlue, teal, lightGreen, indigo];

  let bgcolor = () => {
    let avColor = color[Math.floor(Math.random() * color.length)];
    return { bgcolor: avColor[500] }
  }

  return (
    <div className="card col-md-5 offset-md-0 col-11 m-2">
      <div className="card-header d-flex align-items-center">
        <Avatar sx={bgcolor()}>N</Avatar>
        <div className="ps-2">User Name</div>
      </div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>
            <Rating
              name="half-rating-read"
              defaultValue={2.5}
              precision={0.5}
              readOnly
            />
          </p>
          <footer className="blockquote-footer">
            <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </div>
    </div>
  );
}
function IndividualRating() {
  return (
    <div className="row">
      <Card />
      <Card />
    </div>
  );
}

function Ratings() {
  return (
    <div className="container py-5">
      <h1>Ratings</h1>
      <IndividualRating />
      <IndividualRating />
      <IndividualRating />
      <IndividualRating />
      <IndividualRating />
      <IndividualRating />
    </div>
  );
}

export default Ratings;
