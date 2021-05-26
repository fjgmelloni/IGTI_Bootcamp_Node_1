//Trabalho baseado no do professor pois o meu continha erros
import  express from  "express";
import brandRouter from "./routes/brand.js";

const app = express();
app.use(express.json());
app.use("/marcas",brandRouter);
app.listen(3000,() => console.log("Api Started"));