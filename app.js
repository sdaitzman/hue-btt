#!/usr/bin/env node
const group = 1

const express = require('express')
const app = express()
const port = 3000

app.get('/brightness', (req, res) => {
    res.send('Hello world')
    console.log(req.query)
    let newVal = +req.query.brightness
    console.log(`newVal: ${newVal}`)

    

})

app.listen(port, () => {console.log(`Example app listening on port ${port}!`)})