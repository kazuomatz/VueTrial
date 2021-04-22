<template>
  <div class="container">

    <div class="row">
      <div class="col-sm-12">
        <chapter-title :text="chapter.title"/>
        <content-title :text="content.title"/>

        <p>
          公式サイト（<a href="https://jp.vuejs.org/v2/guide/instance.html#ライフサイクルダイアグラム" target="_blank">ライフサイクルのダイアグラム</a> ）
        </p>

        <table class="table table-striped">
          <thead>
          <tr>
            <th></th>
            <th> ライフサイクル </th>
            <th> タイミング </th>
          </tr>
          </thead>
          <tr>
            <td> 1 </td>
            <td> beforeCreate </td>
            <td> インスタンスが生成されデータが初期化される前 </td>
          </tr>
          <tr>
            <td> 2 </td>
            <td> created </td>
            <td> インスタンスが生成されデータが初期化された後 </td>
          </tr>
          <tr>
            <td> 3 </td>
            <td> beforeMount </td>
            <td> インスタンスが DOM 要素にマウントされる前 </td>
          </tr>
          <tr>
            <td> 4 </td>
            <td> mounted </td>
            <td> インスタンスが DOM 要素にマウントされた後 </td>
          </tr>
          <tr>
            <td> 5 </td>
            <td> beforeUpdate </td>
            <td> データが更新され DOM に適用される前 </td>
          </tr>
          <tr>
            <td> 6 </td>
            <td> updated </td>
            <td> データが更新され､且つ DOM に適用された後 </td>
          </tr>
          <tr>
            <td> 7 </td>
            <td> beforeDestroy </td>
            <td> Vue インスタンスが破壊される前 </td>
          </tr>
          <tr>
            <td> 8 </td>
            <td> destroyed </td>
            <td> Vue インスタンスが破壊された後 </td>
          </tr>
        </table>
      </div>

      <div class="col-sm-12">
        <div class="sandbox">
          {{message}}
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
      <div class="col-sm-4 cos-12 offset-sm-4 mt-5">
        <nuxt-link to='/' class="btn btn-block btn-primary"> <fa icon="home"></fa> TOPに戻る </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index12.vue',
  data() {
    return  {
      messages: []
    }
  },
  computed: {
    message () {
      return this.messages.join(' -> ')
    }
  },
  beforeCreate() {
    // 呼ぶとエラー
    //this.messages.push('beforeCreate')
  },
  created() {
    this.chapter = this.$chapters['chapter1']
    this.content = this.chapter.contents[11]
    this.messages.push('created')
  },
  beforeMount() {
    this.messages.push('beforeMount')
  },
  mounted() {
    this.messages.push('mounted')
  },
  beforeUpdate() {
    console.log(this.message + ' -> ' + 'beforeUpdate')

    // 呼ぶと無限ループ
    // this.messages.push('beforeUpdate')
  },
  updated() {
    console.log(this.message + ' -> ' + 'updated')

    // 呼ぶと無限ループ
    // this.messages.push('updated')
  },
  beforeDestroy() {
    this.messages.push('beforeDestroy')
  },
  destroyed() {
    this.messages.push('destroyed')
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
