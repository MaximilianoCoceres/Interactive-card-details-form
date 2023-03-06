/* constantes de la tarjeta */

const numberCard = document.getElementById("number-card");
const nameCard = document.querySelector(".name");
const monthCard = document.getElementById("month");
const yearCard = document.getElementById("year");
const cvcCard = document.getElementById("number-cvv");

/* constantes del formulkario */
const form = document.querySelector(".form"); 
const nameForm = document.getElementById("card-name");
const numberForm = document.getElementById("card-number-form");
const monthForm = document.getElementById("card-month");
const yearForm = document.getElementById("card-year");
const cvcForm = document.getElementById("card-cvc");
const btnConfirm = document.getElementById("btn-submit");
const btnReiniciar = document.querySelector(".reinicio");


numberForm.addEventListener("keydown", function (e) {
  return e.key >= 0 && e.key <= 9;
});

const formatCardNumber = (value) => {
  const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g;
  const onlyNumbers = value.replace(/[^\d]/g, "");

  return onlyNumbers.replace(regex, (regex, $1, $2, $3, $4) =>
    [$1, $2, $3, $4].filter((group) => !!group).join(" ")
  );
};

function mostrar() {
  nameCard.innerHTML = nameForm.value || "Name Surname";
  numberCard.innerHTML =
    formatCardNumber(numberForm.value) || "xxxx xxxx xxxx xxxx";
  monthCard.innerHTML = monthForm.value || "MM";
  yearCard.innerHTML = yearForm.value || "YY";
  cvcCard.innerHTML = cvcForm.value || "CVC";
}


btnConfirm.addEventListener('click', function(event){
 
    event.preventDefault();
    let errorName = document.querySelector(".error-name");
    let errorNumber = document.querySelector(".error-number");
    let incompleto = document.querySelector(".incompleto");
    let cvcIncompleto = document.querySelector(".cvc-incompleto");
    const mensajeEnviado = document.querySelector(".msg-sended");

 let todoCorrecto = true;

 if (nameForm.value ==null || nameForm.value.length == 0 || /^\s*$/.test(nameForm.value)){
    
    nameForm.classList.toggle("invalid")
    errorName.innerHTML = "*campo requerido"
    todoCorrecto = false;
 }else{
    nameForm.classList.remove("invalid")
    todoCorrecto = true;
 }

  if (numberForm.value == null || numberForm.value.length == 0 ){
    
    numberForm.classList.toggle("invalid")
    errorNumber.innerHTML = "*campo requerido"
    todoCorrecto = false
 } else if ( /^\w*$/.test(numberForm.value)){
    numberForm.classList.toggle("invalid")
    errorNumber.innerHTML = "*Wrong format, numbers only"
    todoCorrecto = false
 }
 else{
    numberForm.classList.remove("invalid")
    todoCorrecto = true;
}


 if( monthForm == null || monthForm.value.length == 0 ){
    
monthForm.classList.toggle("invalid")
    incompleto.innerHTML = "*campo requerido"
    todoCorrecto = false
 }else{
    monthForm.classList.remove("invalid")
    todoCorrecto = true;
 }
    
 if( yearForm == null || yearForm.value.length == 0 ){
    yearForm.classList.toggle("invalid")
    incompleto.innerHTML = "*campo requerido"
    todoCorrecto = false
 }else{
    yearForm.classList.remove("invalid")
    todoCorrecto = true;
 }
    

 if( cvcForm == null || cvcForm.value.length == 0 ){
    
    cvcForm.classList.toggle("invalid")
    cvcIncompleto.innerHTML = "*campo requerido"
    todoCorrecto = false
 }else{
    cvcForm.classList.remove("invalid")
    todoCorrecto = true;
 }

 if (todoCorrecto ==true) {
    
    form.classList.toggle("none");
    mensajeEnviado.classList.toggle("none")
   
}

    
})

btnReiniciar.addEventListener('click', ()=> location.reload())
