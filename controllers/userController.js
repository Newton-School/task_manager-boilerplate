const User = require('../models/User');

exports.createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Create a new user
    const user = new User({ username, email, password });
    await user.save();

    res.status(201).json({
      message: 'User created successfully',
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
