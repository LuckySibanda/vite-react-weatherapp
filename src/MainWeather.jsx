import React from "react";
import PropTypes from 'prop-types'

export default function Weather(props) {

    return(
        <section className="main--container">
            <span id="main--information--container">
                <div className='location--information'>
                    {/* <p className="date--time">
                        {props.date}
                    </p> */}
                    <p className="location">
                        {props.location}
                    </p>
                </div>

                <div className="main--temp">
                    <p className="description">
                        {props.description}
                    </p>
                    <span id="current--temp--container">
                        <h1 className="current--temp">
                            {props.mainTemp}
                        </h1>
                        <p className='degrees'>°C</p>
                    </span>
                    
                </div>
            </span>
            

            <div className="extra--information--container">
                <div>
                    <span className="category">
                        Feels like
                    </span>
                    <span className="category--value">
                        {props.feelsLike} °C
                    </span>
                </div>
                <div>
                    <span className="category">
                        Humidity
                    </span>
                    <span className="category--value">
                        {props.humidity}
                    </span>
                </div>
                <div>
                    <span className="category">
                        Wind
                    </span>
                    <span className="category--value">
                        {props.windSpeed} km/h {props.windDirection}
                    </span>
                </div>
            </div>

            <div className="forecast--section">
                <div className="forecast--day">
                    <p className="day">{props.day_1}</p>
                    <div className="high-low">
                        <div>{props.maxTemp_1}°</div>
                        <div>{props.minTemp_1}°</div>
                    </div>
                </div>


                <div className="forecast--day">
                    <p className="day">{props.day_2}</p>
                    <div className="high-low">
                        <div>{props.maxTemp_2}°</div>
                        <div>{props.minTemp_2}°</div>
                    </div>
                </div>


                <div className="forecast--day">
                    <p className="day">{props.day_3}</p>
                    <div className="high-low">
                        <div>{props.maxTemp_3}°</div>
                        <div>{props.minTemp_3}°</div>
                    </div>
                </div>
            </div>

            <footer>
            Copyright &#169; 2023 All Rights Reserved. by Lucky Sibanda
         </footer>
        </section>

// "scripts": {
//     "deploy": "gh-pages -d dist",
//     "predeploy": "vite build",
//     // ... other scripts
//   }
    )
}

Weather.propTypes = {
    description: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    mainTemp: PropTypes.number.isRequired,
    feelsLike: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    windSpeed: PropTypes.number.isRequired,
    windDirection: PropTypes.string.isRequired,

    day_1: PropTypes.string.isRequired,
    maxTemp_1: PropTypes.number.isRequired,
    minTemp_1: PropTypes.number.isRequired,

    day_2: PropTypes.string.isRequired,
    maxTemp_2: PropTypes.number.isRequired,
    minTemp_2: PropTypes.number.isRequired,

    day_3: PropTypes.string.isRequired,
    maxTemp_3: PropTypes.number.isRequired,
    minTemp_3: PropTypes.number.isRequired,
};