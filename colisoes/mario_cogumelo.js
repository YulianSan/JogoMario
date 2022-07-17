import mario from '../mario/status.js';
import cogumelo from '../cogumelo/status.js';

export default function colisao() {
    if( cogumelo.x + mario.camera.x < mario.x + 30 &&
    cogumelo.x + mario.camera.x + cogumelo.size > mario.x &&
    cogumelo.y + mario.camera.y < mario.y + 36 &&
    cogumelo.y + mario.camera.y + cogumelo.size > mario.y )

        cogumelo.surgiu = false;
}