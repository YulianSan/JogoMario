import colisao from '../acoes/colisao_abismo.js';

export default function AtualizarPosicao(status){

    if (status.direita && !status.esquerda ) {
    
        status.x+=2;
        status.ultimaDirecao = "direita";
    
    }

    else if (status.esquerda && !status.direita ) {
    
        status.x-=2;
        status.ultimaDirecao = "esquerda";
    
    }
    
    if(status.suspenso){

        if(status.vivo) colisao(status);

        status.gravidade += .1;
        status.y         += status.gravidade;  
        
    }
}