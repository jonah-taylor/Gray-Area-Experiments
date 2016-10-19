var handler = function(event){
  document.querySelector('#js-stuff').textContent = 'hello';
};

document.addEventListener("DOMContentLoaded", handler);
