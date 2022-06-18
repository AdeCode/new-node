const { route } = require('express/lib/application');
const User = require('../models/User');
const {validationResult} = require('express-validator');

// @route POST api/auth/createUser
exports.createUser = async (req, res) => {
    if (req.body.content){
        return res.status(400).send({
            message: "Please input the required record data"
        });
    }
        
    //creata a Crud record
    const user = new User({
        firstName: req.body.name,
        lastName: req.body.email,
        email: req.body.country,
        userRole: req.body.userRole,

    });

    //save record in the db
    user.save()
    .then(data => {
        res.status(200).send(
                {
                    message: "Record created Successfully",
                    data
                }
            );
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Could not save data to the database"
        });
    });
}