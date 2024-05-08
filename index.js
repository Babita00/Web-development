
require('dotenv').config()
// Load environment variables from .env file
console.log(process.env) // remove this after you've confirmed it is working


console.log("Hello Node");

const express = require('express')//require module syntax//or // import express from "express"

const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/facebook', (req, res) => {
    res.send("iambabita")
})
app.get('/login', (req, res) => {
    res.send('<h1> Login here </h1>')
})
app.get('/youtube', (req, res) => {
    res.send('<h2>Backend</h2>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})