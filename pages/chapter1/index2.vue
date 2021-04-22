<template>
  <div class="container">

    <div class="row">
      <div class="col-sm-12">
        <chapter-title :text="chapter.title"/>
        <content-title :text="content.title"/>
        <div class="summary">{{ content.summary }}</div>
      </div>

      <div class="col-sm-12">
        <div class="sandbox">
          <h3 v-if="status === 1">{{ message1 }}</h3>
          <h3 v-else-if="status === 2">{{ message2 }}</h3>
          <h3 v-else>{{ message3 }}</h3>
        </div>
      </div>
    </div>

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
        <div class="col-sm-4 cos-12 offset-sm-4 mt-5">
          <nuxt-link to='/' class="btn btn-block btn-primary"> <fa icon="home"></fa> TOPに戻る </nuxt-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index2.vue',
  data() {
    return  {
      chapter: null,
      content: null,
      status: 1,
      message1: 'Hello Vuetrial !!',
      message2: 'Good Morning Vuetrial !!',
      message3: 'Good Evening Vuetrial !!',
    }
  },
  created() {
    this.chapter = this.$chapters['chapter1']
    this.content = this.chapter.contents[1]
  }
}
</script>

<style scoped>

</style>
