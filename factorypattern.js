var factoryPattern = function(name, email, contact){
  // empty object
  var obj = {};
  obj.name = name;
  obj.email = email;
  obj.contact = contact;
  obj.show = function(){
    console.log(obj.name+' - '+obj.email+' - '+obj.contact);
  } 
  return obj;
}
var fact1 = factoryPattern('muhammad', 'email@to.com', '123456');
var fact2 = factoryPattern('hasan', 'hasan@email.com', '987654');
fact1.show();
fact2.show();
