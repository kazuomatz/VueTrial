<template>
  <div class="container">

    <div class="row">
      <div class="col-sm-12">
        <ChapterTitle :text="chapter.title"/>
        <ContentTitle :text="content.title"/>
        <div class="summary">{{ content.summary }}</div>
      </div>

      <div class="col-sm-12">
        <div class="sandbox">
          <ul>
            <li v-for="fruit in fruits" v-bind:key="fruit.id">
              {{fruit.name}}
            </li>
          </ul>
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
          v-forにkeyを与えるのが、「スタイルガイド」に定められた「必須」のルールです(「<a href="https://jp.vuejs.org/v2/style-guide/#キー付き-v-for-必須" target="_blank">キー付き v-for</a>」)。<br/>
          タグ何に v-bind:<b><i>属性名</i></b>:="値 or 式" と記述するとHTML要素の属性値に式や値が指定できます。
          この場合はkeyの属性値を設定するので<br/>v-bind:key="fruit.id" と記述しますが、 通常省略して :key="fruit.id"と記述します( <a href="https://jp.vuejs.org/v2/guide/syntax.html#v-bind-%E7%9C%81%E7%95%A5%E8%A8%98%E6%B3%95" target="_blank">v-bind 省略記法</a>)。
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
  name: 'index4.vue',
  data() {
    return  {
      chapter: null,
      content: null,
      fruits: [
        {id: 1, name: 'Apple'},
        {id: 2, name: 'Banana'},
        {id: 3, name: 'Melon'},
        {id: 4, name: 'Orange'},
        {id: 5, name: 'Kiwi'}
      ],
    }
  },
  created() {
    this.chapter = this.$chapters['chapter1']
    this.content = this.chapter.contents[3]
  }
}
</script>

<style scoped>

</style>
