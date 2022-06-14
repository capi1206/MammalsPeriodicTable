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
        free: req.body.free,
        order: req.body.order
    });
    try{
        const newSpecies = await species.save();
        res.status(201).json(newSpecies);
    }catch(e){
        res.status(400).json({message : e.message});
    }
})

//put request

routes.put('/' , async (req, res) => {
    Species.findById(req.params._id).then((model) => {
        return Object.assign(model, {free: true});
    }).then((model) => {
        return model.save();
    }).then((updatedModel) => {
        res.json({
            msg: 'model updated',
            updatedModel
        });
    }).catch((err) => {
        res.send(err);
    });
})

routes.delete('/', )







module.exports = routes;