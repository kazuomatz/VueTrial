<template>
  <div class="container">

    <div class="row">
      <div class="col-sm-12">
        <ChapterTitle :text="chapter.title"/>
        <ContentTitle :text="content.title"/>
        <div class="summary">{{ content.summary }}</div>
      </div>
    </div>

    <h1 class="title">{{ message }}</h1>

    <div class="row">
      <div class="col-sm-8">
        <span class="badge badge-primary">Vue</span>
        <vue-code-highlight language="markup">{{content.html}}</vue-code-highlight>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-8">
        <span class="badge badge-primary">JS</span>
        <vue-code-highlight language="javascript">{{content.code}}</vue-code-highlight>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-8">
        <span class="badge badge-primary">CSS</span>
        <vue-code-highlight language="markup">{{content.css}}</vue-code-highlight>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <div class="check-point">
          templateは、単一のルート要素のみを含むことができます。<br/>
          cssは、scopedを記述することでこのコンポーネント内のみ有効になります。また、langを指定することにより、LessやSassを記述することができます。
        </div>
      </div>
    </div>

    <div class="row">
        <div class="col-sm-4 cos-12 offset-sm-4 mt-5">
          <nuxt-link to='/' class="btn btn-block btn-primary"> <fa icon="home"></fa> TOPに戻る </nuxt-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index8.vue',
  data() {
    return  {
      chapter: null,
      message: 'Hello VueTrial !!'
    }
  },
  methods: {
    funcA() {
      /* do something */
    }
  },
  created() {
    this.chapter = this.$chapters['chapter1']
    this.content = this.chapter.contents[7]
  }
}
</script>

<style lang="scss" scoped>
h1 {
  &.title {
      color: red;
   }
}
.answer {
  font-size: 1.2rem;
  color: red;
  padding: 0.375rem 0.75rem;
}
.plus {
  padding: 0 15px;
}
</style>
