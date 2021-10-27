import * as React from 'react'
import getData from '../helpers/fetchData'




function Hero() {
    const [stateLocation, setStateLocation] = React.useState('')
    const [weatherInfo, setWeatherInfo] = React.useState({})
    const [message, setmessage] = React.useState('')

    const handleInput = (event) => {
        event.preventDefault()

        const location = event.target.value
        setStateLocation(location)  
    }

    // console.log(stateLocation)

    const handleSubmit = async (event) => {
        event.preventDefault()
        const response = await getData(stateLocation)

        console.log(response)

        if(response) {
            const {location: {country, lon, lat}} = response
            const {current: {temp_c, temp_f, condition: {text, icon, code}}} = response

            setWeatherInfo({country, lon, lat, temp_c, temp_f, text, icon, code})
        } 
    }


    
    const {country, lon, lat, temp_c, temp_f, text, icon, code} = weatherInfo

    return (
        <div>

            <h1> Weather App</h1>
            <p>Use this App to find out the current weather info of a location.</p>
            <form onSubmit={handleSubmit}> 
                <input type="text" 
                placeholder="location"
                onChange={handleInput}
                ></input>
                <input type="submit" value="GO"></input>
            </form>
            
            country: {country} <br />
            Longitude: {lon} <br />
            Latitude: {lat} <br />
            Temperature in degrees celcius: {temp_c} <br />
            Temperature in degrees fahrenheit: {temp_f} <br />
            {icon && <img src={icon} alt="Condition" />}<br/>
            Code: {code} <br />
            
        </div>
    )
}

export default Hero
