import moeda from './status.js';
import mario from '../mario/status.js';
import canvas from '../canvas.js';

export default function drawMoedas(){
    

    moeda.array.forEach( v =>{
        

        canvas.ctx.drawImage(
            moeda.img,
            v.x + mario.camera.x - v.w/2,
            //para posicionar a moeda na metade independente do tamanho do w
            v.y + mario.camera.y,
            v.w ,
            moeda.h
        );  

        if( v.animar ){
            v.animar();
        }

        

    });


    
}