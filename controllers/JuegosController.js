import JuegosService from "../services/JuegosService.js";


class JuegosController {
    
    juegosService = new JuegosService();
    

    registrarJuego = (req, res) => {
        try {
            const { nombre, categoria, precio, stock } = req.body;
            const nuevoJuego = this.juegosService.registrarJuego({
                nombre,
                categoria,
                precio,
                stock,
            });

            res.status(201).send({ success: true, data: nuevoJuego });

        } catch (error) {
            res.status(400).send({ success: false, errorMsg: error.message });
        }
    };

    listarJuegos = (req, res) => {
        try {
            const juegos = this.juegosService.listarJuegos();
            res.status(200).send({ success: true, data: juegos });
        } catch (error) {
            res.status(400).send({ success: false, errorMsg: error.message });
        }
    };
}

export default JuegosController;
