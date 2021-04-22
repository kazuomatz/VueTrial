<template>
  <b-container>

    <b-row>
      <b-col cols="12">
        <chapter-title :text="chapter.title"/>
        <content-title :text="content.title"/>
        <div class="summary">{{ content.summary }}</div>
      </b-col>
    </b-row>

    <b-row>
      <b-col sm="12" class="mb-3">
        <h3>vue-fontawesome</h3>
        <p>
          <vue-code-highlight language="bash">$ yarn add @fortawesome/fontawesome-svg-core
$ yarn add @fortawesome/free-solid-svg-icons
$ yarn add @fortawesome/vue-fontawesome@latest
          </vue-code-highlight>

          <span class="badge badge-primary">nuxt.config.js</span>
          <vue-code-highlight language="javascript">export default {
　ssr: false,
　target: 'static',
　　　:　
　　　:
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/fontawesome.js'
  ],
　　　:
　　　:
}</vue-code-highlight>

          <span class="badge badge-primary">fontawesome.js</span>
          <vue-code-highlight language="javascript">import Vue from 'vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

// Register the component globally
Vue.component('fa', FontAwesomeIcon)</vue-code-highlight>
        </p>
        <p class="mt-3 mb3">この例では、<a href="https://fontawesome.com/icons?d=gallery&p=2&s=solid&m=free" target="_blank">FontAwesome 5 Freeアイコン</a>のSolidを使用できるようにしています。</p>
      </b-col>

      <b-col sm="12">
        <div class="icons">
          <fa :icon="icon" v-for="icon in icons" :style="{ color: randomColor() }"/>
        </div>
      </b-col>

      <b-col sm="12">
        <span class="badge badge-primary">Vue</span>
        <vue-code-highlight language="markup">{{this.content.html}}</vue-code-highlight>
      </b-col>

      <b-col sm="12">
        <span class="badge badge-primary">JS</span>
        <vue-code-highlight language="javascript">{{this.content.code}}</vue-code-highlight>
      </b-col>

      <b-col sm="12">
        <span class="badge badge-primary">CSS</span>
        <vue-code-highlight language="markup">{{this.content.css}}</vue-code-highlight>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12" sm="4" offset-sm="4" class="mt-3">
        <nuxt-link to='/' class="btn btn-block btn-primary"> <fa icon="home"></fa> TOPに戻る </nuxt-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

import animalComponent from '~/components/animal-component';

export default {
  name: 'index13.vue',
  data() {
    return  {
      icons: [  'home', 'file', 'bicycle', 'box-open', 'car', 'cat', 'dove',
                'feather', 'football-ball', 'grin-beam-sweat', 'mountain', 'camera-retro'
      ],
      colors: [ '#82c91e', '#f783ac', '#4c6ef5', '#15aabf','#be4bdb', '#fd7e14', '#183153', '#ff0000' ]
    }
  },
  methods: {
    randomColor() {
      return this.colors [Math.floor(Math.random() * this.colors.length) ];
    }
  },
  created() {
    this.chapter = this.$chapters['chapter2']
    this.content = this.chapter.contents[3]
  }
}
</script>

<style lang="scss" scoped>
.icons {
  padding: 30px 15px;
  margin: 30px 0;
  border: 1px solid #ccc;
  [data-icon] {
    font-size: 5rem;
    padding: 5px;
  }
}
</style>
