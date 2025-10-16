const jwt = require('jsonwebtoken');

exports.ensureAuth = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  jwt.verify(token.split(' ')[1], process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Failed to authenticate token' });
    req.user = decoded;
    next();
  });
};

function authenticate(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: "Unauthorized" });
}

module.exports = { authenticate };
