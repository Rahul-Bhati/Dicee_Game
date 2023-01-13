// for Player 1

var rand1 = Math.floor(Math.random() * 6 ) + 1 ;

// Image show rule
var randImg1 = "images/dice" + rand1 + ".png" ;

var image1 = document.querySelectorAll("img")[0] ;
image1.setAttribute("src" , randImg1) ;

// for Player 2

var rand2 = Math.floor(Math.random() * 6 ) + 1 ;

// Image show rule
var randImg2 = "images/dice" + rand2 + ".png" ;

var image2 = document.querySelectorAll("img")[1] ;
image2.setAttribute("src" , randImg2) ;

// Wining Msg

if(rand1 > rand2)
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins !" ;
else if(rand1 < rand2)
  document.querySelector("h1").innerHTML = "Player 2 Wins ! 🚩" ;
else
  document.querySelector("h1").innerHTML = "🚩 Draw ! 🚩" ;
