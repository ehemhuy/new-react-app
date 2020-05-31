import axios from 'axios'

export const getCoronaAPI = async (country) => {
    const data = [await axios.get(`https://api.covid19api.com/total/country/${country}`), await axios.get(`https://api.covid19api.com/live/country/${country}`)]
    
    
      console.log(data[0].data[data[0].data.length-1])
      console.log(data[1].data[0])
   
    if ( data[1].data[0]===undefined ) return {}
    const countryCode = data[1].data[0].CountryCode
    const c = data[0].data[data[0].data.length-1].Country
    const time = data[0].data[data[0].data.length-1].Date
    const total = data[0].data[data[0].data.length-1].Confirmed
    const deaths = data[0].data[data[0].data.length-1].Deaths
    const recovers = data[0].data[data[0].data.length-1].Recovered
    return {time, total, c, countryCode, deaths, recovers}
}