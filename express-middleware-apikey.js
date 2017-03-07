'use strict';

module.exports = function(api_key) {
  return function(req, res, next) {
      if (api_key !== req.headers['x-api-key']) {
          res.status(401).send({ error: 'Invalid api_key' });
      } else {
        delete req.headers['x-api-key'];
        return next();
      }
  };
}
