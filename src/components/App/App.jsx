import { useState } from "react"
import Form from '../Form'
import './App.css'
import '../Error/Error'

const App = () => {
    const [weather, setWeather] = useState(null)
    const [cityName, setCityName] = useState("")
    const [err, setError] = useState(false)

    const inputHandler = (e) => {
        setCityName(e.target.value)
    }
    const getTime = (timeStamp) => {
        const time = new Date(timeStamp * 1000)
        const hours = time.getHours()
        const minutes = time.getMinutes()
        return `${hours}: ${minutes}`

    }

    return (
        <div className='container'>
            {/* {Form(cityName, setCityName, setWeather, setError)} */}

            <div className="form__container">

                <Form
                    cityName={cityName}
                    setCityName={setCityName}
                    setWeather={setWeather}
                    setError={setError}
                />

                {
                    weather &&
                    <div className='weather-info-container'>
                        <p className='cityName'>Город: {weather.name}</p>
                        <p className='temperature'>Температура: <img src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="" className='weather__img'/>{weather.main.temp}</p>
                        <p className='sunrise'>Рассвет: {getTime(weather.sys.sunrise)}</p>
                        <p className='sunset'>Закат: {getTime(weather.sys.sunset)}</p>
                    </div>
                }
                {/* <Error err={err}/> */}
                {
                    err &&
                    <div className='error'>
                        No City Found!!!
                    </div>
                }
            </div>

        </div>
    )
}

export default App