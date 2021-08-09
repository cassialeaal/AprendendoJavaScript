function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.linkedin.com/feed/");
    //window.location.href = "https://www.linkedin.com/feed";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}
/*function validaIdade(idade){
    var validar;
    if (idade >= 18) {
        validar = true;
    }
    else{
        validar = false;
    }
    return validar;
}
var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));*/

