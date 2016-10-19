document.addEventListener("DOMContentLoaded", function(event){
  var url = 'https://api.tumblr.com/v2/blog/p5js.tumblr.com/posts/photo';
  document.querySelector('js-#stuff').textContent = 'hello';

  var button = document.querySelector('#js-click');
  button.addEventListener('click', function(event){
    // do fetch on click
  });
  fetch(url).then(function(response){
    // console.log(response);
  }).then(function(){
    // console.log(arguments), it's not an array, but it's like one!
  });
});
