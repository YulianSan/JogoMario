
export default function colisao(chaos,mario){
    if(chaos.length){
        for(let v of chaos){
            if( (v.y < mario.y+36 && v.y+6 > mario.y+36) && 
                (v.x+30 > mario.x && v.x < mario.x + 30) &&
                ( mario.gravidade >= 0 ) ){
                
                    mario.y = v.y - 34;
                    mario.suspenso = false;
                    mario.gravidade = 0;

                    return false;

            }
            else if( (v.y < mario.y+35 && v.y+25 > mario.y) && 
                     (v.x+30 > mario.x && v.x < mario.x + 30) ){
                    
                    //colisão direita do bloco
                    if(v.x + 30 > mario.x && v.x + 24 < mario.x)
                        mario.x = v.x + 30;

                    //colisão esquerda do bloco
                    else 
                        mario.x = v.x - 30;
            
                    return false;

            }
            else if( (v.y+25 < mario.y && v.y+30 > mario.y) && 
                     (v.x+30 > mario.x && v.x < mario.x + 30) &&
                     ( mario.gravidade < 0 ) ){
                
                    mario.gravidade = 0.8;
                    return false;

            }
        }
        mario.suspenso = true;
        return true;
    }
}