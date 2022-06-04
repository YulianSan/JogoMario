
const velAnimacaoAndando = 10;

const framesAndando = [
    {
        x:13,    y:17,     w:40-13,      h:51-17
    },
    {
        x:74,    y:17,     w:108-74,      h:53-17
    }
];

export default function MarioAndando(ctx,frames,mario) {
    let indiceA = Math.floor( (frames%( velAnimacaoAndando*framesAndando.length )) /velAnimacaoAndando );
    
    ctx.setTransform(mario.direcao,0,0,1,0,0);

    ctx.drawImage(
        mario.img,
        framesAndando[indiceA].x,
        framesAndando[indiceA].y,
        framesAndando[indiceA].w,
        framesAndando[indiceA].h,
        mario.direcao * mario.x < 0 ? -mario.x - framesAndando[indiceA].w : mario.x,
        mario.y,
        framesAndando[indiceA].w,
        framesAndando[indiceA].h
    );
}