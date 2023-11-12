import React, { useEffect, useState } from "react";
import styles from "./Temp.module.css";
import cloudy from '../../assets/cloudy.png'
import rainy from '../../assets/rain.png';
import time from '../../assets/time.png';
import temp1 from '../../assets/temp.png';
import country1 from '../../assets/country.png';



const Temp  = ({tempinfo}) => {

    const {
        temp,
        humidity,
        pressure,
        feels_like,
        temp_min,
        temp_max,
        weathermood,
        name,
        speed,
        country,
        sunset,
    } = tempinfo;

    const [weatherState, setWeatherState] = useState("");

    useEffect(() => {
        if (weathermood) {
            switch (weathermood) {
              case "Clouds":
                setWeatherState("wi-day-cloudy");
                break;
              case "Haze":
                setWeatherState("wi-fog");
                break;
              case "Clear":
                setWeatherState("wi-day-sunny");
                break;
              case "Mist":
                setWeatherState("wi-dust");
                break;
      
              default:
                setWeatherState("wi-day-sunny");
                break;
            }
          }
    }, [weathermood]);

    let sec = sunset;
    let date = new Date(sec * 1000);
    let timestr = `${date.getHours()}:${date.getMinutes()}`;
    
    const fahrenheitToCelsius =  Math.round(temp-273.15);
    const maxi =  Math.round(temp_max-273.15);
    const mini =  Math.round(temp_min-273.15);
    const feels = Math.round(feels_like - 273.15);
    return (
        <>
          {/* <div className="sub-container-2">
<div className="icon">
<i className={`wi ${weatherState}`}></i>
</div>

<div className="sub-div">
<div className="sub-1">
<span>{fahrenheitToCelsius}°C</span>
</div>

<div className="sub-2">
<div>{weathermood}</div>
<div>{name}, {country}</div>
</div>

<div className="date">{new Date().toLocaleString()}</div>
</div>

<div className="sub-div-2">

<div className="icon-1">
<i className={"wi wi-sunset"}></i>
<p>{timestr} PM
<br />
Sunset
</p>
</div>
<div className="icon-2">
<i className={"wi wi-humidity"}></i>
<p>Humidity
<br />
{humidity}
</p>
</div>
<div className="icon-1">
<i className={"wi wi-rain"}></i>
<p>Pressure
<br />
{pressure}
</p>
</div>
<div className="icon-1">
<i className={"wi wi-strong-wind"}></i>
<p>Wind
<br />
{speed}
</p>
</div>
</div>

</div> */}

<div className={styles["box-container"]}>
<div className={styles["first"]}>
<p className={styles["cel"]}>{fahrenheitToCelsius}</p>
<div className={styles["mood"]}>
<p>&#x2103;</p>
<p className={styles["mod"]}>{weathermood}</p>
</div>
</div>
<div className={styles["second"]}>
<img src={cloudy} alt="cloudy" />
<div className={styles["type-box"]}>
<p>Pressure: {pressure} mbar</p>
<p>Max Temp: {maxi} &#x2103;</p>
<p>Min Temp: {mini} &#x2103;</p>
</div>
</div>
</div>


<div className={styles["box-container-2"]}>
<div className={styles["box-1"]}>
<img src={rainy} alt="rainy" />
<p>Humidity: {humidity}</p>
</div>
<div className={styles["box-1"]}>
<img src={time} alt="time" />
<p>Time: {timestr}</p>
</div>
<div className={styles["box-1"]}>
<img src={temp1} alt="temp1" />
<p>Feels Like: {feels}</p>
</div>
<div className={styles["box-1"]}>
<img src={country1} alt="country" />
<p>Country: {country}</p>
</div>
</div>

        </>
    )
}

export default Temp;