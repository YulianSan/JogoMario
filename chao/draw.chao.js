import statusChao from "./status.js";
import colidir from "../mario/acoes/colisao.js";

function criarChaos(){
    for (let i = 0; i < 30; i++) {
        statusChao.chaos.push({x:30*i,y:484})
    }
}

criarChaos();

function drawChaos(ctx,mario) {
    
    ctx.setTransform(1,0,0,1,0,0);

    statusChao.chaos.forEach( v => {

        ctx.drawImage(
            statusChao.img,
            v.x, 
            v.y,
            30,
            30
        );

    });

    colidir(statusChao.chaos,mario);



}

export default { drawChaos };