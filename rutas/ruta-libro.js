const { Router } = require('express');
const router = Router();
const tablaLibro = require('./../baseDatos/libro-bd');

router.get("/", async (peticion, respuesta) => {
    try {
        const listaLibro = await tablaLibro.select();
        respuesta.json(listaLibro);
    } catch (err) {
        respuesta.status(500).send(err.message);
    }
});

router.post("/", async (peticion, respuesta) => {
    try {
        const libroRecibido = peticion.body;
        console.log(libroRecibido);
        await tablaLibro.insert(libroRecibido);
        respuesta.sendStatus(200);
    } catch (err) {
        respuesta.status(500).send(err.message);
    }
});

router.put("/", async (peticion, respuesta) => {
    try {
        const libroRecibido = peticion.body;
        console.log(libroRecibido);
        await tablaLibro.update(libroRecibido)
        respuesta.sendStatus(200);
    } catch (err) {
        respuesta.status(500).send(err.message);
    }
});

router.delete("/:id", async (peticion, respuesta) => {
    try{
    const idRecibido = peticion.params.id
    console.log(idRecibido);
    await tablaLibro.eliminar(idRecibido);
    respuesta.sendStatus(200);
    }catch (err){
        respuesta.status(500).send(err.message);
    }
});

module.exports = router
