class Juego {
    
    constructor() {
        this.juegos = [];
        this.nextId = 1;
    }

    getAllJuegos = () => {
        return this.juegos;
    };

    addJuego = (juego) => {

        const nuevoJuego = { ...juego, id: this.nextId++ };
        this.juegos.push(nuevoJuego);
        return nuevoJuego;
    };

    findJuegoByName = (nombre) => {
        return this.juegos.find((juego) => 
            juego.nombre.toLowerCase() === nombre.toLowerCase()
        );
    };

    findJuegoById = (id) => {
        return this.juegos.find((juego) => juego.id === id);
    };

      
}

export default new Juego();
