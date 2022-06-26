//status
import status from './status.js';

//frames
import MarioAndando from './movimentos/andar.js'   ;
import MarioPulando from './movimentos/pular.js'   ;
import MarioFaleceu from './movimentos/falecer.js' ;
import MarioParado  from './movimentos/parado.js'  ;

//entradas
import Tecla from './entradas/teclado.js';

//atualizações de status
import mover     from './atualizarStatus/posicao.js'       ;
import drawFrame from './atualizarStatus/frameDesenhar.js' ;


var frames=0;

Tecla(status);

function drawMario(ctx) {
    
    frames++;

    //pega a direção que o mario vai ficar olhando
    //  1 = esquerda
    // -1 = direita
    let scaleX;
        status.ultimaDirecao === "direita" ? scaleX = -1:
        scaleX = 1;

    if ( !status.vivo )
        MarioFaleceu( 
            ctx, 
            status, 
            drawFrame 
        );

    else if ( status.suspenso )
        MarioPulando( 
            ctx, 
            frames, 
            status, 
            scaleX, 
            drawFrame 
        );

    else if ( status.direita || status.esquerda )
        MarioAndando( 
            ctx, 
            frames, 
            status, 
            scaleX, 
            drawFrame 
        );

    else
        MarioParado( 
            ctx, 
            status, 
            scaleX, 
            drawFrame 
        );

    mover(status);
    
    return status;
}


export default { drawMario };
