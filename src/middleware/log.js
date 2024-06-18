const middlelog = (req, res, next) => {
  console.log("request to PATH: ", req.path);
  next();
};

module.exports = middlelog;
