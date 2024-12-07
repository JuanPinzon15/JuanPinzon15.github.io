// OpenWeatherMap API Key
const API_KEY = 'b4f9c46acb6ee616b3b1a3e7cfbf8a00';

// Function to fetch weather data
const fetchWeather = async (city) => {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${York}&appid=${b4f9c46acb6ee616b3b1a3e7cfbf8a00}&units=metric`
        );

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();

        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather:', error);

        document.getElementById('error').innerText = 
            'Unable to fetch weather data. Please try again later.';
    }
};

// Function to display weather data on the webpage
const displayWeather = (data) => {
    // Select the container where the weather data will be displayed.
    const container = document.getElementById('weather-container');

    // Create the content dynamically using the properties from the 'data' object.
    container.innerHTML = `
        <h3>Weather in ${data.name}</h3>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Condition: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
};

// Trigger fetch for a specific city
fetchWeather('York');
