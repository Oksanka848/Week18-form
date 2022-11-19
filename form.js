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

else {
alert(`Добро пожаловать, ${reg_first_name.value} !`);
return false;}
}

}
function ValidateEmail(reg_email) {
    let mailFormat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    if (reg_email.value.match(mailFormat)) {
        return true;
    }
    else {
        alert("Ваш адрес электронной почты введен неверно!");
        return false;
    }
}


function changeColor(){
    document.getElementsByClassName("switcher__control").classList.contains("switcher__control");
    if ( document.getElementsByClassName("switcher__control").classList.contains("switcher__control") )

document.getElementsByClassName("MyElement").classList.add('selected');
}

/*function changeColor(){
    
    document.getElementsByClassName("switcher__control")[0].className += "selected";
}
*/
