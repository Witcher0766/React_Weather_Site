import { useEffect, useState } from 'react';
import './App.css';
import Temp from './components/Temp';
// import CloudIcon from '@mui/icons-material/Cloud';

// https://api.openweathermap.org/data/2.5/weather?q=patna&appid=2dc0ef37a6c861ebf7b4f8df272e4d4b

function App() {
  const [searchValue, setValue] = useState("Patna");

  const [tempinfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {

    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=2dc0ef37a6c861ebf7b4f8df272e4d4b`;
      let res = await fetch(url);
      let data = await res.json();

      const {temp, humidity, pressure} = data.main;
      const {main: weathermood} = data.weather[0];
      const {name} = data;
      const {speed} =data.wind;
      const {country, sunset} = data.sys;


      const updataedWeatherInfo = {
        temp, 
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset
      }

      setTempInfo(updataedWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
   <>
   <div className="main-container">

   <div className="sub-container">
    <input type="text" 
    name="place" 
    id="place" 
    autoFocus
    placeholder='Search'
    value={searchValue}
    onChange={(e) => setValue(e.target.value)}
    className='searchItem' />

    <button className='btn' type='button'
    onClick={getWeatherInfo}
    >Search</button>
   </div>

   <Temp tempinfo={tempinfo}/>
   </div>
   </>
  );
}

export default App;
