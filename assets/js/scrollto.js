(function() // Code in a function to create an isolate scope
{
var main = document.getElementsByTagName('main');
main = main[0];
var link = document.getElementById('scroll-indicator');
var backlink = document.getElementById('scroll-back');

link.onclick = function(e)
  { 
    e.preventDefault();
    main.scrollTo(window.innerWidth * 2 , 0);
    link.className = " ";
    backlink.className = "show";
  };


backlink.onclick = function(e)
  { 
    e.preventDefault();
    main.scrollTo(0 , 0);
    backlink.className = " ";
    link.className = "show";
  };

  link.className = "show";
})();
