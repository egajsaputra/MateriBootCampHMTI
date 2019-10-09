var User = require("./user.model");

// Method HTTP: GET, POST, PUT, DELETE, PATCH, OPTION

// Status code HTTP
// 200 = OK
// 201 = Created
// 204 = No content
// 304 = Not modified
// 400 = Bad request
// 401 = Unauthorized
// 403 = Access denied
// 404 = Not found
// 405 = Method not allowed
// 422 = Unprocessable entity
// 500 = Internal server error
// 502 = Bad gateway
// 503 = Service unavailable

// /api/users Method: GET - 200
exports.index = function(req, res) {
  return res.status(200).json({
    success: true,
    data: User
  });
};

// /api/users:id Method: GET - 200 or 404
exports.show = function(req, res) {};

// /api/users Method: POST - 201 or 422 or 400
exports.create = function(req, res) {};

// /api/users:id Method: PUT - 200 or 404 or (422 or 400)
exports.update = function(req, res) {};

// /api/users:id Method: DELETE - 200 or 204 or (404)
exports.destroy = function(req, res) {};
