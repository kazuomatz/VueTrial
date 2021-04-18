<template>
  <div class="container">


    <div class="row">
      <div class="col-sm-12">
        <ChapterTitle :text="chapter.title"/>
        <ContentTitle :text="content.title"/>
        <div class="summary">{{ content.summary }}</div>
      </div>

      <div class="col-sm-12">
        <div class="sandbox">
          <h3 v-if="status == 1">{{ message1 }}</h3>
          <h3 v-else-if="status == 2">{{ message2 }}</h3>
          <h3 v-else="status == 3">{{ message3 }}</h3>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-8">
        <span class="badge badge-primary">Vue</span>
        <vue-code-highlight language="javascript">
          <pre>
          {{content.html}}
          </pre>
        </vue-code-highlight>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-8">
        <span class="badge badge-primary">JS</span>
        <vue-code-highlight language="javascript">
          <pre>
          {{content.code}}
          </pre>
        </vue-code-highlight>
      </div>
    </div>
  
  
    <div class="row">
        <div class="col-sm-4 cos-12 offset-sm-4 mt-5">
          <nuxt-link to='/' class="btn btn-block btn-primary"> <font-awesome-icon icon="home"></font-awesome-icon> TOPに戻る </nuxt-link>
        </div>
    </div>

  
  </div>

  
</template>>


<script>
export default {
  name: "index2.vue",
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
