'use strict';

module.exports = function(api_key) {
  return function(req, res, next) {
      if (!req.headers['x-api-key'] || req.headers['x-api-key'] !== api_key) {
          res.status(401).send({ error: 'Invalid api_key' });
          return next({ error: 'Invalid api_key' });
      } else {
        delete req.headers['x-api-key'];
        return next();
      }
  };
}
