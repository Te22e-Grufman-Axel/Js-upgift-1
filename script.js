let Tal1 =document.querySelector("#tal1");
let Tal2 =document.querySelector("#tal2");
let svar = document.querySelector("#svar");
let answer = "";

function plus()
{
svar.value = parseInt(Tal1.value) + parseInt(Tal2.value);

}

function minus()
{
svar.value = parseInt(Tal1.value) - parseInt(Tal2.value);
}

function multi()
{
svar.value = parseInt(Tal1.value) * parseInt(Tal2.value);
}

function divid()
{
svar.value = parseInt(Tal1.value) / parseInt(Tal2.value);
}