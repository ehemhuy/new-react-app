import axios from 'axios'

export const getCoronaAPI = async (country) => {
    const {data} = await axios.get(`https://api.covid19api.com/total/country/${country}`)
    console.log(data[0])
    if ( data[0]===undefined ) return {}
    const countryCode = data[Object.keys(data)[Object.keys(data).length-1]].CountryCode
    const c = data[Object.keys(data)[Object.keys(data).length-1]].Country
    const time = data[Object.keys(data)[Object.keys(data).length-1]].Date
    const total = data[Object.keys(data)[Object.keys(data).length-1]].Confirmed
<<<<<<< HEAD
    const deaths = data[Object.keys(data)[Object.keys(data).length-1]].Deaths
    const recovers = data[Object.keys(data)[Object.keys(data).length-1]].Recovered
    return {time, total, c, countryCode, deaths, recovers}
}
=======

    return {time, total, c}
}
>>>>>>> 0b8bdb23319f30c1ed56333bf70cdcb5409ab981
