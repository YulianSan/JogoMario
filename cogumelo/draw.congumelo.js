import cogumelo from './status.js';
import mario from '../mario/status.js';

function drawCogumelo(ctx){
    if( !cogumelo.surgiu ) return;

    ctx.drawImage(
        cogumelo.img,
        cogumelo.x + mario.camera.x,
        cogumelo.y + mario.camera.y,
        cogumelo.size,
        cogumelo.size
    );

    mover();
        
    
}

function mover() {
    cogumelo.x++;

    if( cogumelo.suspenso ){
        cogumelo.gravidade += .1;
        cogumelo.y += cogumelo.gravidade;  
    }
}

export default { drawCogumelo };