<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <chapter-title text="演習"/>
      </div>

      <div class="col-sm-12">
        <content-title text="みしまコロッケアプリを作ろう"/>
      </div>

      <div class="col-sm-12">

        <table class="table table-bordered">
          <tr>
            <td>みしまコロッケ</td>
            <td><a href="https://www.city.mishima.shizuoka.jp/mishima_info/croquette/" target="_blank">三島市公式Webサイト</a></td>
          </tr>
          <tr>
            <td>リソース</td>
            <td>三島市オープンデータ <a href="http://linkdata.org/work/rdf1s3692i" target="_blank">みしまコロッケ認定店</a></td>
          </tr>
          <tr>
            <td>JSONデータ</td>
            <td>EXCELファイルをJSON化しました。 <b-button :href="url" target="_blank" variant="primary"><fa icon="file-code"/>JSONをみる</b-button></td>
          </tr>
        </table>
      </div>

      <div class="col-sm-6 offset-sm-3 mt-3">
          <img src="/images/08.jpg" alt="photo" class="img-thumbnail rounded mx-auto d-block"/>
      </div>
    </div>

    <div class="col-sm-12">
      <h3>axiosを使ったAjax通信</h3>
      <p class="mt-3 mb-3">
      <a href="https://github.com/axios/axios" target="_blank">axios</a>は、ブラウザや node.js で動く Promise ベースの HTTP クライアントモジュールです。NuxtJsでは一般的にAjax通信を行う場合にaxiosを使います。
      </p>
    </div>

    <div class="col-sm-8">

      <vue-code-highlight language="bash">$ yarn add @nuxtjs/axios</vue-code-highlight>
      <p>* 本プロジェクトでは設定済みです。</p>


      <span class="badge badge-primary">nuxt.config.js</span>
      <vue-code-highlight language="javascript">export default {
  ssr: false,
  target: 'static',
    :
    :
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios"
  ],
    :
    :
}</vue-code-highlight>
    </div>

    <div class="col-sm-8">
      <span class="badge badge-primary">JS</span>
      <vue-code-highlight language="javascript">{{content.code}}</vue-code-highlight>
    </div>

    <div class="col-sm-4 cos-12 offset-sm-4 mt-5">
      <nuxt-link to='/' class="btn btn-block btn-primary"> <fa icon="home"></fa> TOPに戻る </nuxt-link>
    </div>

  </div>
</template>
<script>
export default {
  name: "index1",
  data() {
    return {
      url: 'https://d1zo7z5hf7zka2.cloudfront.net/croquette.json',
      shops: []
    }
  },
  mounted() {
    this.getData()
  },
  created() {
    this.chapter = this.$chapters['chapter3']
    this.content = this.chapter.contents[0]
  },
  methods: {
    async getData() {
        const data = await this.$axios.$get(this.url)
        this.shops = data.shops;
      }
    }
}
</script>

<style scoped>

</style>
