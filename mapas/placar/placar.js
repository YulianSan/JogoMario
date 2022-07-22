import canvas from '../../canvas.js';
import status from './status.js';

export default function desenharPlacar() {
    let w = canvas.canvas.width;
    

    canvas.ctx.fillStyle ="white";
    canvas.ctx.font = "44px 'VT323'";
    canvas.ctx.textAlign = "left";
    // console.log(canvas.ctx)
    canvas.ctx.fillText("Mario", 100 , 50);
    canvas.ctx.fillText(status.pontos, 100 , 80);

    canvas.ctx.font = "50px 'VT323'";
    canvas.ctx.fillText(`💰 x ${status.moedas}`, 100 + (w - 200) * .22, 80);

    canvas.ctx.font = "40px 'VT323'";
    canvas.ctx.fillText("MUNDO", 100 + (w - 200) * .55, 50);
    canvas.ctx.textAlign = "center";
    canvas.ctx.fillText(canvas.mapa, 100 + (w - 200) * .60 , 80);

    canvas.ctx.textAlign = "left";
    canvas.ctx.fillText("TIME", 100 + (w - 200) * .83 , 50);
    canvas.ctx.fillText(Math.floor(canvas.frames/20), 100 + (w - 200) * .84, 80);
}