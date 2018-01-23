# vue-sprite-animator


## Install

Install with npm or yarn:

```sh
$ npm install --save vue-sprite-animator
# or
$ yarn add vue-sprite-animator
```

## Example

> Use [spritesheet.js](https://github.com/krzysztof-o/spritesheet.js/) to generate spritesheet with the `jsonarray` format.

#### Install the plugin

```js
import Vue from 'vue'
import App from './App'

import VueSpriteAnimator from 'vue-sprite-animator'
Vue.use(VueSpriteAnimator)

new Vue({
  components: { App },
  template: '<App/>'
}).$mount('#app')
```

#### Use it

```vue
<template>
  <div id="wrapper">
    <v-sprite :id="'sprite'"
      :spritesheet="require('../assets/spritesheet.png')"
      :json="require('../assets/spritesheet.json')"
      :yoyo="false"
      :fps="30"
      ref="sprite"
    ></v-sprite>
    <button @click="play">play</button>
    <button @click="stop">stop</button>
  </div>
</template>

<script>
  export default {
    methods: {
      play () {
        this.$refs.sprite.play()
      },
      stop () {
        this.$refs.sprite.stop()
      }
    }
  }
</script>
```

## Available props

* `spritesheet` *(required)*: path to the spritesheet image
* `json` *(required)*: path to the spritesheet json descriptor (use [spritesheet.js](https://github.com/krzysztof-o/spritesheet.js/))
* `fps`: default is `30`
* `autoplay`: default is `true`
* `yoyo`: default is `false`
* `id`: default is `vue-sprite`
