const mario = document.querySelector('.mario');
const cano = document.querySelector('.cano');


const jump = () => {
mario.classList.add('jump');

setTimeout(() => {
    mario.classList.remove('jump');
}, 400);
}

const loop = setInterval(()=>{

    console.log('loop')

    const canoPosition = cano.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);

    if (canoPosition <= 120 && canoPosition > 0 && marioPosition < 80){

        cano.style.animation = 'none';
        cano.style.left = `${canoPosition}px`;

        mario.style.animation = 'none';
        mario.style.left = `${marioPosition}px`;

        mario.src = './images/morto.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop);
    }

},10)

document. addEventListener('keydown', jump)