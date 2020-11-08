console.log('Client side javascript file is loaded!')



// fetch('http://localhost:3000/weather?address=%22Boston%22').then((response) =>  {
//      response.json().then((data) => {
//         if(data.error) {
//                 console.log(data.error)
//         } else {
//                 // console.log(data.Location)
//                 // console.log(data.forecast)
//         }
//      })
// })

const weatherForm = document.querySelector('form')
const searchElement = document.querySelector('input')

const messageOne = document.querySelector('#message-one')
const messageTwo = document.querySelector('#message-two')

weatherForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const location = searchElement.value;
        messageOne.textContent = 'Loading'
        messageTwo.textContent = '';    

        fetch(`http://localhost:3000/weather?address=%22${location}%22`).then((response) =>  {
                     response.json().then((data) => {
                        if(data.error) {
                                messageOne.textContent = data.error

                        } else {
                               
                                messageOne.textContent = data.Location;
                                messageTwo.textContent = data.forecast
                        }
                     })
                })
})

