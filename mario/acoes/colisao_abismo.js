
export default function colisao(mario) {
    if(mario.y > 600){
        mario.vivo = false;
        mario.gravidade =-4.5;

    }
}