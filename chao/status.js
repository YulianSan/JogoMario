import luckyClass from './lucky/classe.js';
import luckyAbatidoClass from './luckyAbatido/classe.js';
import terraClass from './terra/classe.js';

const bloco = new Image();
bloco.src = `./chao/blocos.png`;

export default {
    img: bloco,
    
    terraClass,
    luckyClass,
    luckyAbatidoClass

}