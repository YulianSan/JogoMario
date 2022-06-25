import statusChao from "./status.js";
import colidir from "../mario/acoes/colisao_chao.js";

function criarChaos(){
    for (let i = 0; i < 30; i++) {
        statusChao.chaos.push({x:30*i,y:484})
    }
    statusChao.chaos.push({x:400,y:360})
    statusChao.chaos.push({x:430,y:360})
    statusChao.chaos.push({x:460,y:360})
    statusChao.chaos.push({x:490,y:360})
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
    
    if(mario.vivo)
        colidir(statusChao.chaos,mario);

}

export default { drawChaos };