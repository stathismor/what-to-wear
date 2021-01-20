import { getWeatherData } from "./weather";

export async function getWhatToWear() {
  const weatherData = await getWeatherData();
  const { temp } = weatherData.current;
  let whatToWear = "";

  if (temp < -2) {
    whatToWear = "Don't go out";
  } else if (temp < 2) {
    whatToWear = "Dress exremely warm";
  } else if (temp < 10) {
    whatToWear = "Dress very warm";
  } else if (temp < 15) {
    whatToWear = "Dress warm";
  } else if (temp < 20) {
    whatToWear = "Wear a hoodie";
  } else if (temp < 25) {
    whatToWear = "Dress grunge (t-short & shirt)";
  } else if (temp < 35) {
    whatToWear = "Put on a band tee";
  } else if (temp < 35) {
    whatToWear = "Don't go out";
  }

  return whatToWear;
}
