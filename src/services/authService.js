const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.login = async (username, password) => {
  try {
    const user = await User.findOne({ username });
    if (user && await bcrypt.compare(password, user.password)) {
      // Generate a JWT token with a longer expiration time
      const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, {
        expiresIn: '30d', // Token expires in 30 days
      });
      return { status: 200, data: { message: 'Login successful', accessToken: token } };
    }
    return { status: 401, data: { message: 'Invalid credentials' } };
  } catch (error) {
    console.error('Login error:', error);
    return { status: 500, data: { message: 'Internal server error' } };
  }
};

exports.signup = async (username, password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    return { status: 201, data: { message: 'User registered successfully' } };
  } catch (error) {
    console.error('Signup error:', error);
    return { status: 400, data: { message: 'Error registering user', error } };
  }
}; 