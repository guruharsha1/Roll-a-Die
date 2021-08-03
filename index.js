var random = Math.floor(Math.random() * 6) + 1;

var diceimg = "dice"+random+".png";

 document.querySelector("img").setAttribute("src",diceimg);
