import statusChao from "./status.js";
import colidir from "../mario/acoes/colisao_bloco.js";


var ctx;

function criarChaos(){

    produzirBlocos( statusChao.terraClass, 30, 0, 500 );

    produzirBlocos( statusChao.luckyClass, 5, 300, 380 );
    produzirBlocos( statusChao.luckyClass, 3, 330, 290 );

    statusChao.luckyClass.array[2].sorteado = true;

}

function produzirBlocos( classe, qnt, x, y, rest = []) {

    for(let i = 0; i < qnt; i++)
        classe.array.push(
            new classe ( classe.size * i + x, y, ...rest )
        );
    
}

criarChaos();

function drawTerra(contexto,mario) {
    ctx = contexto;

    ctx.setTransform(1,0,0,1,0,0);

    statusChao.terraClass.array.forEach( v => {

        drawTodos( v, statusChao.terraClass, mario );

    });
    

    statusChao.luckyClass.array.forEach( v => {

        drawTodos( v, statusChao.luckyClass, mario );

    });

    statusChao.luckyAbatidoClass.array.forEach( v => {

        drawTodos( v, statusChao.luckyAbatidoClass, mario );

    });

    if(mario.vivo)
        colidir(
            [
                statusChao.luckyClass,
                statusChao.terraClass,
                statusChao.luckyAbatidoClass
            ],mario);
}

function drawTodos( status, instanciado, mario ) {
    
    ctx.drawImage(
        
        statusChao.img,
        
        instanciado.x,
        instanciado.y,
        instanciado.w,
        instanciado.h,
        
        status.x + mario.camera.x, 
        status.y + mario.camera.y,

        instanciado.size,
        instanciado.size

    );
    
}
export default { drawTerra };