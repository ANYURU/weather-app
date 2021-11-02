
import * as React from 'react'
import getData from '../helpers/fetchData'
import '../../styles/Hero.css'




function Hero() {
    const [stateLocation, setStateLocation] = React.useState('')
    const [weatherInfo, setWeatherInfo] = React.useState({})
    const [msg, setMessage] = React.useState('')

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

        if(response.hasOwnProperty('message')) {
            setMessage(response.message)
            setWeatherInfo(response)
            

        } else {
            const {location: {name, country, lon, lat}} = response
            const {current: {temp_c, temp_f, condition: {text, icon, code}}} = response

            setWeatherInfo({name, country, lon, lat, temp_c, temp_f, text, icon, code})
            console.log(response.length)
        }
    }


    
    const {name, country, lon, lat, temp_c, temp_f, text, icon, code} = weatherInfo

    return (
        <>
            <div style={{"display":"flex", "flex-direction": "column", "align-items": "center", "height":"100%"}}>
                <div style={{"display": "flex", "flex-direction": "column", "alignItems":"center"}}>
                    <h1> Weather App</h1>
                    <p>Use this App to find out the current weather info of a location.</p>
                </div>

                <form onSubmit={handleSubmit} style={{"display":"flex","gap":"10px"}}> 
                    <input type="text" 
                    placeholder="location"
                    onChange={handleInput}
                    ></input>
                    <input type="submit" value="GO"></input>
                </form>

                <div>
                    {weatherInfo.hasOwnProperty('message') ?  <div>{msg}</div>    :   <div>
                                                                                    name: {name} <br />
                                                                                    text: {text} <br />
                                                                                    country: {country} <br />
                                                                                    Longitude: {lon} <br />
                                                                                    Latitude: {lat} <br />
                                                                                    Temperature in degrees celcius: {temp_c} <br />
                                                                                    Temperature in degrees fahrenheit: {temp_f} <br />
                                                                                    {icon && <img src={icon} alt="Condition" />}<br/>
                                                                                    Code: {code} <br />
                                                                                </div> }
                    
                </div>

                <div style={{"display":"flex", "flex-direction": "column", "align-items": "center", "font": "Helvetica Neue Ultra Thin"}}>
                    <h1>Instructions</h1>
                    <div style={{"display":"flex", "flex-direction": "column", "align-items": "left"}}>
                        <div>1. Enter the location whose weather you want to find out Above </div>
                        <div>2. Click Go.</div>
                    </div>                
                </div>
                <div style={{"padding-top": "50px"}}>A summary of the weather condition of the specified location will be displayed.</div>                
            </div>
            
        </>
    )
} 
    
export default Hero