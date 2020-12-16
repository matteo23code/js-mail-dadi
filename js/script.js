
var mail = prompt('Inserisci la tua mail.');
var start = document.getElementById('start');
var mailEsatta = ['basile.matteo39@gmail.com','matteo.basile56@gmail.com','boolean@gmail.com'];
var controlloMail = mail + mailEsatta;

for (var i = 0; i < mailEsatta.length; i++) {
  if(mailEsatta[i] === mail){
    mailEsatta = true;
  }
}
var click = document.getElementById('button');
var dadout = document.getElementById('dadout');
var dadopc = document.getElementById('dadopc');
var min = 1;
var max = 6;
var dadopc = Math.floor(Math.random() * (max + 1 - min) + min);
var dadout = Math.floor(Math.random() * (max + 1 - min) + min);
var risultato = document.getElementById('risultato');

if (mailEsatta = mail) {
  start.innerText = 'Puoi giocare!';
  click.innerText = 'Clicca qui!';
  click.addEventListner('click',
  function(){
    document.getElementById("dadout").innerHTML = dadout;
    document.getElementById("dadopc").innerHTML = dadopc;
    if (dado1 > dado2) {
      risultato.innerText = 'Hai vinto';
    }else if (dado1 < dado2) {
      risultato.innerText = 'Hai perso';
    }else {
      risultato.innerText = 'pareggio';
    }
  })
}  else {
  start.innerText = 'per giocare devi essere loggato';
  }
