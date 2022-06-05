export default function colisao(status){
    if(status.y > 450){
        status.suspenso  = false;
        status.y=450;
    }
}