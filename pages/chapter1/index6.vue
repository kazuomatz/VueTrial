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
          <form>
            <div class="form-inline">
              <div class="form-group">
                <input type="number"
                       name="value-1"
                       class="form-control"
                       v-model.number="value1"/>
              </div>
              <div class="plus"> + </div>
              <div class="form-group">
                <input type="number"
                       name="value-1"
                       class="form-control"
                       v-model.number="value2"/>
              </div>
            </div>
          </form>
          <div class="form-group mt-3">
            <label>答え</label>
            <div class="answer">{{ calc() }}</div>
          </div>
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
      <div class="col-sm-12">
        <div class="check-point">
          inputタグだけでなく、textarea、select、checkbox、radioもバインディングできます（ <a href="https://jp.vuejs.org/v2/guide/forms.html" target="_blank">フォーム入力バインディング</a> )。<br/>
          v-model.number="xxxx" とすると、入力値をnumberに変換します。
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
  name: 'index6.vue',
  data() {
    return  {
      chapter: null,
      content: null,
      value1: 0,
      value2: 0
    }
  },
  methods: {
    calc() {
      return this.value1 + this.value2;
    }
  },
  created() {
    this.chapter = this.$chapters['chapter1']
    this.content = this.chapter.contents[5]
  }
}
</script>

<style scoped>
.answer {
  font-size: 1.2rem;
  color: red;
  padding: 0.375rem 0.75rem;
}
.plus {
  padding: 0 15px;
}
</style>
