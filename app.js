const innerwheel = document.querySelector('.innerwheel');
const spiner = document.querySelector('.spiner');

let value = Math.ceil(Math.random() * 3600);

spiner.addEventListener('click', () => {
  innerwheel.style.transform = "rotate(" + value + "deg)";
  value += Math.ceil(Math.random() * 3600);
});


