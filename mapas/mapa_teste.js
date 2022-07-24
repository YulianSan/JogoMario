import classMapa from './classe.js';

import { drawBlocos, produzirBlocos } from '../blocos/draw.chao.js';
import moeda from '../moeda/draw.moeda.js';
import mario from "../mario/draw.mario.js";
import cogumelo from '../cogumelo/draw.congumelo.js';
import placar from './placar/placar.js'
import colisoes from '../colisoes/todas_colisoes.js';
import { drawCano, produzirCano } from '../cano/draw.cano.js'

import statusChao from '../blocos/status.js';
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
        drawCano,
        () => { drawBlocos(canvas.ctx) },
        placar,
        colisoes
    ],

    [
        () => {
            produzirBlocos( statusChao.terraClass, 50, 0, 500 ); 
            produzirBlocos( statusChao.terraClass, 10, 550, 280 );
            
            produzirBlocos( statusChao.luckyClass, 5, 300, 380 );
            produzirBlocos( statusChao.luckyClass, 3, 330, 260 );

            statusChao.luckyClass.array[1].sorteado = true;
            statusChao.luckyClass.array[6].sorteado = true;
        
            produzirCano(850, 420);
        }
    ]
)