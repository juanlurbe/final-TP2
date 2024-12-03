import { Router } from "express";
import VentasController from "../controllers/VentasController.js";


const ventasRoutes = Router();
const ventasController = new VentasController();


ventasRoutes.post("/", ventasController.registrarVenta);
ventasRoutes.get("/", ventasController.listarVentas); 
ventasRoutes.get("/estadisticas/total", ventasController.totalUnidadesVendidas);
ventasRoutes.get("/estadisticas/total-categoria", ventasController.totalUnidadesPorCategoria);


export default ventasRoutes;
