// ***********************************************
//                 DEPENDENCIES
// ***********************************************
const dotenv = require("dotenv")
dotenv.config() // read .env vars into process.env
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const PORT = process.env.PORT || 3000 // port to listen on

// import routers
const rootRouter = require("./controllers/root.js")
const sampleRouter = require("./controllers/sample.js")





// ***********************************************
//               APPLICATION OBJECT
// ***********************************************
const app = express()






// ***********************************************
//                 Middleware
// ***********************************************
app.use(morgan("dev")) // logging
app.use(methodOverride("_method")) // use ?_method to override form request method
app.use(express.urlencoded({extended: true})) // parse urlencoded bodies
app.use(express.json()) // parse json bodies
app.use(express.static("public")) // public folder for static files








// ***********************************************
//                 ROUTERS
// Always keep rootRouter at the bottom of the list
// ***********************************************
app.use("/sample", sampleRouter)
app.use("/", rootRouter) // for routes with a set prefix








// ***********************************************
//                 SERVER LISTENER
// ***********************************************
app.listen(PORT, () => {
    console.log(`Your are listening on port ${PORT}`)
})