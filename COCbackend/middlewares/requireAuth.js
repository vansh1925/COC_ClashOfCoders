const legacyRequireAuth = (req, res, next) => {
  if (!req.auth.userId) {
    return res.status(401).json({ message: 'Unauthenticated' });
  }
  next();
};

export default legacyRequireAuth;