const db = require("../models");
const Contact = db.contact;
var ObjectId = require('mongoose').Types.ObjectId; 

// Create and Save a new Contact
exports.update = (req, res) => {
    console.log(req.body.id);
    
    
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
      }
    
      // Create a Contact
      const contactNew = new Contact({
        city:  req.body.city,
        start_date:  req.body.start_date,
        end_date:  req.body.end_date,
        price:  req.body.price,
        status: req.body.status,
        _id: req.body._id
      });
    
    var update = {
      "city":  req.body.city,
      "start_date":  req.body.start_date,
      "end_date":  req.body.end_date,
      "price":  req.body.price,
      "status": req.body.status
       
    };
    console.log( {id: parseInt(req.body.id)});
      // Save Contact in the database
      Contact
        .findOneAndUpdate( {id: parseInt(req.body.id)},  update,null, function( err, data) {
          console.log('inside create');
          console.log(data);
          res.send(data);
        })      
};

// Retrieve all Contact from the database.
exports.findAll = (req, res) => {
    Contact.find()
    .then(data => {
      console.log(data[0].id)
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// insert all Contact in the database.
exports.create = (req, res) => {
    
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // update a Contact
  const contactNew = new Contact({
    city:  req.body.city,
    start_date:  req.body.start_date,
    end_date:  req.body.end_date,
    price:  req.body.price,
    status: req.body.status,
    _id: req.body._id
  });

  // Save Contact in the database
  Contact
    .insert(req.body, function(err,data) {
      
        console.log('save');
        res.send(data);
     
     
    })      
};



// Delete a Contact with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
console.log(req.params.id);
  Contact.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Contact with id=${id}. Maybe Contact was not found!`
        });
      } else {
        res.send({
          message: "Contact was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Contact with id=" + id
      });
    });
};
