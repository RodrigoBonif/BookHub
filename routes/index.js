var express = require('express');
var router = express.Router();


/*
 * Rotas GET de usuários
*/

/* GET login page */
router.get('/', function(req, res, next) {
  if (global.usuarioEmail && global.usuarioEmail != "") {
    res.redirect('home');
  }

  res.render('index', { titulo: 'BookHub - Login e Cadastro' });
});


/* GET home page */
router.get('/home', function(req, res, next) {
  verificarLogin(res);
  res.render('home', { titulo: 'Bookhub - Home' });
});

/**
 * Rotas POST de usuários
*/

/* POST login */
router.post('/login', async function(req, res, next){
  const email = req.body.email ;
  const senha = req.body.senha;

  const usuario = await global.banco.buscarUsuario({email,senha});

  global.usuarioCodigo = usuario.idUsuario;
  global.usuarioEmail = usuario.emailUsuario;
  res.redirect('home');
})



/**
 * 
 * Funções diversas
 * 
 */

function verificarLogin(res)
{
  if (!global.usuarioEmail || global.usuarioEmail == "")
    res.redirect('/');
}



module.exports = router;
