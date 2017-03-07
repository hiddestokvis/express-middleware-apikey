'use strict';

module.exports = function(api_keys) {
  return function(req, res, next) {
      if (api_keys && api_keys.indexOf(req.headers['x-api-key']) == -1 && api_keys[api_keys.indexOf(req.headers['x-api-key'])] !== req.headers['x-api-key'] || api_keys.length === 0) {
          res.status(401).send({ error: 'Invalid api_key' });
      } else {
        delete req.headers['x-api-key'];
        return next();
      }
  };
}
