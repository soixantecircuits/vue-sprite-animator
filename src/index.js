import SpriteAnimator from './SpriteAnimator.vue'

const VueSpriteAnimator = {
  install (Vue, options) {
    Vue.component(SpriteAnimator.name, SpriteAnimator)
  }
}

export default VueSpriteAnimator
