(function (window){
var byeSpeaker={};
 byeSpeaker.speak = "Good Bye";

byeSpeaker.speak=function()
{  
	console.log(byeSpeaker.speak + " " + names);
} 

  window.byeSpeaker=byeSpeaker;
  })(window);