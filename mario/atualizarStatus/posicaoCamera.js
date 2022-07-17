export default function moverCamera( mario, statusMapa, proximoPasso ) {
    
    if( mario.x + proximoPasso > 800 ){
        statusMapa.x -= mario.vel;
        return true;
    
    }
    
    else if( mario.x + proximoPasso < 200 ){
        statusMapa.x += mario.vel;
        return true;
    
    }

    return false;
}