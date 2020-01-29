const countries = require('../data/countries.json');
console.log(countries);

const countryRoutes = (app) => {
    
    app.get('/countries/:countryCode', (req, res) => {
        if (req.params.countryCode) {
            code = req.params.countryCode;
            const countryName = countries[code];
            res.send(countryName);
            
        } else if (!req.params.countryCode) {
            const countries = require('../data/countries.json');
            // const allCountries = countries;
            
            res.send(countries);
        }
    });
}


module.exports = countryRoutes;


