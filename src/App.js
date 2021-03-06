import React, { useState } from 'react';

import './App.css';
const api=
{
  key:"9d3b16a3832376339de1b60f039cdd51",
  base: "https://api.openweathermap.org/data/2.5/"
  
}

function App() {

  const [query, setQurey]=useState('');
  const [weather, setWeather]=useState({ });
  const search = evt =>
  {
if(evt.key==="Enter")
{
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
.then(res => res.json())
.then(result =>
  {
    setWeather(result);
    setQurey('');
 console.log(result);

});
}
  }

 const dateBuilder =(d)=>
  {
    let months = ["january", "February" ,"March", "April", "May", "June", "July","August","September","October","November","December"];

    let days = ["Sunday" ,"Monday", "Tuesday", "wednesday","Thursday", "Friday","Saturday"];
 
    let day =days[d.getDay()];
    let date = d.getDate();
    let month =months[d.getMonth()];
    let year =d.getFullYear();
 return `${day} ${date} ${month} ${year}`
  }

  
  return (
    <div className=
    {
      (typeof weather.main !="undefined") ? ((weather.main.temp >20) ? 'app-warm': 'app')
 : 'app' }>
      <main>
        <div className="search">
          <h2>WEATHER SEARCH</h2>
          <input type="text" placeholder="ENTER THE LOCATION HERE..." className="search-bar"
          onChange={e => setQurey(e.target.value)}
          value={query}
          onKeyPress={search}
          />
         </div>

{(typeof weather.main!= "undefined") ? 
(
<div>
<div className="location-box">
  <div className="location">{weather.name},{weather.sys.country} </div>


<div className="date"> {dateBuilder(new Date())} </div>

<div className="weather-box">
 <div className="temp">
   {Math.round(weather.main.temp)} C
  </div>
<div className="weather">{weather.weather[0].main}</div>
</div>
</div>
</div>
  ) : ('')
}
        </main>
    </div>

  );
}export default App;
