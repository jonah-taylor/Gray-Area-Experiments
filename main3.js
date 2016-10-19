document.addEventListener("DOMContentLoaded", function(_event){
  var url = 'https://api.tumblr.com/v2/blog/p5js.tumblr.com/posts/photo';
  document.querySelector('#js-stuff').textContent = 'hello';

  var button = document.querySelector('#js-click');
  button.addEventListener('click', function(event){
    debugger
  });
});
