import fetch from "node-fetch";

const API_KEY = "115ad23e21600868c9aa68cd1eb7afd9";
const LATITDE = "51.542459853540244";
const LONGITUDE = "-0.10507426664371144";

export async function getWeatherData() {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${LATITDE}&lon=${LONGITUDE}&units=metric&appid=${API_KEY}`
    );
    const data = response.json();
    return data;
}
