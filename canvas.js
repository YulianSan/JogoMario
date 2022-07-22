export default { 
    canvas: null, 
    ctx: null,
    frames: 0,
    iniciar(canvas, ctx, mapa){
        this.canvas = canvas;
        this.ctx = ctx;
        this.mapa = mapa;
    },
    mapa: ""
};