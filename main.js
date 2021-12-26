let userLogin = document.getElementById('userLogin');
let userPassword = document.getElementById('userPassword')
let userRegistLogin = document.getElementById('userRegistLogin')
let userRegistPassword = document.getElementById('userRegistPassword')
let userRegistName = document.getElementById('userRegistName')
let loginPage = document.getElementById('loginPage')
let registerPage = document.getElementById('registerPage')
let info = document.getElementById('info')
let users = [
    {
        login: 'Admin',
        password: '123456',
        name: 'admin'
    }
]
let addUser = {
    name: '',
    password: '',
    login: ''
}
console.log(users)
function login(){
    for( let i=0; i<users.length; i++){
        if(userLogin.value == users[i].login && userPassword.value==users[i].password){
            document.write('Welcome ' + users[i].name)
        } else if (userLogin.value == '' ){
            userLogin.style.border = '1px solid red';
        } else if (userPassword.value == '') {
            userPassword.style.border = '1px solid red'
            userPassword.placeholder = 'to\'ldir'
        } else {
            info.style.display = 'block'
        }
    }
    console.log(userLogin.value)
}


function showPassword(){
    if(userPassword.type == 'password'){
        userPassword.type = 'text'
    } else{
        userPassword.type = 'password'
    }
}

function showPassword1(){
    if(userRegistPassword.type == 'password'){
        userRegistPassword.type = 'text'
    } else{
        userRegistPassword.type = 'password'
    }
}


function registerUser(){
    userLogin.value = '';
    userPassword.value = ''

    addUser.name = userRegistName.value;
    addUser.password = userRegistPassword.value;
    addUser.login = userRegistLogin.value
    users.push(addUser)
    console.log(users)

    registerPage.style.display = 'none'
    loginPage.style.display = 'block'
    info.style.display = 'none'
}


function toRegister(){
    loginPage.style.display = 'none'
    registerPage.style.display = 'block'

    userRegistLogin.value = '';
    userRegistName.value = '';
    userRegistPassword.value = '';

}

let arrnum = [5,35,65,55,21,1,9,100]

console.log(arrnum)


for (let i=0; i<arrnum.length; i++){
    minIndex = i;
    for(let j=i+1; j<arrnum.length;j++){
        if(arrnum[j] < arrnum[minIndex]){
            minIndex = j
        }
    }
    let temp = arrnum[i];
    arrnum[i] = arrnum[minIndex];
    arrnum[minIndex] = temp
}

console.log(arrnum)