const express = require('express')
const expressHandlebars = require('express-handlebars')
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

app.get('/', (req,res)=>{
    res.render('home');
})

app.get('/about', (req,res)=>{
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)]
    res.render('about', {fortune: fortune.getFortune});
})
//middleware
app.use((req,res) => {
    res.status(404)
    res.render('404')
})

app.use((err,req,res,next)=>{
    res.status(500)
    res.render('500')
})

app.listen(port, ()=> console.log(
    `Express started on http://localhost:${port}; ` +
    `press Ctrl-C to terminate.`
))