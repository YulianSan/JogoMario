
export default function colisao(mario) {
    if(mario.y > 600){
        console.log("faleceu");
        mario.vivo = false;
        mario.gravidade =-4.5;
    }
}