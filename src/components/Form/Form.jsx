import React from 'react';
import axios from 'axios';
import './Form.css'


const Form = ({cityName, setCityName, setWeather, setError}) => {
    const getWeatherData = (e) => {
        e.preventDefault()
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=06a501ae46c2cc403517b81240057529&units=metric`)
            .then(({ data }) => {
                setWeather(data)
                setCityName("")
                setError(false)
            })
            .catch((err) => {
                setError(true)
                setWeather(null)
            })

    }

    const inputHandler = (e) => {
        setCityName(e.target.value)
    }

    return (
        <form onSubmit={getWeatherData} className='form'>
            <input type="text" placeholder="Введите город" value={cityName} onChange={inputHandler} className='form__input'/>
            <button type='submit' className='form__btn'>Найти</button>
        </form>
    )
}

export default Form