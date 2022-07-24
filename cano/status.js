const cano = new Image();
cano.src = "./cano/cano.png";

export default class Cano{
    static img   = cano;
    static array = [];
    static w = 100 * 2/3; 
    static h = 128 * 2/3;

    constructor(x, y){
        // depois colocar a variável teletransporte-> podendo ser null
        // ou pode ser o nome de um mapa aonde ele será teletransportado
        this.x = x;
        this.y = y;
        this.visivel = true;
    }
}