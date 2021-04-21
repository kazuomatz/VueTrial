<template>
  <div class="container">

    <div class="row">
      <div class="col-sm-12">
        <ChapterTitle :text="chapter.title"/>
        <ContentTitle :text="content.title"/>

        <div>
          <h3>特徴</h3>
          <ul class="content">
            <li> Vueベースのフルスタックのフロントエンドフレームワーク</li>
            <li>SPA開発をしながらSSR, SSGを簡単に実装できる</li>
            <li>VueLoaderで、プリプロセッサ言語のローダーを読み込むことで、ES6やTypeScript, CoffeeScript, Saas, Less, Pugなどを使用して書くことができる</li>
          </ul>

          <h3>SPA(Single Page Application)</h3>
          <p>
            Webサーバーから返されたJavaScriptからクライアントサイト（ブラウザー）でHTMLを作成して表示する仕組み。リッチなUIを作ることができる反面、ブラウザーに負荷がかかり初期表示が遅い。SEOに不安がある。OG metaを個別のページ毎に指定できない。<br/>
            NuxtでジェネレートしたファイルをWebサーバーに置くだけで動かすことができるため、ホスティング先の選択肢が豊富。
          </p>


          <h3>SSR(Server Side Rendering)</h3>
          <p>
          Webページのレンダリングをブラウザの代わりにサーバー上で行う。サーバーサイド(Node.jsサーバー）でレンダリングされたページをクライアントに送信する。このことによりSPAの欠点(SEO、初期表示の遅さ、ブラウザへの負担など）を解消できる。
          </p>

          <span class="badge badge-primary">nuxt.config.js</span>
          <vue-code-highlight language="javascript">{{content.code}}</vue-code-highlight>
          <p class="mt-3">
            Nuxt 2.14.5より前は、ssrプロパティではなく、modeプロパティを 'spa', 'universal' (ssrあり） で指定していましたが、現在modeプロパティは非推奨になっています。
          </p>

          <h3>SSG(Static Site Generation)</h3>
          <p>
            各ページを静的なファイルとして書き出す。WebサーバーからHTMLファイルを送り出すためSPAの欠点(SEO、初期表示の遅さ、ブラウザへの負担など）を解消できる。NuxtでジェネレートしたファイルをWebサーバーに置くだけで動かすことができるため、ホスティング先の選択肢が豊富。
          </p>
        </div>
      </div>
    </div>

    <vue-code-highlight language="bash">
# ssr: false -> SPAの静的ファイルを書き出し
$ yarn generate

# ssr: true -> SSRの静的ファイルを書き出し
$ yarn generate
    </vue-code-highlight>


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
    this.content = this.chapter.contents[0]
  }
}
</script>

<style scoped>

</style>
