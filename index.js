import express from "express";
import * as path from "path";
import { fileURLToPath } from "url";


// perguntar sobre aquirvo(__filename) e diretorio(__dirname)
const arquivo = fileURLToPath(import.meta.url);
const diretorio = path.dirname(arquivo);
const app = express();

app.use(express.static(diretorio + "/public"));
app.use(
  "/build/",
  express.static(path.join(diretorio, "node_modules/three/build"))
);
app.use(
  "/jsm/",
  express.static(path.join(diretorio, "node_modules/three/examples/jsm"))
);

app.listen(8282, () =>
  console.log("Servidor conectado")
);
