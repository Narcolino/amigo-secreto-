let listaAmigos = [];

function adicionar (){
    listaAmigos.push(document.getElementById('nome-amigo').value);
    let amigosIncluidos = document.getElementById('lista-amigos');

    amigosIncluidos.textContent = listaAmigos;

    document.getElementById('nome-amigo').value = '';
}

function sortear(){
    let listaAmigosaux = [...listaAmigos];
    let listaSorteio = document.getElementById('lista-sorteio');
    let amigo1, i =0;
    let resultado = [];
    listaSorteio.innerHTML = '';

    while (listaAmigosaux.length != 0){
        amigo1 = Math.floor(Math.random() * listaAmigosaux.length);
        resultado.push(listaAmigosaux.splice(amigo1,1));
    }

    for (i = 0; i < resultado.length; i++){
        if (i == resultado.length-1 ) {
            listaSorteio.innerHTML += `${resultado[i]} --> ${resultado[0]} <br>`;
        }else{
            listaSorteio.innerHTML += `${resultado[i]} --> ${resultado[i+1]} <br>`;
        } 
    }


}

function reiniciar(){
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    listaAmigos = [];
}