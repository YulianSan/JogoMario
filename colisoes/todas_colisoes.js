// colisões
import mario_bloco from './mario_bloco.js';
import mario_abismo from './mario_abismo.js';
import mario_cogumelo from './mario_cogumelo.js';
import cogumelo_bloco from './cogumelo_bloco.js';
import cogumelo_abismo from './cogumelo_abismo.js';

//status dos objetos que vão colidir
import chao from "../chao/status.js";
import mario from "../mario/status.js";
import cogumelo from '../cogumelo/status.js';

export default function() {
    if( mario.vivo &&  !mario_abismo() ){
        
        mario_bloco(
            [
                chao.luckyClass,
                chao.terraClass,
                chao.luckyAbatidoClass
            ]);
        
        mario_cogumelo();
    }
    
    if( cogumelo.surgiu &&  !cogumelo_abismo() )
        cogumelo_bloco(
            [
                chao.luckyClass,
                chao.terraClass,
                chao.luckyAbatidoClass
            ]);
}