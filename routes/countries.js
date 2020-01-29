const countries = require('./countries.json');


const countryRoutes = (app) => {
    
    app.get('/countries/:countryCode', (req, res) => {
        if (req.params.countryCode) {
            code = req.params.countryCode;
            // const countries = require('./data/countries.json')
            // const countryCode = req.params.countryCode;
            const countryName = countries[code];
            
            res.send(countryName);
        } else {
            
            res.send(countries);
        }
    });
}


module.exports = countryRoutes;


