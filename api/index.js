'use strict'

const mongoose= require('mongoose')
const app = require('./app')
const express = require('express')
const jugadorControl = require('./controller/jugador')
const port = process.env.PORT || 3000

app.get('/api/jugador/',jugadorControl.getJugadores)
app.get('/api/jugador/:jugadorId',jugadorControl.getJugador)
app.post('/api/jugador/',jugadorControl.saveJugador)
app.put('/api/jugador/:jugadorId',jugadorControl.updateJugador)
app.delete('/api/jugador/:jugadorId',jugadorControl.deleteJugador)

mongoose.connect('mongodb://localhost:27017/equipo', (err,res) => {
	if(err) throw err
		console.log('conexion establecida...')
		app.listen(port , () => {
			console.log(`API REST corriendo en http://localhost:${port}`)
			})
	})

app.get('*', function(req, res) {						
	res.sendfile('C:/Front-end/index.html');
	});