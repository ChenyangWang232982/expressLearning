const express = require('express');
const expressHandlebars = require('express-handlebars');
const handlers = require('./lib/handler');
const app = express();
const port = process.env.PORT || 3000
const fortune = require('./lib/fortune')
// configure Handlebars view engine
app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main',  //the content in views would replace {{{body}}} in main
}))
app.set('view engine', 'handlebars')
app.use(express.static(__dirname+'/public'));  //set the files in public forlder can be accessed directly, in that way, public would be invisible to client side
/**
 * middleware is processed in order, and static middleware—which is
 * usually declared first or at least very early—will override other routes.
 */
//order: middleeware -> route -> 4../5.. middleware server -> server

//Check header
//app.get('/headersCheck', (req, res)=>{
//    res.type('text/plain');
//    const headers = Object.entries(req.headers) // Common object => Array
//        .map(([Key, value]) => `${Key}: ${value}`);
//    res.send(headers.join('\n'));
//}) 
app.get('/', handlers.home)
app.get('/about', handlers.about)
//middleware
app.use(handlers.notFound)

app.use(handlers.serverError)

if(require.main === module) {  //Determine if the current file is the entry point file directly executed by Node.js.
    app.listen(port, ()=>{
        console.log(`Express started on http://localhost:${port}` + '; press Ctrl-C to terminate.')
    })
} else {
    module.exports = app
}