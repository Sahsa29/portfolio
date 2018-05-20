function getQueryVariable(variable)
{ 
  var query = window.location.search.substring(1); 
  var vars = query.split("&"); 
  for (var i=0;i<vars.length;i++)
  { 
    var pair = vars[i].split("="); 
    if (pair[0] == variable)
    { 
      return pair[1]; 
    } 
  }
  return -1; //not found 
}

var name = getQueryVariable("name");
document.getElementById('name').innerHTML= decodeURI(name);

var photo = getQueryVariable("photo");
document.getElementById('photo').setAttribute('src', photo);


var email = getQueryVariable("email");
if(email != null){
  document.getElementById('email').innerHTML=email;

}

