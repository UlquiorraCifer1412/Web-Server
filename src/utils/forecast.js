const request = require('request');

const forecast = (latitude, longtitude , callback) => {
        const url = 'http://api.weatherstack.com/current?access_key=40e0317c834bc4796d92b90e50eb70c1&query=' + longtitude + ','+  latitude + '&units=f';

        request({ url,  json: true}, (error, {body}) => {
                if(error) {
                        callback('Unable To connect to weather service', undefined)
                } else if(body.error) {
                        callback('Unable To Find Location', undefined)
                } else {
                        callback(undefined ,body.current.weather_descriptions[0] + '. Its Currently ' + body.current.temperature + 
                                 ' degrees out , it feels like '   + body.current.feelslike + ' degrees out')
                }
        })
}

module.exports = forecast