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
          <form>
            <div class="form-group">
              <label>値</label>
              <input type="text"
                     class="form-control"
                     v-model="value1"/>
            </div>
            <div class="form-group">
              <label>入力された値</label>
              <div class="answer">{{value1}}</div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-8">
        <span class="badge badge-primary">Vue</span>
        <vue-code-highlight language="markup">
          {{content.html}}
        </vue-code-highlight>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-8">
        <span class="badge badge-primary">JS</span>
        <vue-code-highlight language="javascript">
          {{content.code}}
        </vue-code-highlight>
      </div>
    </div>

    <div class="row">
        <div class="col-sm-4 cos-12 offset-sm-4 mt-5">
          <nuxt-link to='/' class="btn btn-block btn-primary"> <fa icon="home"></fa> TOPに戻る </nuxt-link>
        </div>
    </div>

  </div>
</template>>


<script>
export default {
  name: "index5.vue",
  data() {
    return  {
      chapter: null,
      content: null,
      value1: 'First Text'
    }
  },
  created() {
    this.chapter = this.$chapters['chapter1']
    this.content = this.chapter.contents[4]
  }
}
</script>

<style scoped>
.answer {
  font-size: 1.2rem;
  color: red;
  padding: 0.375rem 0.75rem;
}
</style>
