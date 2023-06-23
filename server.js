// database
const database = require('./connectDB')

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// tu form len server
app.use(bodyParser.urlencoded({ extended: true }))

// su dung ajac xmlhttp fetch
app.use(bodyParser.json())

const { get } = require('http')
const AccountModel = require('./connectDB')

app.use(express.json())
// libary handlebar express
const { engine } = require('express-handlebars');
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// đường dẫn tĩnh static
const path = require('path')

// đưa file tĩnh lên 
app.use('/congkhai', express.static(path.join(__dirname, '/public')))
app.get('/',)
// router
const routerviews = require('./routers/router')
const router = require('./routers/router')
const { accessSync } = require('fs')

// render views 
app.get('/', routerviews)
app.get('/giohang', routerviews)
app.get('/dangky', (req, res) => {
    const dgdan = path.join(__dirname, '/public/index.html')
    res.sendFile(dgdan)
})
app.get('/dangnhap', routerviews)


// dang ky submit
app.post('/dangky', (req, res) => {
    const username1 = req.body.username;
    const password1 = req.body.password;
    const useremail1 = req.body.useremail;
    AccountModel.findOne({
        username: username1
    })
        .then(data => {
            console.log("du lieu", data)
            return data
        })
        .then(data => {
            if (data == null) {
                AccountModel.create({
                    username: username1,
                    password: password1,
                    useremail: useremail1,
                })
                res.send("tai khoan tao thanh cong")
            } else {

                res.send("tai khoan da ton tai")
            }
        })
        .catch(data => {
            res.send("errer")
        })
})

// doi mat khau
app.get('/doimatkhau', (req, res) => {
    res.render('doimatkhau')

})
app.post('/doimatkhau', (req, res, next) => {
    const username1 = req.body.username
    const password1 = req.body.password
    const cfpassword1 = req.body.cfpassword
    AccountModel.findOne({
        username: username1
    })
        .then(data => {
            if (data == null) {
                res.send("khong tim thay tai khoan nay")
            } else {
                AccountModel.findOne({
                    password: password1
                })
                    .then(data => {
                        if (data != null) {
                            AccountModel.updateOne({
                                password: cfpassword1
                            })
                            res.send("doi mat khau thanh cong")
                        } else {
                            res.send("nhap sai mat khau")
                        }
                    })
                    .catch(err => {
                        res.send("err", err)
                    })
            }
        })
        .catch(data => {
            res.send("err", err)
        })
})


app.listen(3200, () => {
    console.log(`Example app listening on port ${3200}`)
})




// /search?q=f8 lap trinh &color=red&name=huy