const express = require('express');
const routes = express.Router();
const Species = require('../models/species');
//Getting all events
routes.get('/', async (req, res) => {
    try{
        const species = await Species.find();
        return res.status(200).send({ res: species, error: false });

    }catch(err){
        res.status(500).json({message: err.message})
    }
})


//create a new species  
routes.post('/', async (req, res) => {
    const species = new Species({
        family: req.body.family,
        genus: req.body.genus ,
        name : req.body.name,
        free: req.body.free
    });
    try{
        const newSpecies = await species.save();
        res.status(201).json(newSpecies);
    }catch(e){
        res.status(400).json({message : e.message});
    }
})

module.exports = routes;