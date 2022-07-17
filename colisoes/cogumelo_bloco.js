import mario from '../mario/status.js';
import cogumelo from '../cogumelo/status.js';

export default function colisao( classes ){
    
    for(let classe of classes ){

        for( let bloco of classe.array){
            
            let coguX = cogumelo.x + mario.camera.x;
            let coguY = cogumelo.y + mario.camera.y;

            let x = bloco.x + mario.camera.x;
            let y = bloco.y + mario.camera.y;
            
            if(
                ( y < coguY + cogumelo.size && y + classe.size > coguY) && 
                ( x + classe.size > coguX && x  < coguX + cogumelo.size ) ){

                if(
                    ( y < coguY + cogumelo.size && y + 10 > coguY + cogumelo.size ) && 
                    ( x + classe.size > coguX && x  < coguX + cogumelo.size ) &&
                    ( cogumelo.gravidade >= 0 ) ){
                    
                    coguY = y - cogumelo.size ;
                    cogumelo.suspenso = false;
                    cogumelo.gravidade = 0;

                    return false;
                }

                else if(
                    ( y + 5 < coguY+36 && y + classe.size - 5 > coguY) && 
                    ( x + classe.size > coguX && x < coguX + cogumelo.size) ){
                        
                    //colisão direita do bloco
                    if(x + classe.size > coguX && x + classe.size - 5 < coguX)
                        coguX = x + classe.size;

                    //colisão esquerda do bloco
                    else 
                        coguX = x - classe.size;
            
                    return false;

                }

            }
        }
    }
    cogumelo.suspenso = true;
    return true;

}
