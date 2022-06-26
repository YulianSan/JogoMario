// velocidade da animação, fps
const velAnimacaoPulando = 15;

//cada posição do sprite do mario pulando

//função que desenha
export default function MarioPulando(ctx,frames,mario,scaleX,funDraw) {

    let indiceP = 
    Math.floor(( frames * mario.framesPulando.length )/velAnimacaoPulando ) > mario.framesPulando.length 
        ? mario.framesPulando.length-1 
        : Math.floor( 
            (frames% ( velAnimacaoPulando*mario.framesPulando.length )) /velAnimacaoPulando 
          );
        
    ctx.setTransform(scaleX,0,0,1,0,0);
    

    funDraw(mario, 'framesPulando', indiceP, scaleX, ctx);
}