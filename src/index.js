console.log('Server works');
const express=require('express');
const app=express();///es el servidor
const path=require('path');
const indexRoute=require('./routes/');

//configuracion
app.set(`port`,4000);
app.set('views',path.join(__dirname,'views'));
app.engine('html',require('ejs').renderFile)
app.set('view engine','ejs');
//Middlewares//Antes que se ejecute una url

///rutas

///static files
app.use(indexRoute);
app.use(express.static(path.join(__dirname,'public')));

///Escuchando el servidor
app.listen(app.get('port'),()=>{
	console.log('Server on port',app.get('port'));
});