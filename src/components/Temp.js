import React, { useEffect, useState } from "react";


const Temp  = ({tempinfo}) => {

    const {
        temp,
        humidity,
        pressure,
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


    const fahrenheitToCelsius =  Math.round((temp - 32) * 5/9);
    return (
        <>
            <div className="sub-container-2">
<div className="icon">
{/* <i className={`wi ${weatherState}`}></i> */}
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

</div>
        </>
    )
}

export default Temp;