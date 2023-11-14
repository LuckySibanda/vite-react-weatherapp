import React from "react"
import Weather from "./MainWeather"


function App() {

    
    // Input value
    const [inputData, setInputData] = React.useState({
        city: ""
    })

    // Handle input value
    function handleChange(event) {
        const {type, name, value, checked} = event.target

        setInputData(prevData => ({
            ...prevData,
            [name]: type === 'checked' ? checked : value
        }))
    }


  // Initialize API fetch

  const [weatherCard, setWeatherCard] = React.useState({
    location: "",
    description: "",
    dateTime: "",
    mainTemp: 0,
    feelsLike: 0,
    humidity: 0,
    windSpeed: 0,
    windDirection: "",

    day_1: "",
    maxTemp_1: 0,
    minTemp_1: 0,

    day_2: "",
    maxTemp_2: 0,
    minTemp_2: 0,

    day_3: "",
    maxTemp_3: 0,
    minTemp_3: 0
  })

  const [weatherData, setWeatherData] = React.useState([])

  const apiKey = '75dea4785572450eb40171847231311'

// importing api
// const apiKey = import.meta.env.API_KEY;

  React.useEffect(() => {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${inputData.city}&days=3&aqi=no&alerts=no`)
        .then(response => response.json())
        .then(returnData => setWeatherData(returnData))

}, [inputData.city])


    // Parse API data to weatherCard
    function handleSubmit(event) {
        event.preventDefault()

        //  initialize new array to api return data to local scope
        const apiDataArray = weatherData

        const apiDescription = apiDataArray.current.condition.text
        const apiMainTemp = apiDataArray.current.temp_c
        const apiFeelsLike = apiDataArray.current.feelslike_c
        const apiHumidity = apiDataArray.current.humidity
        const apiWindDir = apiDataArray.current.wind_dir
        const apiWindSpeed = apiDataArray.current.wind_kph

        const apiLocation = apiDataArray.location.name
        const apiLocalTime = apiDataArray.location.localtime

        const apiDay_1 = apiDataArray.forecast.forecastday[0].date
        const apiMaxTemp_1 = apiDataArray.forecast.forecastday[0].day.maxtemp_c
        const apiMinTemp_1 = apiDataArray.forecast.forecastday[0].day.mintemp_c
        // console.log(apiMinTemp_1)

        const apiDay_2 = apiDataArray.forecast.forecastday[1].date
        const apiMaxTemp_2 = apiDataArray.forecast.forecastday[1].day.maxtemp_c
        const apiMinTemp_2 = apiDataArray.forecast.forecastday[1].day.mintemp_c
        // console.log(apiMinTemp_2)


        const apiDay_3 = apiDataArray.forecast.forecastday[2].date
        const apiMaxTemp_3 = apiDataArray.forecast.forecastday[2].day.maxtemp_c
        const apiMinTemp_3 = apiDataArray.forecast.forecastday[2].day.mintemp_c
        // console.log(apiMinTemp_3)


        //  Parse api data to local object
        setWeatherCard(prevCard => ({
            ...prevCard,
                location: apiLocation,
                description: apiDescription,
                dateTime: apiLocalTime,
                mainTemp: apiMainTemp,
                feelsLike: apiFeelsLike,
                humidity: apiHumidity,
                windSpeed: apiWindSpeed,
                windDirection: apiWindDir,

                day_1: apiDay_1,
                maxTemp_1: apiMaxTemp_1,
                minTemp_1: apiMinTemp_1,

                day_2: apiDay_2,
                maxTemp_2: apiMaxTemp_2,
                minTemp_2: apiMinTemp_2,

                day_3: apiDay_3,
                maxTemp_3: apiMaxTemp_3,
                minTemp_3: apiMinTemp_3
        }))

    }

    // console.log(weatherCard)
    // console.log(weatherCard.maxTemp_1)
    console.log(weatherData)

    const getDayFromDate = (dateString) => {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        
        // Create a new Date object from the dateString
        const date = new Date(dateString);
        
        // Get the day of the week (0-6, where 0 is Sunday and 6 is Saturday)
        const dayOfWeekIndex = date.getDay();
        
        // Use the index to get the day name from the array
        return daysOfWeek[dayOfWeekIndex];
    };
    
    const firstDate = weatherCard.day_1;  
    const secondDate = weatherCard.day_2; 
    const thirdDate = weatherCard.day_3;  

    // Get the days for each date
    const firstDay = getDayFromDate(firstDate);
    const secondDay = getDayFromDate(secondDate);
    const thirdDay = getDayFromDate(thirdDate);
     
      

  return (
    <main>

        <div className="icon">⚡</div>
            
        <form className="input--search--container" onSubmit={handleSubmit}>
        {/* ⚡ */}
            <input
                className="search--input"
                type="text"
                placeholder="Search City"
                name="city"
                value={inputData.city}
                onChange={handleChange}
            />

            <button className="submit--button">Search</button>
        </form>

        <Weather
            location={weatherCard.location}
            description={weatherCard.description}
            date={weatherCard.dateTime}
            mainTemp={Math.round(weatherCard.mainTemp)}
            feelsLike={Math.round(weatherCard.feelsLike)}
            humidity={Math.round(weatherCard.humidity)}
            windSpeed={Math.round(weatherCard.windSpeed)}
            windDirection={weatherCard.windDirection}

            day_1={firstDay}
            maxTemp_1={Math.round(weatherCard.maxTemp_1)}
            minTemp_1={Math.round(weatherCard.minTemp_1)}

            day_2={secondDay}
            maxTemp_2={Math.round(weatherCard.maxTemp_2)}
            minTemp_2={Math.round(weatherCard.minTemp_2)}

            day_3={thirdDay}
            maxTemp_3={Math.round(weatherCard.maxTemp_3)}
            minTemp_3={Math.round(weatherCard.minTemp_3)}
            />

        
    </main>
  )
}

export default App
