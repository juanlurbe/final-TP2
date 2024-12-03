import { Router } from "express";
import JuegosController from "../controllers/JuegosController.js";


const juegosRoutes = Router();
const juegosController = new JuegosController();


juegosRoutes.post("/", juegosController.registrarJuego);
juegosRoutes.get("/", juegosController.listarJuegos);


export default juegosRoutes;
