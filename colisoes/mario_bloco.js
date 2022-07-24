import mario from '../mario/status.js';
import chao from '../blocos/status.js'

var classeBlocos = 
    [
        chao.luckyClass,
        chao.terraClass,
        chao.luckyAbatidoClass
    ]
function colisaoRightBloco() {
    
    for(let classe of classeBlocos ){

        for( let bloco of classe.array.filter( v => v.visivel)){
            

            let x = bloco.x + mario.camera.x;
            let y = bloco.y + mario.camera.y;

            if( 
                x < mario.x + 36 + mario.vel &&
                x + classe.size > mario.x &&
                y < mario.y &&
                y + classe.size > mario.y - mario.h
            ){
                
                return false
                
            }

        }
    }
    return true;
}

function colisaoLeftBloco() {
    
    for(let classe of classeBlocos ){

        for( let bloco of classe.array.filter( v => v.visivel) ){

            let x = bloco.x + mario.camera.x;
            let y = bloco.y + mario.camera.y;

            if( 
                x < mario.x + 36 &&
                x + classe.size > mario.x - mario.vel &&
                y < mario.y &&
                y + classe.size > mario.y - mario.h
            ){
                
                return false
            }

        }
    }
    return true
}

function colisaoYBloco() {
    
    for(let classe of classeBlocos ){

        for( let bloco of classe.array.filter( v => v.visivel)){

            let x = bloco.x + mario.camera.x;
            let y = bloco.y + mario.camera.y;

            if( 
                x < mario.x + 36 &&
                x + classe.size > mario.x &&
                y < mario.y + ( mario.gravidade > 0 ? mario.gravidade : 0 ) &&
                y + classe.size > mario.y - mario.h + (  mario.gravidade < 0 ? mario.gravidade : 0 ) 
            ){
                if( mario.gravidade >= 0 ){
                    mario.y = bloco.y;
                    mario.suspenso = false;
                    mario.gravidade = 0.1;
                }
                else{
                    if( bloco.destruir ) bloco.destruir();

                    mario.y = bloco.y + classe.size + mario.h;
                    mario.suspenso = true;
                    mario.gravidade = +0.5;
                }
                
                return false

            }
            
        }
    }
    
    mario.suspenso = true;
    return true
}

export { colisaoRightBloco, colisaoLeftBloco, colisaoYBloco };
