import { colisaoLeftBloco, colisaoRightBloco, colisaoYBloco } from './mario_bloco.js';
import { colisaoLeftCano, colisaoRightCano, colisaoYCano } from './mario_cano.js';

function colisaoLeft() {
    if( !colisaoLeftCano()  ) { return false }
    if( !colisaoLeftBloco() ) { return false }

    return true;
}

function colisaoRight() {
    if( !colisaoRightCano()  ) { return false }
    if( !colisaoRightBloco() ) { return false }

    return true;
}

function colisaoY() {
    if( !colisaoYCano()  ) { return false }
    if( !colisaoYBloco() ) { return false }

    return true;
}

export { colisaoLeft, colisaoRight, colisaoY }