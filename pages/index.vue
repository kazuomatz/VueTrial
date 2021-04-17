<template>
  <div class="app-body container-fluid">
    <div class="row">
      <div class="col-sm-12" v-for="key in Object.keys(chapters)">
        <ChapterTitle :text="chapters[key].title"/>
        <ol>
          <li v-for="content in chapters[key].contents">
            <nuxt-link :to="chapters[key].path + '/' + content.path" v-if="content.path">
              {{content.title}}
            </nuxt-link>
            <span v-else>
              {{content.title}}
            </span>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    chapters () {
      return this.$chapters
    }
  }
}
</script>
