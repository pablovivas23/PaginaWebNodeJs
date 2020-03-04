const express=require('express');
const router=express.Router();


router.get('/',(req,res)=>{
	
	res.render('index.html',{title:'First WebService'});
});

router.get('/contacto',(req,res)=>{
	res.render('contacto.html',{title:'Contacto Pagina'});
});

router.get('/sintomas',(req,res)=>{
	res.render('sintomas.html',{title:'Sintomas Pagina'});
});

router.get('/causas',(req,res)=>{
	res.render('causas.html',{title: 'Causas Pagina'});
});
module.exports=router;