<template>
  <b-container>

    <b-row>
      <b-col cols="12">
        <chapter-title :text="chapter.title"/>
        <content-title :text="content.title"/>
      </b-col>
    </b-row>

    <b-row>
      <b-col sm="12" class="mb-3">
        <h3>BootStrapVue</h3>
        <p>
          <a href="https://bootstrap-vue.org/" target="_blank">BootStrapVue</a>を使用すると、BootStrapのコンポーネントをvueのコンポーネントとして利用することができます。<br/>
          Nuxt.Jsではプロジェクトを作成する時に、UI(CSS)フレームワークを選択することができます。
        </p>
        <vue-code-highlight language="bash">$ yarn create nuxt-app vuetrial
yarn create v1.22.10
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...

success Installed "create-nuxt-app@3.6.0" with binaries:
- create-nuxt-app
[#####################################################################] 344/344
create-nuxt-app v3.6.0
✨  Generating Nuxt.js project in test-1
? Project name: vuetrial
? Programming language: JavaScript
? Package manager: Yarn
? UI framework:
None
Ant Design Vue
BalmUI
❯ Bootstrap Vue    # <= このプロジェクトはBootStrapVueを選択
Buefy
Chakra UI
Element
Framevuerk
Oruga
Tachyons
Tailwind CSS
Windi CSS
Vant
View UI
Vuesax</vue-code-highlight>

        <p class="mt-3">BootStrapVue以外では、<a href="https://bulma.io/">Bulma</a>ベースの<a href="https://buefy.org/" target="_blank">Buefy</a>、<a href="https://element.eleme.io/" target="_blank">Element UI</a>などがよく使われています。</p>
        <p>BootStrapVueを選択してプロジェクトを作成すると、nuxt.config.jsは以下のようになります。</p>

        <span class="badge badge-primary">nuxt.config.js</span>
        <vue-code-highlight language="javascript">export default {
  ssr: false,
  target: 'static',
    :
    :
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt'
  ],
    :
    :
}</vue-code-highlight>

        <p class="mt-3">ただこのままだと、BootStrapのデフォルトの配色になってしまうので、配色を変えたい場合は、以下のように書き換えます。</p>
        <span class="badge badge-primary">nuxt.config.js</span>
        <vue-code-highlight language="javascript">export default {
　ssr: false,
　target: 'static',
　　　:　
　　　:
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/app.scss'
  ],
 　  :　
 　  :　
　　// Modules: https://go.nuxtjs.dev/config-modules
 modules: [　
    ['bootstrap-vue/nuxt', {css: false}]
 ],
　　　:
　　　:
 }</vue-code-highlight>

        <span class="badge badge-primary">app.scss</span>
        <vue-code-highlight language="css">// BootStrap テーマカスタム
@import "./variant";
@import "~bootstrap/scss/bootstrap.scss";</vue-code-highlight>

        <p class="mt-3">/assets/scss/variant.scss ファイルにテーマの設定をしてからbootstrap.scssを読み込むようにします。</p>
      </b-col>
      <b-col sm="12">
        <b-card header="入力フォーム">
          <b-card-body>
            <b-form v-on:submit="onSubmit" action="/" method="post">
              <b-form-group
                id="input-group-1"
                label="メールアドレス"
                label-for="email"
                description="ここはメールアドレスの入力欄です。"
              >
                <b-form-input
                  id="email"
                  v-model="form.email"
                  type="email"
                  placeholder="メールアドレスを入力して下さい。"
                  required
                />
              </b-form-group>
              <b-form-group id="input-group-2" label="好きな食べ物" label-for="food">
                <b-form-select
                  id="food"
                  v-model="form.food"
                  :options="foods"
                  required
                ></b-form-select>
              </b-form-group>

              <b-form-group id="input-group-3" label="好きな色">
                <b-form-checkbox-group
                  v-model="form.color"
                  id="color">
                  <b-form-checkbox v-for="color in colors" :value="color.value" :key="color.id">
                    <span class="color" :style="{backgroundColor: color.value}"></span>{{ color.text }}
                  </b-form-checkbox>
                </b-form-checkbox-group>
              </b-form-group>

              <b-button type="submit" variant="primary">送信</b-button>
            </b-form>
          </b-card-body>
        </b-card>
      </b-col>

      <b-col sm="12">
        <span class="badge badge-primary">Vue</span>
        <vue-code-highlight language="markup">{{this.content.html}}</vue-code-highlight>
      </b-col>

      <b-col sm="12">
        <span class="badge badge-primary">JS</span>
        <vue-code-highlight language="javascript">{{this.content.code}}</vue-code-highlight>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12" sm="4" offset-sm="4" class="mt-3">
        <nuxt-link to='/' class="btn btn-block btn-primary"> <fa icon="home"></fa> TOPに戻る </nuxt-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

import animalComponent from '~/components/animal-component';

export default {
  name: 'index13.vue',
  data() {
    return  {
      message: '',
      form : {
        email: '',
        food: null,
        color: []
      },
      foods: [{ text: 'ひとつ選んで下さい', value: null }, 'カツ丼', 'オムライス', 'ざるそば', 'ラーメン'],
      colors: [
        { id: 1, value: 'blue', text: '青'},
        { id: 2, value: 'red', text: '赤'},
        { id: 3, value: 'yellow', text: '黄色'},
        { id: 4, value: 'green', text: '緑'},
        { id: 5, value: 'purple', text: '紫'},
        { id: 6, value: 'orange', text: 'オレンジ'},
      ]
    }
  },
  methods: {
    onSubmit() {
      console.log("submit");
    }
  },
  created() {
    this.chapter = this.$chapters['chapter2']
    this.content = this.chapter.contents[2]
  }
}
</script>

<style lang="scss" scoped>
span.color {
  width : 15px;
  height: 15px;
  display: inline-block;
  margin: 0px 5px ;
}
</style>
