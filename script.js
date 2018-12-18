$(document).ready(function() {

  var winner = "";

  var firstName = $.getJSON('https://raw.githubusercontent.com/dariusk/corpora/master/data/humans/firstNames.json' ,fName, "jsonp");

  function fName(data) {
    var len = data.firstNames.length;
    winner+=data.firstNames[Math.floor(Math.random()*(len-0))];
    callback1();
  }

  function callback1(){
    var lastName = $.getJSON('https://raw.githubusercontent.com/dariusk/corpora/master/data/humans/lastNames.json' ,lName, "jsonp");
  }

  function lName(data){
    var len = data.lastNames.length;
    winner+=(" " + data.lastNames[Math.floor(Math.random()*(len-0))]);
  }

  setTimeout(function(){
    console.log(winner);
    $('.winner-name').html(winner);
  }, 250);

});
