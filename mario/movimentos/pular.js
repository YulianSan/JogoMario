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

    let indiceP = 
    Math.floor(( frames * framesPulando.length )/velAnimacaoPulando ) > framesPulando.length 
        ? framesPulando.length-1 
        : Math.floor( 
            (frames% ( velAnimacaoPulando*framesPulando.length )) /velAnimacaoPulando 
          );

    ctx.drawImage(
        mario.img,
        framesPulando[indiceP].x,
        framesPulando[indiceP].y,
        framesPulando[indiceP].w,
        framesPulando[indiceP].h,
        300,
        mario.y,
        framesPulando[indiceP].w,
        framesPulando[indiceP].h
        );  
}