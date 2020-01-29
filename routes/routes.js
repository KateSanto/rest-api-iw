const countryRoutes = require('./countries');

const appRouter = (app) => {
    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
    });
    countryRoutes(app);
};

module.exports = appRouter;
module.exports = countryRoutes;