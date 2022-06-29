
export default function colisao(chaos,mario){
    if(chaos.length){
        for(let v of chaos ){
            
            let x = v.x + mario.camera.x;
            let y = v.y + mario.camera.y;
            v.y += mario.camera.y;
            
            if( ( y < mario.y+36 && y+ 10 > mario.y + 36 ) && 
                ( x + v.tamanho > mario.x && x  < mario.x + 25   ) &&
                ( mario.gravidade >= 0 ) ){
                
                    mario.y = y - 34;
                    mario.suspenso = false;
                    mario.gravidade = 0;

                    return false;

            }
            else if( ( y + 5 < mario.y+36 && y + v.tamanho - 5 > mario.y) && 
                     ( x + v.tamanho > mario.x && x < mario.x + v.tamanho) 
                    ){
                    
                    //colisão direita do bloco
                    if(x + v.tamanho > mario.x && x + v.tamanho - 5 < mario.x)
                        mario.x = x + v.tamanho;

                    //colisão esquerda do bloco
                    else 
                        mario.x = x - v.tamanho;
            
                    return false;

            }
            else if( ( y + v.tamanho - 5 < mario.y && y + v.tamanho > mario.y) && 
                     ( x+ v.tamanho > mario.x && x < mario.x + 30) &&
                     ( mario.gravidade < 0 ) ){
                    
                    mario.gravidade = 0.8;
                    return false;

            }
        }
        mario.suspenso = true;
        return true;
    }
}