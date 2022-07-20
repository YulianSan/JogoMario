import mario from '../mario/status.js';

export default function colisao( classes ){
    
    for(let classe of classes ){

        for( let bloco of classe.array){
            
            let x = bloco.x + mario.camera.x;
            let y = bloco.y + mario.camera.y;
            
            if( ( y < mario.y && y + classe.size > mario.y - mario.h) && 
                ( x + classe.size > mario.x && x  < mario.x + classe.size   )){

                    
                if( ( y < mario.y && y + 10 > mario.y ) && 
                    ( x + classe.size > mario.x && x  < mario.x + 32   ) &&
                    ( mario.gravidade >= 0 ) ){
                    
                        mario.y = y + 1 ; 
                        // somo mais 1 so para que ele passe um pouco para a colisão
                        // sempre ser true
                        mario.suspenso = false;
                        mario.gravidade = 0;

                        return false;

                }
                else if( ( y + 5 < mario.y && y + classe.size - 5 > mario.y - mario.h) && 
                        ( x + classe.size > mario.x && x < mario.x + 35) 
                        ){
                        
                        //colisão direita do bloco
                        if(x + classe.size > mario.x && x + classe.size - 5 < mario.x)
                            mario.x = x + classe.size;

                        //colisão esquerda do bloco
                        else 
                            mario.x = x - classe.size;
                
                        return false;

                }
                else if( ( y + classe.size - 5 < mario.y - mario.h && 
                          y + classe.size > mario.y - mario.h) && 
                        ( x + classe.size > mario.x && x < mario.x + 30) &&
                        ( mario.gravidade < 0 ) ){
                        
                        if(classe.nome === "lucky")
                            bloco.destruir();
                        
                        mario.gravidade = 0.8;
                        return false;

                }
            }
        }
    }
    mario.suspenso = true;
    return true;

}
