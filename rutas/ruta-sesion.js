const { Router }= require ('express');

const router = Router();
router.post("/iniciar",(peticion,respuesta)=>{
    console.log(peticion.body);
    respuesta.sendStatus(200);
})
module.export = router;
