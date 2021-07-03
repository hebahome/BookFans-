if (confirm("Have you ever hear about us")) {
  txt = "press ok";
} else {
  txt = "you don't answer  it";
}



var person = prompt("plz type your name", "your name ");
var txt;
if (person == null || person == "") {
  alert("user cancelled the prompt");
} else {
  alert("Hello " + "How are you" + person);
}
if (person != null || person != " ") {
  alert("Hello type your name please" + person);
}


var favbook = prompt("What is your fav book? (Harry Potter  , Gilden In Ach) ")

while (favbook != "Harry Potter" && favbook != "Gilden In Ach") {
  favbook = prompt("what is your favbook? (Harry Potter , Gilden In Ach) ")
}
if (favbook == "Harry Potter") {
  var times = prompt("How many you prefer to see on our vlog ")
  for (var h = 0; h < times; h++) {

    document.write("<div>" + "<h3>" + favbook + "</h3>" + "<img src='https://townsquare.media/site/442/files/2020/07/Harry-Potter-Final.jpg ' alt='Harry Potter'" + "</div>")


  }
}
  


  
