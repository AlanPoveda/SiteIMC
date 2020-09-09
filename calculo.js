var peso = window.document.getElementById('peso');
var altura = window.document.getElementById('altura');
var botao = window.document.getElementById('botao');
var resultadoTotal = window.document.getElementById('resultado')


function calculoImc(){
    var valorPeso = Number(peso.value);
    var valorAltura = Number(altura.value);
    var seuImc = ((valorPeso)/(valorAltura**2));
    var clasificacao = "Ainda não preencheu 🤗";
    if (seuImc< 18.5){
        clasificacao = "Abaixo do peso 🔵"
    }
    if (seuImc >= 18.5 && seuImc < 24.9 ){
        clasificacao = "Peso normal 🟢"
    }
    if (seuImc >= 24.9 && seuImc < 29.9 ){
        clasificacao = "Sobrepeso 🟡"
    }
    if (seuImc >= 29.9 && seuImc < 34.9 ){
        clasificacao = "Obesidade Grau I 🟠"
    }
    if (seuImc >= 34.9 && seuImc < 39.9 ){
        clasificacao = "Obesidade Grau II 🔴"
    }if (seuImc >= 39.9 ){
        clasificacao = "Obesidade Grau III ou Morbida ⚠🔴"
    }//else{
        //clasificacao = "Ainda não preencheu 🤗"
    //}
    resultadoTotal.innerHTML = `Seu IMC e de <strong>${seuImc}</strong> <br>
    e esta com <strong>${clasificacao}<strong>`;
    console.log(clasificacao);
}

function fazerNovamente(){
    window.location.reload();
}