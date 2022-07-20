import mario from '../mario/status.js';
import cogumelo from '../cogumelo/status.js';

export default function colisao() {
    if( 
        cogumelo.surgiu &&
        cogumelo.x + mario.camera.x < mario.x + 30 &&
        cogumelo.x + mario.camera.x + cogumelo.size > mario.x &&
        cogumelo.y + mario.camera.y < mario.y &&
        cogumelo.y + mario.camera.y + cogumelo.size > mario.y - mario.h
    ){

        cogumelo.surgiu = false;
        mario.bufado++;
        console.log("Oi")
    }
}