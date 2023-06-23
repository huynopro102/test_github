const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/bai1');

// schema là cái khung nhà 
const Schema = mongoose.Schema;

// đây là cấu trúc 
const account = new Schema({
    username: String,
    password: String,
    useremail : String,

}, {
    collection: 'a1'
});


// chiển khai nó bằng model, đây là 1 model , dựa trên khung xương là account 
// để sủ dụng all các function của mongo thì phải nhét nó vào trong cái model
// model là bản thân nó có sẵn các function rồi 
const AccountModel = mongoose.model('a1', account);


module.exports = AccountModel

AccountModel.find({
    // age > 20 : {age : {$gt > 20 } }
    // age = 20 : {age : 20}
    // age > 20 và salary < 3000 
    // age > 20 or salary < 3000 
    // salary : 3000 , 4000 , 5000
    
    $or : [
        { salary : {$gt : 3000}  } , 
        { salary : {$lte : 4000}  } ,
        { salary : {$lte : 5000}  }
    ]
    ,
    
    salary : {$in : [1000, 3200]} 
})
.sort('age')
.then(date => {
    console.log('\n \n')
    console.log("thanh cong", date)
})
.catch(date => {
    console.log("that bai")
})

// for(let a = 0 ; a<10 ; a++){
//     AccountModel.create({
//         useremail : "nguyen tuan huy "+a ,
//         password : "123 "+a ,
//         useremail : a+"huy@gmail.com "
//     })
//     .then(data=>{
//         console.log('oke')
//     })
// }
AccountModel.deleteMany({
    
})
/**
 * 1 find 
 * 2 create()
 * 3 updateMany({điều kiện },{giá trị muốn thay đổi})
 * 3 updateOne({điều kiện },{giá trị muốn thay đổi})
 * 4 deleteOne({điều kiện})
 * 4 deleteMany({điều kiện})
 * $gt lớn hơn 
 * $lt nhỏ hơn 
 * $lte nhỏ hơn or bằng 
 * .limit(1)  lấy bao nhiêu phần tử 
 * .skip(2)  bỏ qua bao nhiêu phần tử 
 * .sort()
 * dầu , là " và "
 * $or[{điều kiện} ,{ điều kiện}]
 * $in trong khoảng 
 */