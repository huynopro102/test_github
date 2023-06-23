const express = require('express');
const router = express.Router();

// trang chu
router.get('/',(req,res)=>{
    res.render('trangchu')

})
// router gio hang
router.get('/giohang',(req,res)=>{
    res.render('giohang')
})
// roter dang ky
router.get('/dangky',(req,res)=>{
    res.sendFile('/')
    res.render('dangky')
})
// roter dang nhap
router.get('/dangnhap',(req,res)=>{
    res.render('dangnhap')
})

//đường dẫn có param để ở cuối
router.get('/:id', (req, res) => {
    res.send("user " + " ," + req.params.id)
})

module.exports = router