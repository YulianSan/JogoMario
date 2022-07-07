
export default function colisao( classes, mario ){
    
    for(let classe of classes ){

        for( let bloco of classe.array){
            
            let x = bloco.x + mario.camera.x;
            let y = bloco.y + mario.camera.y;
            
            if( ( y < mario.y+36 && y + classe.size > mario.y) && 
                ( x + classe.size > mario.x && x  < mario.x + classe.size   )){

                    
                if( ( y < mario.y+36 && y + 10 > mario.y + 36 ) && 
                    ( x + classe.size > mario.x && x  < mario.x + 25   ) &&
                    ( mario.gravidade >= 0 ) ){
                    
                        mario.y = y - 34;
                        mario.suspenso = false;
                        mario.gravidade = 0;

                        return false;

                }
                else if( ( y + 5 < mario.y+36 && y + classe.size - 5 > mario.y) && 
                        ( x + classe.size > mario.x && x < mario.x + classe.size) 
                        ){
                        
                        //colisão direita do bloco
                        if(x + classe.size > mario.x && x + classe.size - 5 < mario.x)
                            mario.x = x + classe.size;

                        //colisão esquerda do bloco
                        else 
                            mario.x = x - classe.size;
                
                        return false;

                }
                else if( ( y + classe.size - 5 < mario.y && y + classe.size > mario.y) && 
                        ( x + classe.size > mario.x && x < mario.x + 30) &&
                        ( mario.gravidade < 0 ) ){
                        
                        if(classe.nome === "lucky")
                            bloco.destruir(classes[2]);
                        
                        mario.gravidade = 0.8;
                        return false;

                }
            }
        }
    }
    mario.suspenso = true;
    return true;

}
