import MarioAndando from './movimentos/andar.js';
import MarioPulando from './movimentos/pular.js';
import status from './status.js';
import Tecla from './entradas/teclado.js';

var frames=0;

Tecla(status);

function drawMario(ctx) {
    frames++;
    
    if([-1,1].includes(status.direcao) )
        MarioAndando(ctx,frames,status);
    
    if(status.direcao===1)
        status.x--;
    else if(status.direcao===-1)
        status.x++;

    
}


export default { drawMario };
