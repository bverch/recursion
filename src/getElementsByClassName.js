// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var nodeList = [];
  function recursiveTestForName(node) {
    if (_.contains(node.classList,className)) {
      nodeList.push(node);
    }
	for(var i = 0; i < node.childNodes.length; i++){
      recursiveTestForName(node.childNodes[i]);
	}
  }
  recursiveTestForName(document.body);
  return nodeList;
};
