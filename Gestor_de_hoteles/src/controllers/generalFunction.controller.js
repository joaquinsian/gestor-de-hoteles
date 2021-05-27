'use strict'

const Hotel = require('../models/hotels.model');
/*
function ViewHotel (req, res){

    Hotel.find({}, (err, hotelencontrado)=>{
        if(err){
         return res.status(500).send({messange : 'error en la peticion'})
        }else{
            if(!hotelencontrado) return res.status(200).send({ hotelencontrado })
        }
    })
};
*/

function getHotel(req, res) {
	Hotel.find({},(err, hotelesS)=>{
		if(err){ res.status(500).send({message:'Error al buscar'}); }
		else{
             Hotel.find({},function(req, Hoteles){
                Event.populate(Hoteles, {path: "Event"}, function(err,eventId){
                    Room.populate(Hoteles, {path: "Room"},function(err,roomId){
                    });
                });
            });
		}
	});
}

module.exports = getHotel