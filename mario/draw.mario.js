import MarioAndando from './movimentos/andar.js';
import MarioPulando from './movimentos/pular.js';
import status from './status.js';
import Tecla from './entradas/teclado.js';
import mover from "./acoes/mover.js";
var frames=0;

Tecla(status);

function drawMario(ctx) {
    frames++;

    let scaleX;
        if((status.direita && status.esquerda) || status.direita) scaleX = -1;
        else scaleX = 1;

    if(status.suspenso)
        MarioPulando(ctx,frames,status,scaleX);
    else
        MarioAndando(ctx,frames,status,scaleX);
    
    mover(status);
    
    return status;
}


export default { drawMario };
