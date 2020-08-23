import anime from 'animejs/lib/anime.es.js';

export const drawPathStroke = (target) => {
  return {
    targets: target,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 3300,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: false
  };
}