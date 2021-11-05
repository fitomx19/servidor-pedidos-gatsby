const express = require("express");
const PlatillosModel = require('../schema/Platillos')
const app = express();

app.get("/consulta", async (request, response) => {
  const consulta = await PlatillosModel.find({});

  try {
    response.send(consulta);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/platillo", async (request, response) => {
    const platillo = new PlatillosModel(request.body);
  
    try {
      await platillo.save();
      response.send(platillo);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  app.post("/gatsby", async (request, response) => {
    const miercoles = request.body;
    let {titulo,extras,nombre,direccion,telefono} = miercoles
    let primerFiltro = [];
    let ticket = [];


    const consulta = await PlatillosModel.find({_id:extras});
    
    
      
    ticket = {
      nombre:nombre,
      direccion:direccion,
      telefono:telefono,
      pedido: primerFiltro
    }

    console.log(primerFiltro);
    response.send(ticket);

   
  });


module.exports = app;