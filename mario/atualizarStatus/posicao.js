import moverCamera from './posicaoCamera.js';

import { colisaoLeft, colisaoRight, colisaoY } from '../../colisoes/marioPodeAndar.js';


export default function AtualizarPosicao(status){

    
    //para sempre que ele n colidir com o chão o default ser true

    if(
        status.direita && 
        !status.esquerda && 
        status.vivo &&
        colisaoRight() &&
        !moverCamera(status, status.camera, status.vel)
    ){
    
        status.x += status.vel;
        status.ultimaDirecao = "direita";
    
    }

    else if(
        status.esquerda && 
        !status.direita &&
        status.vivo &&
        colisaoLeft() &&
        !moverCamera(status, status.camera, -status.vel) 
    ){
    
        status.x -= status.vel;
        status.ultimaDirecao = "esquerda";
    
    }
    
    if( colisaoY() && status.suspenso){

        status.gravidade += .1;
        status.y += status.gravidade;  
        
    }
}