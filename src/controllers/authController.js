const authService = require('../services/authService');

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await authService.login(username, password);
    res.status(result.status).json(result.data);
  } catch (error) {
    console.error('Controller login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.signup = async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await authService.signup(username, password);
    res.status(result.status).json(result.data);
  } catch (error) {
    console.error('Controller signup error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}; 