const jwt = require('jsonwebtoken');
const User = require('../Models/UserModel');

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ success: false, message: 'Unauthorized access. No token provided.' });
    }

  
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

  
    req.user = await User.findById(decoded.id);

    if (!req.user) {
      return res.status(401).json({ success: false, message: 'Unauthorized access. User not found.' });
    }

    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Unauthorized access. Invalid token.',
    });
  }
};


const adminMiddleware = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
  
    next();
  } else {
 
    res.status(403).json({
      success: false,
      message: 'Access denied. Admins only.',
    });
  }
};

module.exports = { authMiddleware, adminMiddleware };
