var escolhaMaquina = ['Pedra','Papel','Tesoura']
var escolhaAleatoria = escolhaMaquina[Math.floor(Math.random()*escolhaMaquina.length)]
var res = document.getElementById('res')

document.getElementById('p1').addEventListener('click',pedra);
function pedra() {
    res.innerHTML=''
    if (escolhaAleatoria == 'Pedra') {
        res.innerHTML+='Empatou! Clique para tentar novamente.'
    } else if (escolhaAleatoria == 'Papel') {
        res.innerHTML+='Perdeu! Clique para tentar novamente.'
    } else{
        res.innerHTML+='Ganhou! Clique para tentar novamente.'
    }
}

