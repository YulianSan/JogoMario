export default function MarioParado( ctx, mario, scaleX ) {
    
    ctx.setTransform(scaleX,0,0,1,0,0);

    ctx.drawImage(
        mario.img,
        mario.framesAndando[0].x,
        mario.framesAndando[0].y,
        mario.framesAndando[0].w,
        mario.framesAndando[0].h,
        scaleX < 0 ? - mario.x - mario.framesAndando[0].w : mario.x,
        mario.y,
        mario.framesAndando[0].w,
        mario.framesAndando[0].h
    );
}