// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //Stringify does not support undefined or functions
  if(obj === undefined){
	  return '';
  }
  //If object is primitive, just convert to string type
  else if(obj === null || obj.constructor === Number || obj.constructor === Boolean){
	  return '' + obj;
  }
  else if(obj.constructor === Function){
	  return '';
  }
  //String objects need to be put between quotes
  else if(obj.constructor === String){
	  return '"' + obj + '"';
  }
  //Here, we want to define the base case for an array, involving a call to stringifyJSON on each element
  else if(obj.constructor === Array){
	  if(obj.length === 0){
		  return '[]';
	  }
	  else{
		  var recursiveStringifies = [];
		  for(var i = 0; i < obj.length; i++){
			  recursiveStringifies.push(stringifyJSON(obj[i]));
		  }
		  return '[' + recursiveStringifies + ']';
	  }
  }
  //Here, we want to define the base case for an object, involving a call to stringifyJSON on each key/value
  else if(obj.constructor === Object){
	  var keys = Object.keys(obj);
	  var keyValsStringified = [];
	  for(var key in obj){
		  if(obj[key] === null){
			  keyValsStringified.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
		  }
		  //Do nothing if undefined or function (stringify doesnt support this)
		  else if(obj[key] === undefined || obj[key].constructor === Function){
			  
		  }
		  else{
			  keyValsStringified.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
		  }
	  }
	  return '{' + keyValsStringified +  '}';
  }
};