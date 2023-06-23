var username = document.querySelector('#username')
var email = document.querySelector('#email')
var password = document.querySelector('#password')
var confirmpassword = document.querySelector('#confirmpassword')
var form = document.querySelector('form')
console.log(username, email, password, confirmpassword, form)
console.log()

console.log(email.nextElementSibling)
// đây là hàm hiển thị error dùng chung
function showError(Taginput, message) {
    let parent = Taginput.parentElement
    parent.classList.add('error')
    Taginput.nextElementSibling.innerText = message
}

// đây là hàm hiển thị succeed dùng chung
function showSucceed(Taginput) {
    let parent = Taginput.parentElement
    parent.classList.remove('error')
    Taginput.nextElementSibling.innerText = ""
}

// 1.hàm kiểm tra rỗng , mô tả : ko đc để rỗng ô nào 

function checkEmptyError(listInput) {
    let isEmptyError = false;
    listInput.forEach(function (items, index) {
        items.value = items.value.trim()
        if (items.value !== "") {
            console.log(items.value)
            isEmptyError = true;
            showSucceed(items)
        }
        else {
            isEmptyError = false
            showError(items, 'trống')
        }
    })

    if (listInput[0].value && listInput[1].value && listInput[2].value && listInput[3].value !== "") {
        return isEmptyError = true
    } else {
        return isEmptyError = false
    }

}

// 2.check định dạng email
function checkEmail(inputEmail) {
    const regexEmail =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    let isEmailError = !regexEmail.test(inputEmail.value)

    if (regexEmail.test(inputEmail.value)) {
        showSucceed(inputEmail)
    } else {
        showError(inputEmail, 'trống')
    }
    return !isEmailError
}

// 3.check độ dài mật khẩu

function checkLengthError(input, min, max) {
    //
    if (input.value.length < min) {
        showError(input, `phải có ít nhất ${min} kỹ tự`)
        return true
    }
    if (input.value.length > max) {
        showError(input, `không được vượt quá ${max} kỹ tự`)
        return true
    }
    showSucceed(input)
    return false

}

// 4.kiểm tra password giống nhau hay không 
function CheckMatchPasswordError(password, CFPassword) {
    if (password.value != CFPassword.value) {
        showError(CFPassword, 'mật khẩu không khớp')
        return true
    } else {
        CFPassword.nextElementSibling.textContent = 'khớp mật khẩu'
    }
    return false
}


form.addEventListener('submit', function (e) {

    let isEmptyError = checkEmptyError([username, email, password, confirmpassword])

    let erroremail = checkEmail(email)

    let isCheckMatchPasswordError = CheckMatchPasswordError(password, confirmpassword)

    if (isCheckMatchPasswordError == false && isEmptyError == true ) {
        // kiểm tra ko rỗng 4 ô 
        // kiểm tra khớp mật khẩu 
        // kiểm tra email
       
    } else {
        console.log("loi")
        


    }



})
