import Juego from "../models/Juego.js";
import validator from "validator";

class JuegosService {

    registrarJuego = (juego) => {

        try {
            const { nombre, categoria, precio, stock } = juego;

            
            if (!nombre || !categoria || precio === undefined || stock === undefined) {
                throw new Error("Todos los campos son obligatorios");
            }

            if (!validator.isLength(nombre.trim(), { min: 2 })) {
                throw new Error("el nombre debe tener al menos 2 caracteres");
            }

            const nombreExistente = Juego.findJuegoByName(nombre.trim());
            if (nombreExistente) {
                throw new Error("el nombre ya está registrado");
            }

            if (!validator.isNumeric(precio.toString()) || precio <= 0) {
                throw new Error("El precio debe ser un número mayor a 0");
            }

            if (!validator.isInt(stock.toString(), { min: 0 })) {
                throw new Error("El stock debe ser un número entero mayor o igual a 0");
            }

            
            return Juego.addJuego({
                nombre: nombre.trim(),
                categoria: categoria.trim(),
                precio: parseFloat(precio),
                stock: parseInt(stock),
            });

        } catch (error) {
            throw error;
        }
    };

    listarJuegos = () => {
        try {
            return Juego.getAllJuegos();
        } catch (error) {
            throw error;
        }
    };
}

export default JuegosService;
