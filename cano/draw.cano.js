import cano from './status.js';
import mario from '../mario/status.js';
import canvas from '../canvas.js';

function drawCano(){
    

    cano.array.forEach( v =>{
        
        if( v.x + mario.camera.x + cano.w < 0 ||
            v.x + mario.camera.x > canvas.canvas.width 
        ){ 
            v.visivel = false; 
            return;
            
        }else v.visivel = true;

        canvas.ctx.drawImage(
            cano.img,
            v.x + mario.camera.x,
            //para posicionar a moeda na metade independente do tamanho do w
            v.y + mario.camera.y,
            cano.w,
            cano.h
        );  
        
        
    });


    
}

function produzirCano(x, y) {

    cano.array.push( new cano( x, y ));
    console.log(cano.array);

}
export { drawCano, produzirCano }