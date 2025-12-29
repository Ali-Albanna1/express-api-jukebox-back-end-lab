// require express 
const express = require('express')

// model require
const Track = require('../models/track')

// init router
const router = express.Router()

//post + /pets/
router.post('/', async (req,res)=> {

    try {

        const track = await Track.create(req.body)

         res.status(201).json({track})


    }catch(error){
      console.log(error)
        res.status(500).json({error: 'failed to create track'})
    }
})

router.get('/', async (req, res) => {

    try{
        const tracks = await Track.find()
        res.status(200).json({tracks})

    }catch(error){
        console.log(error)
        res.status(500).json({error:'failed  to get tracks'})
    }
})

// GET +/tracks/123
router.get('/:id', async (req,res) => {
    try{
     const {id} = req.params

      const track = await Track.findById(id)

        if(!track) {

        res.status(404).json({error: 'track not found'})

        
       }else{

            res.status(200).json({track})
       }

    }catch(error){
    
        console.log(error)
        res.status(500).json({error : 'failed to get track'})

    }
})




// export the router
module.exports = router