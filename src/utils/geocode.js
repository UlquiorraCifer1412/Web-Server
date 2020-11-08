const request = require('request');

const geocode = (address , callback) => {
        const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoidWxxdWlvcnJhY2lmZXIiLCJhIjoiY2tnbHVocW41MnBwNTJ0czFreGJ0cHM0aCJ9.m0C6YoVopDHghOBPD9qe-g&limit=1';

        request({ url, json: true} , (error, {body}) => {
                
                if(error) {
                        callback('Unable to connect to location services!', undefined)
                } else if(!body.features.length) {
                        callback('Unable To Find Location, try another search.', undefined)
                } else {
                        callback(undefined, {
                               latitude: body.features[0].center[1],
                               longitude: body.features[0].center[0],
                               Location: body.features[0].place_name
                        })
                }
        })
}

module.exports = geocode