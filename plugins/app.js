import Vue from 'vue'
import ChapterTitle from '~/components/chapter-title'
import ContentTitle from '~/components/content-title'

Vue.component('ChapterTitle', ChapterTitle)
Vue.component('ContentTitle', ContentTitle)

import chapters from "../data/chapters"
Vue.prototype.$chapters = chapters

import { component as VueCodeHighlight  } from 'vue-code-highlight'
Vue.component('VueCodeHighlight', VueCodeHighlight)