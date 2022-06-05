import MarioAndando from './movimentos/andar.js';
import MarioPulando from './movimentos/pular.js';
import status from './status.js';
import Tecla from './entradas/teclado.js';
import mover from "./acoes/mover.js";
import colisao from "./acoes/colisao.js";
var frames=0;

Tecla(status);

function drawMario(ctx) {
    frames++;
    if(status.suspenso)
        MarioPulando(ctx,frames,status);
    else
        MarioAndando(ctx,frames,status);
    
    mover(status);
    colisao(status);
    
}


export default { drawMario };
