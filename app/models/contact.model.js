const { stringToArray } = require("ag-grid-community");

  module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        city: String,
          start_date: String,
          end_date: String,
          price: String,
          status:String,
          id:Number
         
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object._id = _id;
      return object;
    });
  
    const contact = mongoose.model("smsdetails", schema);
    return contact;
  };