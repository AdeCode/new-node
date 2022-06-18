const express = require('express');
const router = express.Router();
const {check} = require('express-validator');
const res = require('express/lib/response');
const User = require('../models/User')

//import the router controller
const userController = require('../controller/userController');

//create user route
// router.post('/create', 
//     [
//         check("email", "Please enter a valid emai").isEmail(),
//         check("password", "A valid password is required").exists(),
//     ], 
//     userController.createUser
// );

router.post("/create", async (request, response) => {
    const user = new User(request.body);
  
    try {
      await user.save();
      response.send({"user":user, "body":request.body});
    } catch (error) {
      response.status(500).send(error);
    }
  });

// router.get('/users', (req, res) => {
//     res.send({
//         type: 'GET USERS',
//         data:res.data
//     })
// });

router.get('/users', async (req, res) => {
    const users = await User.find({});
    try{
        res.send(users);
    }catch(error){
        res.status(500).send(error)
    }
});

router.get('/room/:room_id', (req,res)=>{
    let room_id = req.params.room_id
    try{
        if(room_id == 0) {
            res.send({
                "selected room":`room ${room_id}`,
                "room area":"Lobby"
            })
        }else if(room_id == 2){
            res.send({
                "selected room":`room ${room_id}`,
                "room area":"Networking"
            })
        }else res.status(400).send({"message":"room not found"})
    }catch(error){
        res.status(500).send(error)
    }
    
})
// router.put('/user/:id', (req, res) => {
//     res.send({
//         type: 'PUT'
//     })
// });

router.delete('/user/:id', (req, res) => {
    res.send({
        type: 'DELETE'
    })
});

router.patch('/user/:id', async (req, res) => {
    try{
        await User.findByIdAndUpdate(req.params.id, req.body);
        await User.save();
    }catch(err){
        res.status(500).send(err);
    }
});

module.exports = router;


