const service = require('./service');

module.exports = function(app) {
    app.get('/api/hello_custom', function(req, res) {
        const message = service.getCustomMessage();
        res.send(message);
    });
};
