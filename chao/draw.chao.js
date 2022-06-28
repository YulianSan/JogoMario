import statusChao from "./status.js";
import colidir from "../mario/acoes/colisao_chao.js";

function criarChaos(){
    for (let i = 0; i < 30; i++) {
        statusChao.terraArray.push({x:30*i,y:484})
    
    }
    for(let i = 0; i < 4; i++)
        statusChao.luckyArray.push({x:400 + 35*i,y:370})
    
    for(let i = 0; i < 2; i++)
        statusChao.luckyArray.push({x:435 + 35*i,y:280})
}

criarChaos();

function drawTerra(ctx,mario) {
    
    ctx.setTransform(1,0,0,1,0,0);

    statusChao.terraArray.forEach( v => {

        ctx.drawImage(
            statusChao.img,
            statusChao.terra.x,
            statusChao.terra.y,
            statusChao.terra.w,
            statusChao.terra.h,
            v.x + mario.camera.x, 
            v.y + mario.camera.y,
            30,
            30
        );

    });
    
    statusChao.luckyArray.forEach( v => {

        ctx.drawImage(
            statusChao.img,
            statusChao.lucky.x,
            statusChao.lucky.y,
            statusChao.lucky.w,
            statusChao.lucky.h,
            v.x + mario.camera.x, 
            v.y + mario.camera.y,
            35,
            35
        );

    });

    if(mario.vivo)
        colidir(
            [
                ...statusChao.luckyArray,
                ...statusChao.terraArray
            ],mario);
}

export default { drawTerra };