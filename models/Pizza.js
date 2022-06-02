// import mongoose model dependencies
    // we could import the 
const { Schema, model } = require('mongoose');

// Pizza Hunt want the following data to be stored when users create a new pizza
    // name of the pizza
    // name of the user that created the pizza
    // a timestamp of when the pizza was created
    // a timestamp of any updates to the pizza's data
    // the pizza's suggested size
    // the pizza's toppings

const PizzaSchema = new Schema({
    pizzaName: {
        type: String
    },
    createdBy: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    size: {
        type: String,
        default: 'Large'
    },
    toppings: []

});

// create the Pizza model using the PizzaSchema
const Pizza = model('Pizza', PizzaSchema);

// export the pizza model
module.exports = Pizza;