<template>
  <div class="container">

    <div class="row">
      <div class="col-sm-12">
        <ChapterTitle :text="chapter.title"/>
        <ContentTitle :text="content.title"/>
        <div class="summary">{{ content.summary }}</div>

        <div>
          <h4>
            computed
          </h4>
          <ul>
            <li>
              関数ではなく、プロパティ。呼び出しに( )は不要。
            </li>
            <li>
              リアクティブな依存関係に基づいてキャッシュされる。
            </li>
            <li>
              リアクティブな依存関係が更新されたときに<b><u>だけ</u></b>再評価され、依存がない場合は更新されない。
            </li>
          </ul>

          <h4>
            methods
          </h4>

          <ul>
            <li>
              任意の処理を行う。関数・メソッド。呼び出しには（ ）が必要。
            </li>
            <li>
              画面の再描画が起きる度に実行される
            </li>
          </ul>
        </div>
      </div>

      <div class="col-sm-12">
        <div class="sandbox">
          <form>
            <div class="form-inline">
              <div class="form-group">
                <input type="number"
                       class="form-control"
                       v-model.number="value1"/>
              </div>
              <div class="plus"> + </div>
              <div class="form-group">
                <input type="number"
                       class="form-control"
                       v-model.number="value2"/>
              </div>
            </div>
          </form>
          <div class="form-group mt-3">
            <label>答え(methods)</label>
            <div class="answer">{{ calcMethod() }}</div>
          </div>

          <div class="form-group mt-3">
            <label>答え(computed)</label>
            <div class="answer">{{ calcComputed }}</div>
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
      <div class="col-sm-4 cos-12 offset-sm-4 mt-5">
        <nuxt-link to='/' class="btn btn-block btn-primary"> <fa icon="home"></fa> TOPに戻る </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'index9.vue',
  data() {
    return  {
      chapter: null,
      content: null,
      value1: 0,
      value2: 0.
    }
  },
  methods: {
    calcMethod() {
      return this.value1 + this.value2
    }
  },
  computed: {
    calcComputed() {
      return this.value1 + this.value2
    }
  },
  created() {
    this.chapter = this.$chapters['chapter1']
    this.content = this.chapter.contents[8]
  }
}
</script>

<style lang="scss" scoped>
.answer {
  font-size: 1.2rem;
  color: red;
  padding: 0.375rem 0.75rem;
}
.plus {
  padding: 0 15px;
}
</style>
