const express = require('express');
const app = express();
const port = 3001;
//used in templating engine, useless in react
//app.set('view cache', true) 
//CORS, used for solving the error when frontend calls the interfaces of backend
app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin', '*');  //Allow the cross-origin request from all origin
    res.header('Access-Control-Allow-Headers', 'Content-Type'); //Allow the request from frontend can bring request header
    next();
});

app.get('/api/context', (req,res) => {
    const context = {name: '<b>Buttercup</b>'};
    res.json(context); //return json data
})

app.get('/api/currency', (req,res) => {
    const context = {
        currency: {
            name: 'United States dollars',
            abbrev: 'USD'
        },
        tours: [
            {name: 'Hood River', price: '$99.95'},
            {name: 'Oregon Coast', price: '$159.95'}
            
        ],
        specialsUrl: '/january-specials',
        currencies: ['USD', 'GBP', 'BTC']
    }
    res.json(context);
})
app.listen(port, ()=>{
    console.log('http://localhost:3001/api/context');
})