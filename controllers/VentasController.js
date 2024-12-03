import VentasService from "../services/VentasService.js";

class VentasController {
   
    ventasService = new VentasService();
    

    registrarVenta = (req, res) => {

        try {

            const { juegoId, cantidad } = req.body;
            const nuevaVenta = this.ventasService.registrarVenta({ juegoId, cantidad });

            res.status(201).send({ success: true, data: nuevaVenta });

        } catch (error) {

            res.status(400).send({ success: false, errorMsg: error.message });
        }
    };

    listarVentas = (req, res) => {
        try {
            const ventas = this.ventasService.listarVentas();

            res.status(200).send({ success: true, data: ventas });

        } catch (error) {
            res.status(400).send({ success: false, errorMsg: error.message });
        }
    };

    totalUnidadesVendidas = (req, res) => {

        try {

            const total = this.ventasService.totalUnidadesVendidas();
            res.status(200).send({ success: true, totalUnidadesVendidas: total });

        } catch (error) {

            res.status(400).send({ success: false, errorMsg: error.message });
        }
    };


    totalUnidadesPorCategoria = (req, res) => {
        try {
            const unidadesVendidas = this.ventasService.totalUnidadesPorCategoria();

            res.status(200).send({ success: true, unidadesVendidas });

        } catch (error) {
            
            res.status(400).send({ success: false, errorMsg: error.message });
        }
    };
}

export default VentasController;
