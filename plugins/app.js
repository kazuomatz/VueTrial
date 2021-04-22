import Vue from 'vue'
import capterTitle from '~/components/chapter-title'
import contentTitle from '~/components/content-title'

Vue.component('chapter-title', capterTitle)
Vue.component('content-title', contentTitle)

import chapters from "../data/chapters"
Vue.prototype.$chapters = chapters

import { component as VueCodeHighlight  } from 'vue-code-highlight'
Vue.component('VueCodeHighlight', VueCodeHighlight)
import 'prism-es6/components/prism-markup-templating';
import 'prism-es6/components/prism-bash';
