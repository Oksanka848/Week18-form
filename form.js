/*Сделайте красивую форму регистрации из любого используемого вами сервиса
 (минимум 5 полей ввода), например, регистрация в Яндексе,
  Гугле или на любом другом сайте. 
  Если какое-то из полей не заполнено или заполнено неверно,
   выводите сообщение об ошибке. 
   Условия проверки для каждого поля придумайте самостоятельно. 
Если все заполнено верно, то выведите "Добро пожаловать, имя пользователя!".*/

let button = document.getElementById('click');
let reg_last_name = document.getElementById ('reg_last_name');
let reg_first_name = document.getElementById ('reg_first_name');
let reg_middle_name = document.getElementById ('reg_middle_name');
let reg_email = document.getElementById ('reg_email');
let birthday = document.getElementById ('birthday');
button.addEventListener("click", function() {
    checkAll();
    ValidateEmail(reg_email);
    checkDate(birthday);
  })

function checkAll(){
    let inputs=document.querySelectorAll("input");
    for (let input of inputs){
        check(input);
    }

function check () {
document.getElementById ('error').innerHTML=" ";
if (reg_last_name.value == '') {
document.getElementById ('error')
.innerHTML+= "Фамилия ?<br>";
}
if (reg_first_name.value == '') {
document.getElementById ('error').innerHTML+= "Имя?<br>";
}
if (reg_middle_name.value == '') {
document.getElementById ('error').innerHTML+= "Отчество?<br>";
}  
if (reg_email.value == '') {
    document.getElementById ('error').innerHTML+= "Ваша почта?<br>";
}        
if (birthday.value  == '') {
document.getElementById ('error').innerHTML+= "Ваша дата рождения?<br>";
} 
}
}

function ValidateEmail(reg_email) {
    let mailFormat = "[a-z0-9._%+-]+@[ a-z0-9.-]+.[a-z]{2,}$";
    if (reg_email.value.match(mailFormat)) {
        return true;
    }
    else {
        alert("Ваш адрес электронной почты введен неверно!");
        return false;
    }
}

function checkDate(birthday) {
var date_regex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
if (birthday.value.match(date_regex)) {
    /*alert("valid date");*/
    return true;
}
else {
    alert("Неправильный формат даты!");
    return false;
}
}

/*function changeColor(){
    let i=0;
    
    for (i=0; i< cycl.length; i++){

     document.getElementsByClassName("switcher__control").classList.contains("switcher__control");

document.getElementsByClassName("MyElement").classList.add('selected');
}
}*/
/*function changeColor(){
    let cycl=document.getElementsByName("gender").classList.contains("switcher__control");
    for (i=0; i< cycl.length; i++){
        document.getElementsByName("gender").className += "selected";
}
}*/

/*else {
alert(`Добро пожаловать, ${reg_first_name.value} !`);
}*/
