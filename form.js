/*Сделайте красивую форму регистрации из любого используемого вами сервиса
 (минимум 5 полей ввода), например, регистрация в Яндексе,
  Гугле или на любом другом сайте. 
  Если какое-то из полей не заполнено или заполнено неверно,
   выводите сообщение об ошибке. 
   Условия проверки для каждого поля придумайте самостоятельно. 
Если все заполнено верно, то выведите "Добро пожаловать, имя пользователя!".*/
let reg_last_name = document.getElementById ('reg_last_name');
let reg_first_name = document.getElementById ('reg_first_name');
let reg_middle_name = document.getElementById ('reg_middle_name');
let reg_email = document.getElementById ('reg_email');
let birthday = document.getElementById ('birthday');

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

alert(`Добро пожаловать, ${reg_first_name.value} !`);
}


