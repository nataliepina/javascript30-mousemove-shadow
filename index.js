const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100; // 100px


function shadow(e) {
  const { offsetWidth: width, offsetHeight: height} = hero;
  let {offsetX: x, offsetY: y } = e;

  if(this !== event.target) {
    x = x + e.target.ofsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width * walk) - (walk - 2)); // 50 and -50 for our walk 
  const yWalk = Math.round((y / width * walk) - (walk - 2));

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255, 0, 255, .7), 
    ${xWalk * -1}px ${yWalk}px 0 rgba(0, 255, 255, .7),
    ${yWalk}px ${xWalk * -1}px 0 rgba(0, 255, 0, .7),
    ${yWalk * -1}px ${xWalk}px 0 rgba(0, 0, 255, .7)
  `;
}

hero.addEventListener('mousemove', shadow);