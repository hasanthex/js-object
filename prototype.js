var prototypePattern = function(){
  
  // assign an empty object
  
};

// object property
  prototypePattern.prototype.name    = "Not assign"; // Default name
  prototypePattern.prototype.email   = "Not Defined"; // Default email
  prototypePattern.prototype.contact = "Empty Contact"; // Default contact

  prototypePattern.prototype.show = function(){
      console.log(this.name+' - '+this.email+' - '+this.contact);
  };  

var fact1 =  new prototypePattern();
fact1.name    = "Muhammad hasan";
fact1.email   = "hasan@email.com";
// fact1.contact = "123456789";
fact1.show();
