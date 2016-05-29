var express = require('express');
var Router = express.Router();
var navsConfig = require('../config/nav');

function changeActive(url){
	for(var i =0; i<navsConfig.length; i++){
		if(navsConfig[i].url === url){
			navsConfig[i].active = true;
		}else{
			navsConfig[i].active = false;
		}
	}
}

Router.get('/hello', function(req, res){
	res.send('hello');
})

Router.get('/home', function(req, res){
	changeActive('/home');
	res.render('home', {navs: navsConfig});
})

Router.get('/author', function(req, res){
	changeActive('/author');
	res.render('author', {navs: navsConfig});
})


module.exports = Router;