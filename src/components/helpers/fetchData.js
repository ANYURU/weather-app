import axios from 'axios'


const getData = async(location = 'Kampala') => {
    const API_URL = `${process.env.REACT_APP_BASE_URL}?key=${process.env.REACT_APP_API_KEY}&q=${location}&days=1&aqi=no&alerts=no`;
    let response = ''

    try {
        response = await axios.get(API_URL);
        // console.log(response)
        
        let { data } = response
        return data;
        
    } catch (error) {

        console.log(error)
        // console.log(response)
        return { 'message': "Unable to find location. Try again." }
    }
}

export default getData