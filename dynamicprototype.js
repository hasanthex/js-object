var dynamicPrototypePattern = function(name, email, contact){
  // property
  this.name = name;
  this.email = email;
  this.contact = contact;
  
  // this method will create only one time. 
  if( typeof this.show !== 'function'){
      dynamicPrototypePattern.prototype.show = function(){
        console.log(this.name+' - '+this.email+' - '+this.contact);
      };  
  }  
};

var fact1 =  new dynamicPrototypePattern("Muhammad hasan", "hasan@gmail.com", "123456789");
fact1.show();
