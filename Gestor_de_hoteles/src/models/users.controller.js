'use strict'

const bcrypt = require('bcrypt-nodejs')
const Hotel = require('../models/hotels.model');
const Reservacion = require('../models/reservations.models')
const User = require('../models/users.model');





//buscar buscar hotel y realizar reservacion

function searchHoandRe (req, res){
    const params = req.body;
    const reservacion = new Reservacion();
    
    Hotel.find({}, {name: params.busqueda}, (err, hotel)=>{
        if(err){
            res.status(500).send({message: 'Error general'});
        }else{
            if(!hotel){
                res.status(500).send({message: 'No se encontro'});
            }else{
                  
                    if (params.beginDate && params.finalDate && params.roomId && params.eventId && params.userId) {
                      reservacion.beginDate = params.beginDate;
                      reservacion.finalDate = params.finalDate;
                      reservacion.roomId = params.roomId;
                      reservacion.eventId = params.eventId;
                      reservacion.userId = params.userId;
                  
                      Reservacion.find({_id: reservacion._id }).exec((err, resencontrada) => {
                        if (err)
                          return res
                            .status(500)
                            .send({ mensaje: " Error al realizar la reservacion" });
                  
                        if (resencontrada.lenght > 0) {
                          return res
                            .status(500)
                            .send({ mensaje: "habitacion reservada actualmente" });
                        } else {
                          reservacion.save((err, reservacionSave) => {
                            if (err) {
                              res
                                .status(500)
                                .send({
                                  mensaje: "la habitacion se encuentra reservada actualmente",
                                });
                            } else {
                              res.status(200).send({ reservacionSave });
                            }
                          });
                        }
                      });
                    }
                
            }
        }
    }); 
}


//a medias aprender como eliminar por medio del id sin tener que colocarlo  en el postman
function deleteUser(req, res){
    const idUser = req.params.idUser;

    if(idUser){
        User.findByIdAndDelete(idUser, (err, userDelete)=>{
            if(err) return res.status(500).send({ mensaje: 'Error en la petición de eliminar '});
            if(userDelete) return res.status(500).send({ mensaje: 'Error al eliminar el usuario' });
    
            return res.status(200).send({ userDelete });
        })


    }
}



//aun no testeado ni revisado ni creado no lo he echo





module.exports = {
    deleteUser,
    searchHoandRe,
    createReservation
}

