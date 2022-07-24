import statusChao from "./status.js";
import mario from "../mario/status.js";
import canvas from "../canvas.js";

var ctx;


function produzirBlocos( classe, qnt, x, y, rest = []) {

    for(let i = 0; i < qnt; i++)
        classe.array.push(
            new classe ( classe.size * i + x, y, ...rest )
        );
    
}


function drawBlocos(contexto) {
    ctx = contexto;

    statusChao.terraClass.array.forEach( v => {

        drawTodos( v, statusChao.terraClass );

    });
    

    statusChao.luckyClass.array.forEach( v => {

        drawTodos( v, statusChao.luckyClass );

    });

    statusChao.luckyAbatidoClass.array.forEach( v => {

        drawTodos( v, statusChao.luckyAbatidoClass );

    });

}

function drawTodos( status, instanciado ) {
    
    if( status.x + mario.camera.x + instanciado.size < 0 ||
        status.x + mario.camera.x > canvas.canvas.width 
    ){ 
        status.visivel = false; 
        return;
        
    }else status.visivel = true;

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
export { drawBlocos, produzirBlocos };