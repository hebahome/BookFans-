if (confirm("Have you ever hear about us")) {
  txt = "press ok";
  } else {
  txt = "you don't answer  it" ;
  }



  var person = prompt("plz type your name","your name ");
  var txt;
  if (person == null || person == "" ) {
    alert("user cancelled the prompt") ;
  } else {
    alert("Hello " + "How are you" + person);
  }
  if (person != null || person != " ")
  {
    alert("Hello type your name please" + person );
  }
