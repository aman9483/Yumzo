const User = require('../Models/UserModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.Register = async (req, res) => {
  try {
    const { Fullname, email, password, isAdmin } = req.body;

    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }

    
    const hashedPassword = await bcrypt.hash(password, 10);

   
    const newUser = new User({ 
      Fullname, 
      email, 
      password: hashedPassword,
      isAdmin: isAdmin || false, 
    });

    
    const savedUser = await newUser.save();

    res.status(201).json({
      success: true,
      message: 'User created successfully',
      user: savedUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};



exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid email or password' });
    }

   
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Invalid email or password' });
    }


    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: '1h' });

   
    res.cookie('token', token, { 
      httpOnly: true, 
      maxAge: 60 * 60 * 1000, 
      secure: process.env.NODE_ENV === 'production', 
      sameSite: 'strict', 
    });

    
    user.password = undefined;

    res.status(200).json({
      success: true,
      message: 'Logged in successfully',
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



exports.logout = async (req, res) => {
    try {
     
      res.clearCookie('token');
      res.status(200).json({
        success: true,
        message: 'Logged out successfully',
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
  
 