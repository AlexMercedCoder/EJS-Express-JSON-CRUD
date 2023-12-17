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
// MAIN ROUTe ("/sample")
router.get("/", (req, res) => {
    res.render("sample/index.ejs") // render views/sample/index.ejs
})



// ***********************************************
//                 Export Router
// ***********************************************
module.exports = router