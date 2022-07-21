import statusChao from "./status.js";
import mario from "../mario/status.js";

var ctx;


function produzirBlocos( classe, qnt, x, y, rest = []) {

    for(let i = 0; i < qnt; i++)
        classe.array.push(
            new classe ( classe.size * i + x, y, ...rest )
        );
    
}


function drawTerra(contexto) {
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

}

function drawTodos( status, instanciado ) {
    
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

    if( status.animar )
        status.animar();
    
}
export default { drawTerra, produzirBlocos };