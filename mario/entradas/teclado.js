import move from '../acoes/MudarDirecao.js';

export default function teclas(status){

    window.addEventListener("keydown",(event)=>{
        if(status.vivo)
            move(status,event.key,"m");
    });

    window.addEventListener("keyup",(event)=>{
        if(status.vivo)
            move(status,event.key,"p");
    });
}