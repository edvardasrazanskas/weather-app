getWeatherBtn = document.getElementById('getWeatherBtn');

getWeatherBtn.addEventListener('click', ()=>{
    const city = document.getElementById('cityName').value;
    getWeather(city);
});


async function getWeather(city){
    const response = await fetch('https://api.weatherapi.com/v1/current.json?key=e46b1d205d604215ac6174333232909&q='+city, {mode: 'cors'});
    const weatherData = await response.json();
    printWeatherInfo(weatherData);
}

function printWeatherInfo(weatherData){
    console.log(weatherData);
    const weatherInfo = document.getElementById('weatherInfo');
    const paragraph = document.createElement('p');
    paragraph.innerText = weatherData.location.name + ' is ' + weatherData.current.temp_c + ' degrees celcius';
    weatherInfo.appendChild(paragraph);
};