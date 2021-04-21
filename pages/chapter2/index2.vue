<template>
  <div class="container">

    <div class="row">
      <div class="col-sm-12">
        <ChapterTitle :text="chapter.title"/>
        <ContentTitle :text="content.title"/>

        <h3 class="mb-3">ディレクトリ構成</h3>
        <vue-code-highlight language="bash">- assets/             # Sassフォイル、画像、フォントなどコンパイルされていないアセット
- components/         # Vue.js コンポーネントを配置。コンポーネントは、再利用可能なページのさまざまな部分を構成する部品。
- dist/               # distribution の略。generate コマンドにより静的コンテンツが書き出させれる
- layouts/ 　　　　　　 # アプリケーションのレイアウトファイルを配置する
- middleware/         # アプリケーションミドルウェアを配置する。レンダリング前に実行するカスタム関数など
- pages/              # アプリケーションのビューとルートを配置。
- plugins/            # アプリケーションがインスタンス化する前に実行する Javascript プラグインを配置。
- static/             # webpackしない画像ファイルやコンパイル不要なファイルを配置。
- store/              # Vuex ストアに関するファイルを格納。
- nuxt.config.js　　　 # Muxt.jsの構成ファイル
- package.json        # npmのパッケージ構成ファイル</vue-code-highlight>

        <h3 class="mt-5">静的ルーティング</h3>
        <p>
          Nuxt.js は pages ディレクトリにある Vue ファイルのディレクトリ構造に基づいて、<a href="https://router.vuejs.org/ja/" target="_blank">vue-router</a> の設定を自動的に生成します。pages ディレクトリに .vue ファイルを作成すると、特別な設定をせずとも基本的なルーティングが動作するようになります。
        </p>
        <p> → <a href="https://ja.nuxtjs.org/docs/2.x/features/file-system-routing/" target="_blank">ファイルシステムに基づくルーティング</a></p>
        <vue-code-highlight language="bash">- pages/
          |- chapter1/
          |- index1.vue
          |- index2.vue
          |- index3.vue
          |- chapter2/
          |- index1.vue
          |- index2.vue
          |- index3.vue</vue-code-highlight>

        <h3 class="mt-5">動的ルーティング</h3>
        <p>パラメータを指定した動的なページングを行うことができます。<nuxt-link to="/photos/1">デモページ(/photos/1)</nuxt-link> に移動してみましょう。</p>
        <p> → <a href="https://ja.nuxtjs.org/docs/2.x/features/file-system-routing/#動的なルーティング" target="_blank">動的ルーティング</a></p><vue-code-highlight language="bash">- pages/
  |- photos/
    |- _id.vue</vue-code-highlight>

        <span class="badge badge-primary">Vue</span>
        <vue-code-highlight language="markup">{{content.html}}</vue-code-highlight>

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
  name: 'index1.vue',
  data() {
    return  {
      chapter: null,
      content: null,
      message: 'Hello Vuetrial !!'
    }
  },
  created() {
    this.chapter = this.$chapters['chapter2']
    this.content = this.chapter.contents[1]
  }
}
</script>

<style scoped>

</style>
