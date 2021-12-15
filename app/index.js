const express = require('express');
const axios = require('axios');

const PORT = process.env.PORT || 5000;
const app = express();

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