// velocidade da animação, fps
const velAnimacaoPulando = 15;

//cada posição do sprite do mario pulando

//função que desenha
export default function MarioPulando(ctx,frames,mario,scaleX,funDraw) {

    let indiceP = 
    Math.floor(
        ( frames * mario.frames[mario.bufado].framesPulando.length )/velAnimacaoPulando ) 
        > mario.frames[mario.bufado].framesPulando.length

        ? mario.frames[mario.bufado].framesPulando.length-1 
        : Math.floor( 
            (frames% ( velAnimacaoPulando*mario.frames[mario.bufado].framesPulando.length )) /velAnimacaoPulando 
          );
        
    ctx.setTransform(scaleX,0,0,1,0,0);
    

    funDraw(mario, 'framesPulando', indiceP, scaleX, ctx);
}