const authService = require('../services/authService');

exports.login = (req, res) => {
  const { username, password } = req.body;
  const result = authService.login(username, password);
  res.status(result.status).json(result.data);
};

exports.signup = (req, res) => {
  const { username, password } = req.body;
  const result = authService.signup(username, password);
  res.status(result.status).json(result.data);
}; 