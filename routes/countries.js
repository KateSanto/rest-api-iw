const countries = require('../data/countries.json');

const countryRoutes = (app) => {

    app.get('/countries/:countryCode', (req, res) => {
        if (req.params.countryCode) {
            code = req.params.countryCode;
            const countryName = countries[code];
            res.send(countryName);
        }
    });

    app.get('/countries', (req, res) => {
        res.send(Object.values(countries));
    })
}


module.exports = countryRoutes;


