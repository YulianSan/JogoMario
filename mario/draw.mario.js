const mario = new Image();
mario.src="./mario/mario.png"
var frames=0;
const velAnimacao = 10;
// 
//     {
//         x:9,    y:105,     w:45-9,      h:141-105
//     },
//     {
//         x:74,    y:105,     w:110-74,      h:141-105
//     }
const framesAndando = [
    {
        x:13,    y:17,     w:40-13,      h:51-17
    },
    {
        x:74,    y:17,     w:108-74,      h:53-17
    }
];

function drawMario(ctx) {
    frames++;
    let indice = Math.floor( (frames%( velAnimacao*framesAndando.length )) /velAnimacao );
    
    
    
    ctx.drawImage(
        mario,
        framesAndando[indice].x,
        framesAndando[indice].y,
        framesAndando[indice].w,
        framesAndando[indice].h,
        100,
        450,
        framesAndando[indice].w,
        framesAndando[indice].h
        ); 
}

export default { drawMario };
