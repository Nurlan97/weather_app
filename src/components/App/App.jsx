import { useState } from "react"
import Form from '../Form'

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
            <Form 
            cityName={cityName} 
            setCityName={setCityName} 
            setWeather={setWeather} 
            setError={setError}/>

            {
                weather &&
                <div>
                    <p>Город: {weather.name}</p>
                    <p>Температура: <img src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="" />{weather.main.temp}</p>
                    <p>Рассвет: {getTime(weather.sys.sunrise)}</p>
                    <p>Закат: {getTime(weather.sys.sunset)}</p>
                </div>
            }
            {
                err &&
                <div>
                    Error!!!!
                </div>
            }
        </div>
    )
}

export default App