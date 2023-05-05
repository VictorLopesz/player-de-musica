let musicas = [
    {titulo:'Bad Romance', artista:'Lady Gaga', src:'musicas/Bad-Romance.mp3', img:'img/Bad-Romance.jpg'},
    {titulo:'Boulevard of Broken Dreams', artista:'Green Day', src:'musicas/Boulevard of Broken Dream.mp3', img:'img/Boulevard.jpeg'},
    {titulo:'Envolver', artista:'Anitta', src:'musicas/Envolver.m4a', img:'img/Envolver.jpg'},
    {titulo:'Livin On a Prayer', artista:'Bon Jovi', src:'musicas/Livin On a Prayer.mp3', img:'img/livin.jpg'},
    {titulo:'Take on Me', artista:'a-ha', src:'musicas/Take On Me.mp3', img:'img/Take-On-Me.jpg'},
    {titulo:'Bad Romance', artista:'Lady Gaga', src:'musicas/Bad-Romance.mp3', img:'img/Bad-Romance.jpg'},
];

let musica  = document.querySelector('audio');
let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));

//eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 4;
    }
    renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    if (indexMusica > 4){
        indexMusica = 0;
    }
    indexMusica++;
    renderizarMusica(indexMusica);
});

//funções
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    } 

    return campoMinutos+':'+campoSegundos;
}

