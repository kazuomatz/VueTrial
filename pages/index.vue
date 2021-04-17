<template>
  <div>
    <div class="app-body">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12" v-for="chapter in chapters">
            <ChapterTitle :text="chapter.title"/>
            <ol>
              <li v-for="content in chapter.contents">
                <nuxt-link :to="chapter.path + '/' + content.path">
                  {{content.title}}
                </nuxt-link>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      chapters: [
        { title: 'Vueの基本', path:'chapter1', contents: [
            {title: 'やってみよう', path: 'index1'},
          ]}
      ]
    }
  }
}
</script>
