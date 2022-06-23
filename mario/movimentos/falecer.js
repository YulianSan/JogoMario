export default function MarioFaleceu(ctx,mario) {
    ctx.drawImage(
        mario.img,
        mario.framesFalecendo[0].x,
        mario.framesFalecendo[0].y,
        mario.framesFalecendo[0].w,
        mario.framesFalecendo[0].h,
        mario.x,
        mario.y,
        mario.framesFalecendo[0].w,
        mario.framesFalecendo[0].h
    );
}