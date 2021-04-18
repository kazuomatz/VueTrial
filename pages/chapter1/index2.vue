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
          <h3>{{ message }}</h3>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-6">
        <span class="badge badge-primary">Vue</span>
        <vue-code-highlight language="javascript">
          <pre>
          {{content.html}}
          </pre>
        </vue-code-highlight>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-6">
        <span class="badge badge-primary">JS</span>
        <vue-code-highlight language="javascript">
          <pre>
          {{content.code}}
          </pre>
        </vue-code-highlight>
      </div>
    </div>
  </div>
</template>>


<script>
export default {
  name: "index1.vue",
  data() {
    return  {
      chapter: null,
      content: null,
      message: 'Hello Vuetrial !!'
    }
  },
  created() {
    this.chapter = this.$chapters['chapter1']
    this.content = this.chapter.contents[0]
  }
}
</script>

<style scoped>

</style>
