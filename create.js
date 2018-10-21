// Different ways of creating an object.
// 1. Create Object, Using the Object() constructor:
var obj_1 = new Object();

// 2. Create Object, Using Object.create() method:
var obj_2 = Object.create(null);

// 3. Create Object, Using the bracket's syntax
var obj_3 = {};

// 4. Create Object, Using a function constructor
var obj_4 = function(){}


// Create Object, Using the function constructor + prototype: 
var obj_5 = function(){}
obj_5.prototype.name  = 'Muhammad hasan';
obj_5.prototype.email = 'hasan@email.oom';
obj_5.prototype.show  = function(){console.log(this.name+' - '+this.email);}

var result = new obj_5();
result.show();
