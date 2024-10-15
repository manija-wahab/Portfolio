import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Draggable } from 'gsap/Draggable'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { TextPlugin } from 'gsap/TextPlugin'
import { CSSRulePlugin } from 'gsap/CSSRulePlugin'

gsap.registerPlugin(
  ScrollTrigger,
  Draggable,
  MotionPathPlugin,
  ScrollToPlugin,
  TextPlugin,
  CSSRulePlugin,
)

export const infoAnimations = () => {
  gsap.from('.info-title', { x: 200, stagger: 0.1 })
}

export const infoDetailsAnimations = () => {
  gsap.from('.info-details, li', { x: 200, stagger: 0.1 })
}

export const shapesAnimations = () => {
  gsap.to('.shape', {
    rotation: 360, // Rotate to 360 degrees
    duration: 2, // Duration of one rotation
    repeat: -1, // Infinite loop
    ease: 'none', // No easing for smooth rotation
  })
}
