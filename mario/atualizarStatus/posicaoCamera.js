export default function moverCamera( mario, statusMapa, proximoPasso ) {
    
    if( mario.x + proximoPasso > 800 ){
        console.log(statusMapa)
        statusMapa.x -= mario.vel;
        return true;
    
    }

    return false;
}