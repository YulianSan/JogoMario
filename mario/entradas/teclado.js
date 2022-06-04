import move from '../acoes/mover.js';

export default function teclas(status){

    window.addEventListener("keydown",(event)=>{
        move(status,event.key);
    });

    window.addEventListener("keyup",()=>{
        move(status,"Parar");
    });
}