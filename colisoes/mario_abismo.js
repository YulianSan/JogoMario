import mario from "../mario/status.js";

export default function colisao() {
    if(mario.y > 600){
        mario.vivo = false;
        mario.gravidade =-4.5;

        return true;

    }
    return false;
}