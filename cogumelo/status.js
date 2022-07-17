
const cogumelo = new Image();
cogumelo.src = "./cogumelo/cogumelo.png";

export default {
    x: 0, y: 0,
    surgiu: false, // essa variável vê se o cogumelo pode ou nâo ser desenhado
    img: cogumelo,
    size: 30,
    gravidade: 0, suspenso: false,

    spawn(x, y){
        this.x = x;
        this.y = y - this.size;
        this.surgiu = true;
        this.suspenso = true;
    }
}