const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;
const app = express();

// Middleware configurations:
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send("Welcome to your App!");
});

app.listen(PORT, function () {
    console.log(`Express server listening on port ${PORT}`);
})

// GET REQUESTS:
app.get("/users", (req, res) => {
    axios.get("http://jsonplaceholder.typicode.com/users")
        .then(function (response) {
            res.json(response.data);
        }).catch((error) => {
            res.json("error occured!");
        });
});

// POST Requests:
app.post("/getUserById", (req, res) => {
    if (!req.body.id) {
        res.json("No ID found in reqest body.")
    } else {
        axios.get(`https://jsonplaceholder.typicode.com/users/${req.body.id}`)
            .then((response) => {
                res.json(response.data)
            }).catch(function (error) {
                res.json("Error occured!")
            })
    }
})