const express = require('express');
const app = express();
const userRouter = require('./routes/users');

//Server listening at port 3000
app.listen(3000)
//This is the render engine, you must have one, ejs or pug
app.set('view engine', 'ejs')
//App uses the user router, with the parent domain of whatever/users
app.use('/users',userRouter)
//static files middleware
//app.use(express.static("public"))

//just prints subdomain
function logger(req,res,next){
    console.log(req.originalUrl)
    next()
}

//Index Route
/*when someone navigates to this route "/" a get
request is sent to the server*/
app.get('/',(req,res,next)=>{
    console.log("Hello World");
    /*
    //Respond to the request with a simple string "Hi"
    res.send("Hi");

    //the server sends the status 500
    //which means there's an internal error with the server
    res.status(500);
    //You can also append a message like this
    res.status(500).send("Ugh, sorry man, something went wrong");
    //Or reply with a json
    res.status(500).json({"message": "Error"});

    //You can also send files like this
    res.download('server.js');
    */ 

    //Let's render some ejs (all the views should be in the views folder)
    //we also pass some data (with variable name of "text")
    res.render("index", {text:"This is text sent from the server"})
})
