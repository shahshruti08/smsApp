module.exports = app => {
    const contact = require("../controller/contact.controller.js");
  
    var router = require("express").Router();
  
    // update a new Tutorial
    router.post("/update", contact.update);
  
    // Retrieve all contact
    router.get("/", contact.findAll);
  
   
  //insert
    router.post("/create", contact.create);
  
  
    // Delete a Tutorial with id
    router.delete("/:id", contact.delete);
  
  
    app.use('/api/contact', router);
  };