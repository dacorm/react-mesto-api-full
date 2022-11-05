const jwt = require('jsonwebtoken');
const { getJWT } = require('../utils/getJWT');
const { NOT_FOUND_ERROR_CODE } = require('../utils/constants');
const NotFoundError = require('../utils/errors/notFoundError');

module.exports = (req, res, next) => {
  let payload;
  try {
    const token = req.headers.authorization.split(' ')[1];
    console.log(token);
    if (!token) {
      return next(new NotFoundError('Необходима авторизация'));
    }
    const key = getJWT();
    payload = jwt.verify(token, key);
  } catch (e) {
    return next(new NotFoundError('Необходима авторизация'));
  }
  req.user = payload;
  next();
};
