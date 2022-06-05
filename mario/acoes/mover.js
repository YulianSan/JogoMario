export default function mover(status){
    if (status.direita && !status.esquerda) {
        status.x+=1.5;
    }
    else if (status.esquerda && !status.direita ) {
        status.x-=1.5;
    }
    if(status.suspenso){
        status.gravidade += .079;
        status.y += status.gravidade;
        
    }
}