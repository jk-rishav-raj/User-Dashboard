const express = require('express');
const router = express.Router();
const Entries = require('../models/Entries');
const auth = require('../middleware/auth');
const mongoose = require('mongoose');

router.post('/', auth, async (req, res) => {

    const {name, email, date, state, country} = req.body;
    
    try {
        
        let entry = new Entries({name, email, date, state, country});
        await entry.save();
        res.status(200).json({
            "msg": "Data Added",
            "id": entry.id
        });

    } catch(err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }    
});

router.get('/', auth, async (req,res) => {
    try{
        const entries = await Entries.find({});
        res.json(entries);
    }
    catch(err){
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});

router.get('/:id', auth, async (req, res) => {
    const id = req.params.id;
    try {

        const valid = mongoose.Types.ObjectId.isValid(id);

        if( !valid ) {
            return res.send("Invalid id");
        }
        
        let entry = await Entries.findOne({_id: id});

        if( !entry ) {
            return res.send("No Entries found");
        }

        res.status(200).json(entry);

    } catch(err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});


module.exports = router;