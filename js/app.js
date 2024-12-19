let listaAmigos = [];

function adicionar (){
    let amigosIncluidos = document.getElementById('lista-amigos');

    if (document.getElementById('nome-amigo').value.trim() === ''){
        alert('nome invalido');
        document.getElementById('nome-amigo').value = '';
    }else if (listaAmigos.includes(document.getElementById('nome-amigo').value) == true) {
        alert('Já tem um amigo com esse nome incluido, favor especificar ou adicionar outro')
        document.getElementById('nome-amigo').value = '';
    } else{
        listaAmigos.push(document.getElementById('nome-amigo').value);
        amigosIncluidos.textContent = listaAmigos;
        document.getElementById('nome-amigo').value = '';
    }
}

function sortear(){
    let listaAmigosaux = [...listaAmigos];
    let listaSorteio = document.getElementById('lista-sorteio');
    let amigo1, i =0;
    let resultado = [];
    listaSorteio.innerHTML = '';

    if (listaAmigosaux.length <= 1) {
        alert('Não há amigos o suficiente para sortear');
    }else{
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
}

function reiniciar(){
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    listaAmigos = [];
}