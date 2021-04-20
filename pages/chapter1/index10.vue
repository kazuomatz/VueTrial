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
          <div class="form-group mt-3">
            <label>10秒後は？(methods)</label>
            <div class="answer" v-show="status">{{ method10Seconds() }}</div>
          </div>
          <div class="form-group mt-3">
            <label>10秒後は？(computed)</label>
            <div class="answer" v-show="status">{{ compute10Seconds }}</div>
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
        </div>
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
  name: "index7.vue",
  data() {
    return  {
      chapter: null,
      content: null,
      time1: null,
      time2: null,
      status: true
    }
  },
  methods: {
    method10Seconds() {
      const dt = new Date();
      dt.setSeconds(dt.getSeconds() + 10);
      return dt;
    }
  },
  computed: {
    compute10Seconds() {
      const dt = new Date();
      dt.setSeconds(dt.getSeconds() + 10);
      return dt;
    }
  },
  mounted() {
    this.time1 = new Date();
    this.time2 = new Date();
  },
  created() {
    this.chapter = this.$chapters['chapter1']
    this.content = this.chapter.contents[9]
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
