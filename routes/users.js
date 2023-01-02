//This file containes all the routes for user related subpages
const express = require('express');
const router = express.Router();
const users =[{"name":"John"}, {"name":"Jenny"}, {"name":"Jack"}, {"name":"Joe"}];

//Why are the paths not /user/...
//because they already have the /user from 
router.get('/', (req, res, next) => {
    res.json(users)
})

//GET PUT POST DELETE
//note the ":", in this way we can get dynamically whatever user we want
router
    .route('/:userId')
    .get((req, res, next) => {
        res.send("get user with id: {" + req.params.userId +"} {"+ req.user.name+"}")
    })
    .put((req, res, next) => {
        res.send("update user with id: {" + req.params.userId +"} {"+ req.user.name+"}")
    })
    .post((req, res, next) => {
        res.send("post user with id: {" + req.params.userId +"} {"+ req.user.name+"}")
    })
    .delete((req, res, next) => {
        res.send("delete with id: {" + req.params.userId +"} {"+ req.user.name+"}")
    })

//whenever you find a route with this id (userId), run this code, and then run the code above 👆
router.param("userId",(req,res,next,userId)=>{
    req.user = users[userId]
    //why next()? this function is middleware, and the page
    //will load ♾️ until you stop it telling it to do the next thing
    next();
})
//note that all the methods are concatenated, but you can divide them(code will be dirtier)

//Alert: be careful regarding the order you call the methods youtu.be/SccSCuHhOw0?t=1130 
module.exports = router;