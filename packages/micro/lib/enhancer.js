const url = require('url');

function enhanceRequest(req) {
	req.query = url.parse(req.url,true).query;
	req.cookies = {};
	req.body = {};
}

function enhanceResponse(req) {
	req.send = function(body) {
		return this;
	};
	req.json = function(jsonBody) {
		return this;
	};
	req.status = function(statusCode) {
		return this;
	};
}

module.exports = handler => (req, res) => {
	handler(enhanceRequest(req), enhanceResponse(res));
};
