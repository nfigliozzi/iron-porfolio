(function() // Code in a function to create an isolate scope
{
var main = document.getElementsByTagName('main');
main = main[0];
var link = document.getElementById('scroll-indicator');

link.onclick = function(e)
  { 
    e.preventDefault();
    main.scrollTo(window.innerWidth / 2 , 0);
    link.className = " ";
  };

link.className = "show";
})();