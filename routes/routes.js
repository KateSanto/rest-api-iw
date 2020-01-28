const countryRoutes = require('./countries');

const appRouter = (app, fs) => {
    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
    });

    app.get('/AL', (req, res) => {
        res.send('single country');

    });

    countryRoutes(app, fs);
};

module.exports = appRouter;