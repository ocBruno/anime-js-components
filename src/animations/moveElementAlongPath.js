import anime from 'animejs/lib/anime.es.js';

export const  moveElementAlongPath = (element, _path) => {

const path = anime.path(_path);

anime({
  targets: element,
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  easing: 'linear',
  duration: 5000,
  loop: true
})

}