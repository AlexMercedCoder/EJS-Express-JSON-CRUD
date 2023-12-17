// ***********************************************
//                 DEPENDENCIES
// ***********************************************
const express = require("express")
const router = express.Router() // create new router



// ***********************************************
//                 Router Middleware
// ***********************************************



// ***********************************************
//                 Router Routes
// ***********************************************
// MAIN ROUTe ("/")
router.get("/", (req, res) => {
    res.render("index.ejs") // render views/index.ejs
})



// ***********************************************
//                 Export Router
// ***********************************************
module.exports = router