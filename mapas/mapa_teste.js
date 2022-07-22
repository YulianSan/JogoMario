import classMapa from './classe.js';

import chao from '../chao/draw.chao.js';
import moeda from '../moeda/draw.moeda.js';
import mario from "../mario/draw.mario.js";
import cogumelo from '../cogumelo/draw.congumelo.js';
import placar from './placar/placar.js'
import colisoes from '../colisoes/todas_colisoes.js';

import statusChao from '../chao/status.js';
import canvas from '../canvas.js';

export default new classMapa(
    "Mapa Teste",
    [
        () =>{
            canvas.ctx.fillStyle = "#99d5e2";
            canvas.ctx.fillRect(0,0,canvas.canvas.width,canvas.canvas.height);
        },
        () => { cogumelo.drawCogumelo(canvas.ctx) },
        () => { mario.drawMario(canvas.ctx) },
        moeda,
        () => { chao.drawTerra(canvas.ctx) },
        
        placar,
        colisoes
    ],

    [
        () => {
            chao.produzirBlocos( statusChao.terraClass, 30, 0, 500 ); 
            chao.produzirBlocos( statusChao.terraClass, 10, 550, 280 );

            chao.produzirBlocos( statusChao.luckyClass, 5, 300, 380 );
            chao.produzirBlocos( statusChao.luckyClass, 3, 330, 270 );
        
            chao.produzirBlocos( statusChao.terraClass, 30, 1100, 500 );

            statusChao.luckyClass.array[1].sorteado = true;
        
        }
    ]
)