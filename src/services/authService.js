exports.login = (username, password) => {
  // Implement login logic here
  if (username === 'user' && password === 'pass') {
    return { status: 200, data: { message: 'Login successful' } };
  }
  return { status: 401, data: { message: 'Invalid credentials' } };
};

exports.signup = (username, password) => {
  // Implement signup logic here
  return { status: 201, data: { message: 'User registered successfully' } };
}; 