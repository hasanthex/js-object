var constructorPattern = function(name, email, contact){
  // object property
  this.name = name;
  this.email = email;
  this.contact = contact;
  this.show = function(){
      console.log(this.name+' - '+this.email+' - '+this.contact);
  };  
};

var fact1 = new constructorPattern('muhammad', 'email@to.com', '123456');
var fact2 = new constructorPattern('hasan', 'hasan@email.com', '987654');
fact1.show();
fact2.show();
