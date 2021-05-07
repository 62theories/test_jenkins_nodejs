if(process.env.NODE_ENV === 'production') {
    require('dotenv').config()
}
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    return res.send(`My wealth and treasures?`)
})

app.get('/test', (req, res) => {
    return res.send(`test test`)
})

app.get('/data', (req, res) => {
    return res.send(`data`)
})

module.exports = app.listen(process.env.PORT || 5000, () => {
    console.log(`running on port ${process.env.PORT || 5000}`);
})

//hook work now clear env success?