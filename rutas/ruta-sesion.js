const { Router } = require ('express');
const tablaUsuario = require('./../baseDatos/usuariobd');
const jwt= require('jsonwebtoken');
const router = Router();
const jwtUtilis=require('./../utlidades/token.utilis');

router.post("/iniciar", async (peticion, respuesta) => {
    try{
    const { ci, password } = peticion.body;
    const usuario = await tablaUsuario.getUsuarioPorCi(ci, password);
    if (usuario.length !== 0){
        const usuario=usuario[0];
        const token= await jwtUtilis.generarToken(usuario);
        respuesta.json({token});
        } else {
        respuesta.sendStatus(401);
    }
}catch(e){
    console.error('Error al iniciar sesion', e);
    respuesta.status(500).send(e.message);
   }
});
router.post("/mantener", async (peticion,respuesta)=>{
    try{
        const{token}= peticion. body;
        consttokenNuevo= await jwtUtilis.refrescarToken(token);
        if(tokenNuevo){
          respuesta.json({tokenNuevo});
        }else{
            respuesta.sendStatus(403);
        }
    }catch(e){
        console.error('Error al mantener sesion',e);
        respuesta.status(500),send(e,message);
    }
})
module.exports = router;
