const mario = new Image();
mario.src="./mario/mario.png"
var frames=0;
const velAnimacaoAndando = 10;
const velAnimacaoPulando = 50;

const framesAndando = [
    {
        x:13,    y:17,     w:40-13,      h:51-17
    },
    {
        x:74,    y:17,     w:108-74,      h:53-17
    }
];

const framesPulando = [
    {
        x:9,    y:105,     w:45-9,      h:141-105
    },
    {
        x:74,    y:105,     w:110-74,      h:141-105
    },
    {
        x:205,    y:17,     w:241-205,      h:53-17
    }
]
function drawMario(ctx) {
    frames++;
    let indiceA = Math.floor( (frames%( velAnimacaoAndando*framesAndando.length )) /velAnimacaoAndando );
    let indiceP = ( velAnimacaoPulando * framesPulando.length ) <= frames 
    ? framesPulando.length-1 
    : Math.floor( (frames%( velAnimacaoPulando*framesPulando.length )) /velAnimacaoPulando );
    
    

    ctx.drawImage(
        mario,
        framesAndando[indiceA].x,
        framesAndando[indiceA].y,
        framesAndando[indiceA].w,
        framesAndando[indiceA].h,
        100,
        450,
        framesAndando[indiceA].w,
        framesAndando[indiceA].h
        );

    ctx.drawImage(
        mario,
        framesPulando[indiceP].x,
        framesPulando[indiceP].y,
        framesPulando[indiceP].w,
        framesPulando[indiceP].h,
        200,
        450,
        framesPulando[indiceP].w,
        framesPulando[indiceP].h
        );  
}

export default { drawMario };
