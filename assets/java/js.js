const player = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const nuvem = document.querySelector('.cloud');


const over = document.querySelector('.game-over');
const restartB = document.querySelector('.restart')


const jump = () => {
    player.classList.add('jump');

    setTimeout(() => {
        player.classList.remove('jump');
    }, 500);
}

const circulo = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const playerp = +window.getComputedStyle(player).bottom.replace('px', '');
    const nuvemp = +window.getComputedStyle(nuvem).left.replace('px', '');

    if (pipePosition <= 100 && pipePosition > 0 && playerp < 60) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        player.style.animation = 'none';
        player.style.bottom = `${playerp}px`;

        player.src = 'assets/images/game-over.png';
        player.style.width = '70px';
        player.style.marginLeft = '35px';

        nuvem.style.animation = 'cloud 20s infinite linear';
        nuvem.style.left = `${nuvemp}px`;
    

    over.style.visibility = 'visible';

    clearInterval(circulo);

    }
}, 10);


const restart = () => {
    over.style.visibility = 'hidden';
    pipe.style.animation = 'pipe-animations 1.5s infinite linear';
    pipe.style.left = ``;

    player.src = 'assets/images/mario.gif';
    player.style.width = '130px';
    player.style.bottom = '0px';
    player.style.marginLeft = '';
    player.style.animation = '';
    
    nuvem.style.left = ``;

    const circulo = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        
        const playerp = +window.getComputedStyle(player).bottom.replace('px', '');
        const nuvemp = +window.getComputedStyle(nuvem).left.replace('px', '');
    
        if (pipePosition <= 100 && pipePosition > 0 && playerp < 60) {
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;
            
            player.style.animation = 'none';
            player.style.bottom = `${playerp}px`;
    
            player.src = 'assets/images/game-over.png';
            player.style.width = '70px';
            player.style.marginLeft = '35px';
    
            nuvem.style.animation = 'cloud 20s infinite linear';
            nuvem.style.left = `${nuvemp}px`;
        
    
        over.style.visibility = 'visible';
    
        clearInterval(circulo);

    }
  }, 10);
}

document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);

restartB.addEventListener('click', restart);
