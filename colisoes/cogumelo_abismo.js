import cogumelo from "../cogumelo/status.js";

export default function colisao() {
    if(cogumelo.y > 600){
        cogumelo.surgiu = false;
        cogumelo.gravidade =- 0;
        cogumelo.suspenso = false;

        return true;

    }
    return false;
}