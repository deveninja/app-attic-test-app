const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const app = express()
const { quotesRoute } = require('./routes')
const cors = require('cors')
dotenv.config({ path: './config/config.env'})



// Enable CORS
app.use(cors())

// Body Parsing
app.use(express.json())

// URL Encoding
app.use(express.urlencoded({extended: true}))

app.use('/static', express.static(__dirname + '/public'));

const setEndpoints = (routesObj = {}) => {
   for(let route in routesObj){
     app.use(route, routesObj[route])
   }
}

/**
 * @description Set routes by providing a key value Pair.
 * key = :path
 * value = :router
 * 
 */
setEndpoints({
   '/api/v1/quotes': quotesRoute
})

if(process.env.NODE_ENV === 'production') {
   app.use(express.static('client/build'))

   app.get('/*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
}



const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log('App Attic App is running at port: ', PORT))