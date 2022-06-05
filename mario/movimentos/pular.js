// velocidade da animação, fps
const velAnimacaoPulando = 15;

//cada posição do sprite do mario pulando
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

//função que desenha
export default function MarioPulando(ctx,frames,mario) {

    let scaleX;
    if((mario.direita && mario.esquerda) || mario.direita) scaleX = -1;
    else scaleX = 1;

    let indiceP = 
    Math.floor(( frames * framesPulando.length )/velAnimacaoPulando ) > framesPulando.length 
        ? framesPulando.length-1 
        : Math.floor( 
            (frames% ( velAnimacaoPulando*framesPulando.length )) /velAnimacaoPulando 
          );
        
    ctx.setTransform(scaleX,0,0,1,0,0);
    
    ctx.drawImage(
        mario.img,
        framesPulando[indiceP].x,
        framesPulando[indiceP].y,
        framesPulando[indiceP].w,
        framesPulando[indiceP].h,
        scaleX < 0 ? - mario.x - framesPulando[indiceP].w : mario.x,
        mario.y,
        framesPulando[indiceP].w,
        framesPulando[indiceP].h
        );  
}