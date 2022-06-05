import move from '../acoes/MudarDirecao.js';

export default function teclas(status){

    window.addEventListener("keydown",(event)=>{
        move(status,event.key,"m");
    });

    window.addEventListener("keyup",(event)=>{
        move(status,event.key,"p");
    });
}