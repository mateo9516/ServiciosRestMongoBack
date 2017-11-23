'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const JugadorSchema = Schema({
	nombre: String,
	numero: Number,
	partidos: Number,
	goles: Number,
	lesionado: Boolean,
	inicialista: {type: String, "default": [] }
})

module.exports = mongoose.model('Jugador',JugadorSchema)