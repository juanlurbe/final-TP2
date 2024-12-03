import Juego from "../models/Juego.js";
import Venta from "../models/Venta.js";


class VentasService {

    registrarVenta = (venta) => {

        try {
            const { juegoId, cantidad } = venta;

            
            if (!juegoId || cantidad === undefined) {
                throw new Error("el id del juego y la cantidad son obligatorios");
            }

            if (!Number.isInteger(cantidad) || cantidad <= 0) {
                throw new Error("La cantidad debe ser un número entero mayor a 0");
            }

            
            const juego = Juego.findJuegoById(juegoId);
            if (!juego) {
                throw new Error("El juego no existe");
            }

            
            if (juego.stock < cantidad) {
                throw new Error("Stock insuficiente");
            }

            
            juego.stock -= cantidad;

            
            return Venta.addVenta({
                juegoId,
                cantidad,
                precioTotal: cantidad * juego.precio,
            });

        } catch (error) {
            throw error;
        }
    };

    listarVentas = () => {
        try {
            return Venta.getAllVentas();
        } catch (error) {
            throw error;
        }
    };

    totalUnidadesVendidas = () => {
        try {

            const ventas = Venta.getAllVentas();
            const total = ventas.reduce((sum, venta) => sum + venta.cantidad, 0);
            return total;

        } catch (error) {
            throw error;
        }
    };


    totalUnidadesPorCategoria = () => {
        try {

            const ventas = Venta.getAllVentas();
            const juegos = Juego.getAllJuegos();

           
            const ventasPorCategoria = {};

            ventas.forEach((venta) => {
                const juego = juegos.find((j) => j.id === venta.juegoId);
                if (juego) {
                    const categoria = juego.categoria;
                    if (!ventasPorCategoria[categoria]) {
                        ventasPorCategoria[categoria] = 0;
                    }
                    ventasPorCategoria[categoria] += venta.cantidad;
                }
            });

            return ventasPorCategoria;

        } catch (error) {
            throw error;
        }
    };
}

export default VentasService;
