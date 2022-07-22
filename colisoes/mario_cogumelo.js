import mario from '../mario/status.js';
import cogumelo from '../cogumelo/status.js';
import coletouCogumelo from '../mapas/placar/coletou/cogumelo.js';

export default function colisao() {
    if( 
        cogumelo.surgiu &&
        cogumelo.x + mario.camera.x < mario.x + 30 &&
        cogumelo.x + mario.camera.x + cogumelo.size > mario.x &&
        cogumelo.y + mario.camera.y < mario.y &&
        cogumelo.y + mario.camera.y + cogumelo.size > mario.y - mario.h
    ){
        coletouCogumelo();
        
        cogumelo.surgiu = false;
        if( mario.bufado < 3 ) mario.bufado++;
    }
}