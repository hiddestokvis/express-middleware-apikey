'use strict';

module.exports = function(api_key) {
  return function(req, res, next) {
      if (api_key !== req.headers['x-api-key'] || api_keys.length === 0) {
          res.status(401).send({ error: 'Invalid api_key' });
      } else {
        delete req.headers['x-api-key'];
        return next();
      }
  };
}
