const express = require("express");

// app.get("/", (req, res) => {
//     res.status(200).send("This is my Home page of first web app using express");
// });
// app.get("/about", (req, res) => {
//     res.send("This is my About page of first web app using express");
// });
// app.post("/about", (req, res) => {
//     res.send("This is a post request of my about page of first web app using express");
// });
// app.get("/services", (req, res) => {
//     res.send("This is my services page of first web app using express");
// });
// app.get("/contact", (req, res) => {
//     res.send("This is my Contact page of first web app using express");
// });
// app.get("/this", (req, res) => {
//     res.status(404).send("This page is not found on my website ankitpakhale.com");
// });


// -------------------------------------------------------------------------------------------------------


const path = require("path");
const fs = require("fs");

const app = express();
const port = 5500;


//  EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'))        // For serving static files
app.use(express.urlencoded())


// PUG SPECIFIC STUFF
app.set('view engine', 'pug')       // set the template engine as pug
app.set('views', path.join(__dirname, 'views'))         // set the view directory   

// ENDPOINTS
app.get('/', (req, res) => {
    const con = "This is the best content on internet so far so wisely...";
    const params = {'title' : 'This is the title', "content" : con}
    res.status(200).render('index.pug', params);    
})

app.post('/', (req, res) => {
    // console.log(req.body);
    name = req.body.name;
    age = req.body.age;
    email = req.body.email;
    gender = req.body.gender;
    address = req.body.address;
    more = req.body.more;

    let outputToWrite = `The name of the client is ${name}, ${age} years old, email id is ${email}, gender is ${gender}, lives in ${address}, and many others things are: ${more}`
    fs.writeFileSync('output.txt', outputToWrite)

    const params = {'message' : 'Your Message has been send Successfully'}
    res.status(200).render('index.pug', params);    
})

// START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on ${port}`);
})