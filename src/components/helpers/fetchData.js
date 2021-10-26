import axios from 'axios'


const getData = async(endpoint = 'todos') => {
    const API_URL = `https://jsonplaceholder.typicode.com/${endpoint}`;
    let response = ''

    try {
        response = await axios.get(API_URL);
        // console.log(response)
        
        let { data } = response
        return data;
        // console.log(data)
    } catch (error) {

        console.log(error)
        console.log(response)
        return { 'error': 'Resource not found' }
    }
}


export default getData