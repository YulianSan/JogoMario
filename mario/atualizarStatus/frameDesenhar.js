

export default function atualizarFrameAtivo(mario,frame,i,scaleX,ctx){

    ctx.drawImage(
        mario.img,
        mario[frame][i].x,
        mario[frame][i].y,
        mario[frame][i].w,
        mario[frame][i].h,
        
        scaleX < 0 
            ? - mario.x - mario[frame][i].w 
            :   mario.x,

        mario.y,
        mario[frame][i].w,
        mario[frame][i].h
    );

    mario.w = mario[frame][i].w ;
    mario.h = mario[frame][i].h ;
    

}