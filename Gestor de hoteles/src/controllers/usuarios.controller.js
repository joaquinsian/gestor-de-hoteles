'use strict'

const Usuarios = require('../models/usuarios.model')

function registrarUsuarios(req, res){
    var usuarios = new Usuarios();
    var params = req.body;

    if(params.nombre && params.apellido){
        usuarios._idUsuarios = params._idUsuarios;
        usuarios.nombre = params.nombre;
        usuarios.apellido = params.apellido;
        usuarios.rol = params.rol;
        usuarios.correo_electronico = params.correo_electronico;

        Usuarios.find({_idUsuarios: usuarios._idUsuarios}).exec((err, usuencontrada)=>{
            if(err) return res.status(500).send({ mensaje: ' Error al registrar el usuario'});

            if(usuencontrada.lenght > 0){
                return res.status(500).send({ mensaje : 'el usuario ya existe'})
            }else{
                usuarios.save((err, usuariosSave)=>{
                    if(err){ res.status(500).send({mensaje: 'error al guardar datos'});
        
                }else{
                    res.status(200).send({usuariosSave});
                }
                });
            }
        })
        
    }

}

module.exports = {
    registrarUsuarios
}