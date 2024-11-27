const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({

    foodName:{

       type: String,
       required: [true, 'please enter the food name'],
       trim: true,
       maxLength: 100,
       min: 5

    },

    FoodImage:{

        type: String,

        required: [true, 'please add image in  the food'],
    },

    FoodDescription:{

        type: String,
        required: [true, 'please enter the food description'],
        maxLength: 1000
 
    },

    FoodPrice:{

        type: Number,
        required: [true, 'please enter the food price'],

    }


})


module.exports = mongoose.model('Food', FoodSchema);