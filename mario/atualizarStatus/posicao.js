import moverCamera from './posicaoCamera.js';


export default function AtualizarPosicao(status){

    if(
        status.direita && 
        !status.esquerda && 
        !moverCamera(status, status.camera, status.vel) ) {
    
        status.x += status.vel;
        status.ultimaDirecao = "direita";
    
    }

    else if(
        status.esquerda && 
        !status.direita &&
        !moverCamera(status, status.camera, -status.vel) ) {
    
        status.x -= status.vel;
        status.ultimaDirecao = "esquerda";
    
    }
    
    if(status.suspenso){

        status.gravidade += .1;
        status.y += status.gravidade;  
        
    }
}