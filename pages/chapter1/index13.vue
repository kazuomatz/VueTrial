<template>
  <div class="container">

    <div class="row">
      <div class="col-sm-12">
        <chapter-title :text="chapter.title"/>
        <content-title :text="content.title"/>
        <div class="summary">{{ content.summary }}</div>
      </div>

      <div class="col-sm-12">
        <div class="row">
          <animal-component :object="animal" class="col-sm-2"
                  v-for="animal in animals" :key="animal.id"
                  v-on:bark="message = $event"/>
        </div>
        <div class="message">{{ message }}</div>
        <p class="text-right">素材提供： <a href="https://www.irasutoya.com/" target="_blank">いらすとや</a></p>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <h3>呼び出し元コンポーネント</h3>
      </div>
      <div class="col-sm-8">
        <span class="badge badge-primary">Vue</span>
        <vue-code-highlight language="markup">{{this.content.html}}</vue-code-highlight>
      </div>

      <div class="col-sm-8">
        <span class="badge badge-primary">JS</span>
        <vue-code-highlight  language="javascript">{{this.content.code}}</vue-code-highlight >
      </div>

      <div class="col-sm-12 mt-3 mb-3">
        <ul class="content">
          <li>
            ~/components/animal-component.vue を animalComponentとしてインポートします。
          </li>
          <li>
            componentsプロパティにインポートしたanimalComponentを定義します。
          </li>
          <li>
           定義したanimalComponentは、カスタムタグ &lt;animal-component&gt;〜&lt;/animal-component&gt; で呼び出します。<br/>
            キャメルケース -> ケバブケース規則が適用可能 (&lt;animalComponent&gt;〜&lt;/animalComponent&gt; でも使用可)。
          </li>
          <li>
            引数 objectを渡します。
          </li>
        </ul>
      </div>

      <div class="col-sm-12">
        <h3>呼び出し先コンポーネント</h3>
      </div>
      <div class="col-sm-8">
        <span class="badge badge-primary">Vue</span>
        <vue-code-highlight language="markup">{{this.content.componentHtml}}</vue-code-highlight>
      </div>

      <div class="col-sm-8">
        <span class="badge badge-primary">JS</span>
        <vue-code-highlight  language="javascript">{{this.content.componentCode}}</vue-code-highlight >
      </div>

      <div class="col-sm-12 mt-3 mb-3">
        <ul class="content">
          <li>
            親コンポーネントから渡される引数を props プロパティにセットします。配列に文字列として記述します。
          </li>
          <li>
            親コンポーネントにイベントを上げるには、$emitを使います。イベント名と引数を指定します。
          </li>
          <li>
            親コンポーネント側は、コンポーネント呼び出しのカスタムタグの v-on:イベント名 にイベントを受け取った時の処理を書きます。コンポーネントから渡された引数は $eventに入っています。
          </li>
        </ul>
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

import animalComponent from '~/components/animal-component';

export default {
  name: 'index13.vue',
  components: { animalComponent },
  data() {
    return  {
      message: '',
      animals : [
        { id: 1, name: 'ブタ', file: 'buta.png', bark: 'ブー' },
        { id: 2, name: 'ヒツジ', file: 'hitsuji.png', bark: 'メー' },
        { id: 3, name: 'イヌ🐶', file: 'inu.png', bark: 'ワンワン' },
        { id: 4, name: 'クマ', file: 'kuma.png', bark: 'クマッ' },
        { id: 5, name: 'ライオン', file: 'lion.png', bark: 'ガオー' },
        { id: 6, name: 'ネコ🐱', file: 'neko.png', bark: 'ニャー' },
        { id: 7, name: 'ウマ', file: 'uma.png', bark: 'ヒヒーン' },
        { id: 8, name: 'ゾウ', file: 'zou.png', bark: 'パオー' },
        { id: 9, name: 'トラ', file: 'tora.png', bark: 'ガオー' },
        { id: 10, name: 'パンダ', file: 'panda.png', bark: 'フゥルフゥル～' },
        { id: 11, name: 'ウサギ', file: 'usagi.png', bark: '・・・' },
        { id: 12, name: 'サル', file: 'saru.png', bark: 'ウッキー' },
      ],
    }
  },
  created() {
    this.chapter = this.$chapters['chapter1']
    this.content = this.chapter.contents[12]
  }
}
</script>

<style lang="scss" scoped>
.message {
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 15px 0;
}
</style>
