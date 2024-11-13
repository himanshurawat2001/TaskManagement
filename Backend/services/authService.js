// services/authService.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const jwtConfig = require('../config/jwt');
const User = require('../models/User');

exports.createToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });
};

exports.verifyPassword = async (inputPassword, userPassword) => {
  return await bcrypt.compare(inputPassword, userPassword);
};
