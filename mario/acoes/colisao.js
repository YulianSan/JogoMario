export default function colisao(itens,mario){
    if(itens.length){
        for(let v of itens){
            if((v.y < mario.y+36 && v.y+6 > mario.y+36) && (v.x+30 > mario.x && v.x < mario.x + 30) ){
                
                mario.y = 450;
                mario.suspenso = false;
                mario.gravidade = 0;

                return false;

            }
            else if(v.y+6 < mario.y+35 && (v.x+30 > mario.x && v.x < mario.x + 30) ){
                
                if(v.x + 30 > mario.x && v.x + 24 < mario.x)
                    mario.x = v.x + 30;

                else 
                    mario.x = v.x - 30;
        
                return false;

            }
        }
        mario.suspenso = true;
        return true;
    }
}