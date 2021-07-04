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

function books() {
=======
while (favbook != "Harry Potter" && favbook != "Gilden In Ach") {
  favbook = prompt("what is your favbook? (Harry Potter , Gilden In Ach) ")
}

 if (favbook == "Harry Potter") {
  var times = prompt("How many you prefer to see on our vlog ")
  for (var h = 0; h < times; h++) {

  while (favbook != "Harry Potter" && favbook != "Gilden In Ach") {
    favbook = prompt("what is your favbook? (Harry Potter , Gilden In Ach) ")
  }

  if (favbook == "Harry Potter") {
    var times = prompt("How many you prefer to see on our vlog ")
    for (var h = 0; h < times; h++) {

      document.write("<div>" + "<h3>" + favbook + "</h3>" + "<img src='https://townsquare.media/site/442/files/2020/07/Harry-Potter-Final.jpg ' alt='Harry Potter'" + "</div>")


    }

  }

  else if (favbook == "Gilden In Ach") {
    var times = prompt("How many you prefer to see on our vlog ")
    for (var h = 0; h < times; h++) {

      document.write("<div>" + "<h3>" + favbook + "</h3>" + "<img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/old-books-arranged-on-shelf-royalty-free-image-1572384534.jpg'>" + "</div>")

    }
  }

}

books();

var stars = prompt('How many stars you want to rate us?')

for(i = 0 ; i<stars ; i++){
document.write("<img src= 'https://iosexample.com/content/images/2020/04/CWRateKit.png'")
}

else if  (favbook == "Gilden In Ach") {
  var times = prompt("How many you prefer to see on our vlog ")
  for (var h = 0; h < times; h++) {

    document.write("<div>" + "<h3>" + favbook + "</h3>" + "<img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/old-books-arranged-on-shelf-royalty-free-image-1572384534.jpg'>" + "</div>")


  }
}

