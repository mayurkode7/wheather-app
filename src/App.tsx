import "./App.css"

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <div className='search-box'>
          <i
            className='fa-solid fa-location-dot
          '
          ></i>
        </div>
        <input type='text' placeholder='Enter your locatin' />
        <button className='fa-solid fa-magnifying-glass'></button>
      </div>

      <div className='not-found'>
        <img src='images/404.png' alt='Page not found!' />
        <p>Oops! Invalid Location!</p>
      </div>

      <div className='wether-box'>
        <img src='' alt='' />
        <p className='temperature'></p>
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
