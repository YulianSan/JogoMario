import canvas from '../canvas.js';

export default function desenharPlacar() {
    let w = canvas.canvas.width;

    canvas.ctx.fillStyle ="white";
    canvas.ctx.font = "44px 'VT323'";
    canvas.ctx.textAling = "left";
    // console.log(canvas.ctx)
    canvas.ctx.fillText("Mario", 100 , 50);
    canvas.ctx.fillText("000000", 100 , 80);

    canvas.ctx.font = "50px 'VT323'";
    canvas.ctx.fillText("💰 x 01", 100 + (w - 200) * .26, 80);

    canvas.ctx.font = "40px 'VT323'";
    canvas.ctx.fillText("MUNDO", 100 + (w - 200) * .55, 50);
    canvas.ctx.fillText("1-1", 100 + (w - 200) * .57 , 80);

    canvas.ctx.fillText("TIME", 100 + (w - 200) * .80 , 50);
    canvas.ctx.fillText("...", 100 + (w - 200) * .81, 80);
}