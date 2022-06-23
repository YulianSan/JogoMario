import colisao from '../acoes/colisao_abismo.js';

export default function mover(status){
    if (status.direita && !status.esquerda) {
        status.x+=2;
    }

    else if (status.esquerda && !status.direita ) {
        status.x-=2;
    }
    
    if(status.suspenso){
        if(status.vivo)
            colisao(status);
        status.gravidade += .1;
        console.log(status.gravidade)
        status.y += status.gravidade;  
        
    }
}