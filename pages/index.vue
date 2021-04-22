<template>
  <div class="app-body container-fluid">
    <div class="row">
      <div class="col-sm-12" v-for="key in Object.keys(chapters)" :key="key">
        <chapter-title :text="chapters[key].title"/>
        <ul>
          <li v-for="content in chapters[key].contents" :key="content.title">
            <nuxt-link :to="chapters[key].path + '/' + content.path">
              {{content.title}}
            </nuxt-link>
          </li>
        </ul>
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
