const express = require('express')
const app = express()

app.get('/',(req, res) => {
    res.send('Hello World')
})

app.get('/getname', (req, res) => {
    res.send('Kritlada Tanawattanatakul')
})

app.get('/getprofile', (req, res) => {
    let data = {
        name: 'Kritlada Tanawattanatakul',
        age: 19,
        apocalypse: 'Sleep some more',
        detail: 'I am study at Bangkok University Multimedia and Entertainment Engineering'
    }
    res.send(data)
})

app.get('/getabout', (req, res) => {
    let data = {
        name: 'Kritlada Tanawattanatakul',
        age: 19,
        email: 'kritlada.tana@bumail.net',
        address: 'My Place7',
    }
    res.send(data)
})

app.get('/getproject', (req, res) => {
    let data = {
        project_name: 'Kritlada-node',
        project_description: 'เพื่อนฉัน',
        project_link: 'https://www.youtube.com/watch?v=DY8oDtfZWGo',
    }
    res.send(data)
})

app.get('/getcontact', (req, res) => {
    let data = {
       address: 'My Place7',
       email: 'kritlada.tana@bumail.net',
       phone_number: '0812492241',
    }
    res.send(data)
})

app.listen(3000, () => {
    console.log('Start server at port 3000')   
})