

export default function atualizarFrameAtivo(mario,frame,i,scaleX,ctx){
    
    ctx.drawImage(
        mario.img,
        mario.frames[mario.bufado][frame][i].x,
        mario.frames[mario.bufado][frame][i].y,
        mario.frames[mario.bufado][frame][i].w,
        mario.frames[mario.bufado][frame][i].h,
        
        scaleX < 0 
            ? - mario.x - mario.frames[mario.bufado][frame][i].w 
            :   mario.x,

        mario.y - mario.frames[mario.bufado][frame][i].h,
        mario.frames[mario.bufado][frame][i].w,
        mario.frames[mario.bufado][frame][i].h
    );

    mario.w = mario.frames[mario.bufado][frame][i].w;
    mario.h = mario.frames[mario.bufado][frame][i].h;

}