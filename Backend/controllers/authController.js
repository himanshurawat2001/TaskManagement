// controllers/authController.js
const User = require('../models/User');
const authService = require('../services/authService');

exports.signup = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await authService.verifyPassword(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = authService.createToken(user);
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
