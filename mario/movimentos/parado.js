export default function MarioParado( ctx, mario, scaleX, funDraw ) {
    
    ctx.setTransform(scaleX,0,0,1,0,0);

    funDraw(mario, 'framesAndando', 0, scaleX, ctx);
}