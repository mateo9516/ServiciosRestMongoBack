'use strict'

const Jugador = require('../modelos/jugador')

function getJugadores(req,res){
	Jugador.find({},(err, jugadores)=>{
		if(err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
		if(!jugadores) 	return res.status(404).send({message: 'no existen jugadores'})

		res.send(200, { jugadores })	
	})
}

function getJugador(req,res){
	let jugadorId = req.params.jugadorId

	Jugador.findById(jugadorId,(err, jugador) =>{
		if(err) return res.status(500).send({message:`Error al realizar la peticion: ${err}`})

		if(!jugador) return res.status(404).send({message: `El producto no existe`})

		res.status(200).send({ jugador })	
	})
}

function saveJugador(req,res){
	console.log('POST /api/jugador')
	console.log(req.body)
	let jugador = new Jugador()
	jugador.nombre = req.body.nombre
	jugador.numero = req.body.numero
	jugador.partidos = req.body.partidos
	jugador.goles = req.body.goles
	jugador.lesionado = req.body.lesionado
	jugador.inicialista = req.body.inicialista

	jugador.save((err, jugadorStored) =>{
		if (err) res.status(500).send({message:`Error al guardar: ${err}`})

		res.status(200).send({jugador: jugadorStored})	
	})
}

function updateJugador(req,res){
	let jugadorId=req.params.jugadorId
	let actualizar = req.body

	Jugador.findByIdAndUpdate(jugadorId, actualizar, (err, jugadorActualizado)=>{
		if (err) res.status(500).send({message:`Error al actualizar: ${err}`})

		res.status(200).send({ jugador: jugadorActualizado})	
	})
}

function deleteJugador(req,res){
	let jugadorId = req.params.jugadorId

	Jugador.findById(jugadorId,(err, jugador) =>{
		if (err) res.status(500).send({message:`Error al eliminar: ${err}`})

		jugador.remove(err =>{
			if (err) res.status(500).send({message:`Error al eliminar: ${err}`})
			res.status(200).send({message:`el jugador fue eliminado bien`})	
		})	
	})
}
module.exports = {
	getJugadores,
	getJugador,
	saveJugador,
	updateJugador,
	deleteJugador
}