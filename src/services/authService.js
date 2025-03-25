const User = require('../models/User');

exports.login = async (username, password) => {
  const user = await User.findOne({ username, password });
  if (user) {
    return { status: 200, data: { message: 'Login successful' } };
  }
  return { status: 401, data: { message: 'Invalid credentials' } };
};

exports.signup = async (username, password) => {
  try {
    const newUser = new User({ username, password });
    await newUser.save();
    return { status: 201, data: { message: 'User registered successfully' } };
  } catch (error) {
    return { status: 400, data: { message: 'Error registering user', error } };
  }
}; 