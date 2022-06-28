
export default function colisao(chaos,mario){
    if(chaos.length){
        for(let v of [...chaos]){
            
            let x = v.x + mario.camera.x;
            let y = v.y + mario.camera.y;
            v.y += mario.camera.y;
            
            if( (y < mario.y+36 && y+30 > mario.y+36) && 
                (x+30 > mario.x && x < mario.x + 30) &&
                ( mario.gravidade >= 0 ) ){
                
                    mario.y = y - 34;
                    mario.suspenso = false;
                    mario.gravidade = 0;

                    return false;

            }
            else if( (y < mario.y+35 && y+25 > mario.y) && 
                     ( x+30 > mario.x && x < mario.x + 30) ){
                    
                    //colisão direita do bloco
                    if(x + 30 > mario.x && x + 24 < mario.x)
                        mario.x = x + 30;

                    //colisão esquerda do bloco
                    else 
                        mario.x = x - 30;
            
                    return false;

            }
            else if( (y+25 < mario.y && y+30 > mario.y) && 
                     (x+30 > mario.x && x < mario.x + 30) &&
                     ( mario.gravidade < 0 ) ){
                
                    mario.gravidade = 0.8;
                    return false;

            }
        }
        mario.suspenso = true;
        return true;
    }
}