import Express from "express";
import data from "./resources/data.js";
import cors from "cors"

const app = Express()
const PORT = 5000

// Configuro para recibir cualquier peticion de cualquier
// cliente
app.use(cors())
// Configurando el directorio assets para que tenga archivos
// estaticos.
app.use(Express.static("assets"))

// Endpoint; GET /movies
// http://localhost:5000/movies?fase=1
app.get("/movies", (req, res) => {
    const fase = req.query.fase

    const listaPeliculas = data.data

    if (fase != null) {
        const resultado = []
        listaPeliculas.forEach(pel => {
            if (pel.phase == fase ){
                resultado.push(pel)
            }
        });
        // transformar data -> texto (string)
        res.send(JSON.stringify({ data : resultado }))
    }else {
        res.send(JSON.stringify({ data : listaPeliculas }))
    }

    
})

app.listen(PORT, () => {
    console.log(`Servidor iniciado en puerto ${PORT}`)
})
