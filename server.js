const express = require('express')
const app = express()
const router = express.Router()

// set view engine ejs
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    // let mascot = [
    //     { name: 'sammy', organization: 'digital ocean', birth: 2011 },
    //     { name: 'turu', organization: 'digital lib', birth: 2000 },
    //     { name: 'pari', organization: 'digital farmer', birth: 2007 }
    // ]

    // let tagline = "no programing concept is complet without a cute animal mascot";
    // let title = "main page"


    let data = {
        mascot: [
            { name: 'sammy', organization: 'digital ocean', birth: 2011 },
            { name: 'turu', organization: 'digital lib', birth: 2000 },
            { name: 'pari', organization: 'digital farmer', birth: 2007 }
        ],
        tagline: "no programing concept is complet without a cute animal mascot",
        title: "main page"
    }

    res.render('pages/index', { data: data })

})

app.get('/about', function (req, res) {
    let data = {
        title: "About page"
    }

    res.render('pages/about', { data: data })
})

app.get('/boots', function (req, res) {
    let data = {
        title: 'halaman tampil',
        content: 'pages/isi'
    }
    res.render('layouts/wrapper', { data: data })
})

app.listen(3000);
console.log('server is runing on http://localhost:3000')
