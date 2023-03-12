import "./App.css"
import NotFound from "./images/404.png"
import Clear from "./images/clear.png"
import Cloud from "./images/cloud.png"
import Mist from "./images/mist.png"
import Rain from "./images/rain.png"
import Snow from "./images/snow.png"

function App() {
  return (
    <div className='container'>
      <div className='search-box'>
        <i className='fa-solid fa-location-dot'></i>
        <input type='text' placeholder='Enter your location' />
        <button className='fa-solid fa-magnifying-glass'></button>
      </div>

      <div className='not-found'>
        <img src={NotFound} alt='Page not found!' />
        <p>Oops! Invalid Location!</p>
      </div>

      <div className='weather-box'>
        <img src='' alt='' />
        <p className='temperature'>
          <span></span>
        </p>
        <p className='description'></p>
      </div>

      <div className='weather-details'>
        <div className='humidity'>
          <i className='fa-solid fa-water'></i>
          <div className='text'>
            <span></span>
            <p>Humidity</p>
          </div>
        </div>
        <div className='wind'>
          <i className='fa-solid fa-wind'></i>
          <div className='text'>
            <span></span>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
