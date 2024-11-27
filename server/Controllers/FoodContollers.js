const Food = require('../Models/FoodModel');

exports.newFoods = async (req, res) => {
  try {
    const foodItems = req.body;

   
    const foods = await Food.insertMany(foodItems);

  
    res.status(201).json({
      success: true,
      foods,
    });
  } catch (error) {  
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


exports.AllFood = async (req, res) => {
    try {
     
    const foods = await Food.find();
   
      res.status(200).json({
        success: true,
        foods,
      });
    } catch (error) {
   
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
  