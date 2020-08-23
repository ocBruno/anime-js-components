import anime from 'animejs/lib/anime.es.js'

const animationTimeline = (animationsArray, duration) => {
  console.log(duration)
  const timeline = anime.timeline({
    easing: 'easeOutExpo',
    duration: duration
  })
  
  animationsArray.forEach((animation) => timeline.add(animation))

 }

export {animationTimeline}
