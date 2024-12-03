import { Router } from "express";
import juegosRoutes from "./juegosRoutes.js";
import ventasRoutes from "./ventasRoutes.js";


const routes = Router();


routes.use("/juegos", juegosRoutes);
routes.use("/ventas", ventasRoutes);


export default routes;

