let url = "viacep.com.br/ws//json/";
let cep = document.getElementById("cep");
let enviar = document.getElementById("enviar");
let localidade = document.getElementById("localidade");
let estado = document.getElementById("estado");

enviar.addEventListener("click",function(event){
    url = "https://viacep.com.br/ws/"+(cep.value)+"/json/"
    chamarApi(url);
})

function chamarApi(URL) {
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        localidade.innerHTML = "Localidade: " + data.localidade;
        estado.innerHTML = "Estado: " + data.estado;
    });
}
