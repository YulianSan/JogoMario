import mario from '../mario/status.js';
import canos from '../cano/status.js';

function colisaoRightCano() {

    for( let cano of canos.array.filter( v => v.visivel)){
        
        if( !cano.visivel ) { continue; }

        let x = cano.x + mario.camera.x;
        let y = cano.y + mario.camera.y;

        if( 
            x < mario.x + 36 + mario.vel &&
            x + canos.w > mario.x &&
            y < mario.y &&
            y + canos.h > mario.y - mario.h
        ){
            
            //parte de cima do cano

            if(
                y < mario.y &&
                y + 38 > mario.y - mario.h 
            ){
                return false;

            }

            //parte de baixo do cano
            else if(
                x + 11 < mario.x + 36 + mario.vel &&
                x + canos.w - 11 > mario.x
            ){
                return false;

            }
            
        }

    }
    
    return true;
}

function colisaoLeftCano() {
    
    for( let cano of canos.array.filter( v => v.visivel)){

        let x = cano.x + mario.camera.x;
        let y = cano.y + mario.camera.y;

        if( 
            x < mario.x + 36 &&
            x + canos.w > mario.x - mario.vel &&
            y < mario.y &&
            y + canos.h > mario.y - mario.h
        ){
            //parte de cima do cano

            if(
                y < mario.y &&
                y + 38 > mario.y - mario.h 
            ){
                return false;

            }

            //parte de baixo do cano
            else if(
                x + 11 < mario.x + 36 &&
                x + canos.w - 11 > mario.x - mario.vel
            ){
                return false;

            }

            
            
        }

    }
    return true
}

function colisaoYCano() {
    
    for( let cano of canos.array.filter( v => v.visivel)){

        let x = cano.x + mario.camera.x;
        let y = cano.y + mario.camera.y;

        if( 
            x < mario.x + 36 &&
            x + canos.w > mario.x &&
            y < mario.y + ( mario.gravidade > 0 ? mario.gravidade : 0 ) &&
            y + 25 > mario.y - mario.h + (  mario.gravidade < 0 ? mario.gravidade : 0 ) 
        ){
            //parte de cima do cano

        
            if( mario.gravidade >= 0 ){
                mario.y = y;
                mario.suspenso = false;
                mario.gravidade = 0.1;
            }
            else{
                mario.y = cano.y + 25 + mario.h;
                mario.suspenso = true;
                mario.gravidade = + 0.5;
            }
        

            //parte de baixo do cano n tem colisão no Y

            
            return false

        }
        
    }
    
    mario.suspenso = true;
    return true
}

export { colisaoRightCano, colisaoLeftCano, colisaoYCano };
