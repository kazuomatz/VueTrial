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
            <li v-for="fruit in fruits" :key="fruit.id">
              {{fruit.name}}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-8">
        <span class="badge badge-primary">Vue</span>
        <vue-code-highlight language="javascript">
          <pre>
          {{content.html}}
          </pre>
        </vue-code-highlight>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-8">
        <span class="badge badge-primary">JS</span>
        <vue-code-highlight language="javascript">
          <pre>
          {{content.code}}
          </pre>
        </vue-code-highlight>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <div class="check-point">
          v-forにkeyを与えるのが、「スタイルガイド」に定められた「必須」のルールです(「<a href="https://jp.vuejs.org/v2/style-guide/#キー付き-v-for-必須" target="_blank">キー付き v-for</a>」)。
        </div>
      </div>
    </div>

    <div class="row">
        <div class="col-sm-4 cos-12 offset-sm-4 mt-5">
          <nuxt-link to='/' class="btn btn-block btn-primary"> <font-awesome-icon icon="home"></font-awesome-icon> TOPに戻る </nuxt-link>
        </div>
    </div>

  </div>
</template>>


<script>
export default {
  name: "index2.vue",
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
