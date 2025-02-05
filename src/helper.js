export default function getWeatherCondition(temp, humidity) {
  if (humidity > 80) {
    return "./rainny.png";
  } else if (temp > 30) {
    return "./summer.png";
  } else if (temp < 15) {
    return "./winter.png";
  }
}
