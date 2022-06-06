
const velAnimacaoAndando = 10;



export default function MarioAndando(ctx,frames,mario, scaleX) {
    
    let indiceA = Math.floor( (frames%( velAnimacaoAndando* mario.framesAndando.length )) /velAnimacaoAndando );
    
    ctx.setTransform(scaleX,0,0,1,0,0);

    ctx.drawImage(
        mario.img,
        mario.framesAndando[indiceA].x,
        mario.framesAndando[indiceA].y,
        mario.framesAndando[indiceA].w,
        mario.framesAndando[indiceA].h,
        scaleX < 0 ? - mario.x - mario.framesAndando[indiceA].w : mario.x,
        mario.y,
        mario.framesAndando[indiceA].w,
        mario.framesAndando[indiceA].h
    );
}