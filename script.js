var escolhaMaquina = ['Pedra','Papel','Tesoura']
var escolhaAleatoria = escolhaMaquina[Math.floor(Math.random()*escolhaMaquina.length)]
var res = document.getElementById('res')
var img = document.createElement('img')
img.setAttribute('id','resultado')
document.getElementById('p1').addEventListener('click',pedra);
function pedra() {
    res.innerHTML=''
    if (escolhaAleatoria == 'Pedra') {
        img.setAttribute('src','resultado/pedrapedra.png')
        document.getElementById('res')
        res.innerHTML+='Empatou! Clique para tentar novamente.'
    } else if (escolhaAleatoria == 'Papel') {
        img.setAttribute('src','resultado/pedrapapel.png')
        document.getElementById('res')
        res.innerHTML+='Perdeu! Clique para tentar novamente.'
    } else{
        img.setAttribute('src','resultado/pedratesoura.png')
        document.getElementById('res')
        res.innerHTML+='Ganhou! Clique para tentar novamente.'
    }
    res.appendChild(img)
    res.innerHTML+='Atualize a página para jogar novamente.'
}

document.getElementById('p2').addEventListener('click',papel);
function papel() {
    res.innerHTML=''
    if (escolhaAleatoria == 'Papel') {
        img.setAttribute('src','resultado/papelpapel.png')
        document.getElementById('res')
        res.innerHTML+='Empatou! Clique para tentar novamente.'
    } else if (escolhaAleatoria == 'Tesoura') {
        img.setAttribute('src','resultado/papeltesoura.png')
        document.getElementById('res')
        res.innerHTML+='Perdeu! Clique para tentar novamente.'
    } else{
        img.setAttribute('src','resultado/papelpedra.png')
        document.getElementById('res')
        res.innerHTML+='Ganhou! Clique para tentar novamente.'
    }
    res.appendChild(img)
    res.innerHTML+='Atualize a página para jogar novamente.'
}

document.getElementById('p1').addEventListener('click',tesoura);
function tesoura() {
    res.innerHTML=''
    if (escolhaAleatoria == 'Tesoura') {
        img.setAttribute('src','resultado/tesouratesoura.png')
        document.getElementById('res')
        res.innerHTML+='Empatou! Clique para tentar novamente.'
    } else if (escolhaAleatoria == 'Pedra') {
        img.setAttribute('src','resultado/tesourapedra.png')
        document.getElementById('res')
        res.innerHTML+='Perdeu! Clique para tentar novamente.'
    } else{
        img.setAttribute('src','resultado/tesourapapel.png')
        document.getElementById('res')
        res.innerHTML+='Ganhou! Clique para tentar novamente.'
    }
    res.appendChild(img)
    res.innerHTML+='Atualize a página para jogar novamente.'
}
