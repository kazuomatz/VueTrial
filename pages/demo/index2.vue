<template>
<div class="container">
  <div class="col-sm-12">
    <h1>みしまコロッケアプリ</h1>
  </div>



</div>
</template>

<script>
export default {
  name: "croquette",
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
