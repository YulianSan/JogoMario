
const velAnimacaoAndando = 10;

export default function MarioAndando(ctx,frames,mario, scaleX, funDraw) {
    
    let indiceA = Math.floor( (frames%( velAnimacaoAndando* mario.frames[mario.bufado].framesAndando.length )) /velAnimacaoAndando );
    
    ctx.setTransform(scaleX,0,0,1,0,0);

    funDraw(mario, 'framesAndando', indiceA, scaleX, ctx);
}