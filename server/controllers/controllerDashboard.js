const dashboard = (req, res) => {
  res.json({ username: `${req.user.username}` });
};
module.exports = { dashboard };
