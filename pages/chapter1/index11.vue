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
          <label>クリック回数</label>
          <div class="answer">{{ count }}</div>
          <button type="button" v-on:click="countUp" class="btn btn-primary">カウント</button>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-8">
        <span class="badge badge-primary">Vue</span>
        <vue-code-highlight language="markup">{{this.content.html}}</vue-code-highlight>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-8">
        <span class="badge badge-primary">JS</span>
        <vue-code-highlight  language="javascript">{{this.content.code}}</vue-code-highlight >
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <div class="check-point">
          data.count を watch で監視します。 10回ボタンが押されたら、サーバーにデータを送信します。
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
  name: 'index11.vue',
  data() {
    return  {
      count: 1
    }
  },
  methods: {
    countUp() {
      this.count ++;
    }
  },
  watch: {
    count(after, before) {
      if (this.count % 10 === 0 ) {
        /* ajaxでデータを送信 */
        console.log("データ送信 カウント: " + this.count, before, after)
      }
    }
  },
  mounted() {
  },
  created() {
    this.chapter = this.$chapters['chapter1']
    this.content = this.chapter.contents[10]
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
