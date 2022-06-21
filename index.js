import Express from "express";

const app = Express()
const PORT = 5000

app.listen(PORT, () => {
    console.log(`Servidor iniciado en puerto ${PORT}`)
})
