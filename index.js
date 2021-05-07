require('dotenv').config()
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    return res.send(`My wealth and treasures? If you want it, I'll let you have it. Look for it, I left all of it at that place!`)
})

app.get('/test', (req, res) => {
    return res.send(`test test`)
})

module.exports = app.listen(process.env.PORT || 5000, () => {
    console.log(`running on port ${process.env.PORT || 5000}`);
})

//test with secret again github-webhook test test compat