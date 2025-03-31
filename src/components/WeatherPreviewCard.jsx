import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import moment from "moment";

export default function WeatherPreviewCard({ weatherInfo }) {
  let [like, setLike] = useState(false);
  let [likeCount, setLikeCount] = useState(123);

  const handleLikeClick = () => {
    setLike(!like);
    if (!like) {
      likeCount = likeCount + 1;
      setLikeCount(likeCount);
    } else {
      likeCount = likeCount - 1;
      setLikeCount(likeCount);
    }
  };

  return (
    <Card sx={{ height: "400px" }}>
      <CardHeader
        title={`${weatherInfo.location}, ${weatherInfo.country_code}`}
        subheader={moment().format("MMM DD, YYYY hh:mma")}
      />

      <CardMedia
        component="img"
        style={{ objectFit: "contain", height: "160px" }}
        image={
          +weatherInfo.humidity > 80
            ? "./rainny.png"
            : +weatherInfo.temp < 15 && +weatherInfo.humidity > 70
            ? "./winter.png"
            : +weatherInfo.temp > 15 && +weatherInfo.temp < 30
            ? "./clouds.png"
            : "./summer.png"
        }
        alt="Paella dish"
      />

      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          <span>
            Feels like {weatherInfo.temp}&deg;C. {weatherInfo.weather}.
          </span>
          <br />
          <span>Humidity: {weatherInfo.humidity}%</span>
          <br />
          <span>Visibility: {weatherInfo.visibility / 1000}km</span>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleLikeClick}>
          {like ? <ThumbUpIcon color="primary" /> : <ThumbUpIcon />}
          <span className="fs-6 ms-1 text-primary">{likeCount}</span>
        </IconButton>
      </CardActions>
    </Card>
  );
}
