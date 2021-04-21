<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12">
        <ChapterTitle text="演習"/>
      </div>

      <div class="col-sm-12">
        <ContentTitle text="みしまコロッケアプリを作ろう"/>
      </div>

      <div class="col-sm-12">
        <table class="table table-bordered">
          <tr>
            <td>みしまコロッケ</td>
            <td><a href="https://www.city.mishima.shizuoka.jp/mishima_info/croquette/" target="_blank">三島市公式Webサイト</a></td>
          </tr>
          <tr>
            <td>リソース</td>
            <td>三島市オープンデータ <a href="http://linkdata.org/work/rdf1s3692i" target="_blank">みしまコロッケ認定店</a></td>
          </tr>
          <tr>
            <td>JSONデータ</td>
            <td>EXCELファイルをJSON化しました。-> <a :href="url" target="_blank"><fa icon="file-code"/></a></td>
          </tr>
        </table>
      </div>

      <div class="col-sm-12">
        <div class="sandbox">
          <img src="/images/08.jpg" alt="photo" class="img-thumbnail rounded mx-auto d-block"/>
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
  name: "index1",
  data() {
    return {
      url: 'https://d1zo7z5hf7zka2.cloudfront.net/croquette.json',
      shops: []
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
        this.$axios.$get(this.url).then((data) => {
          this.shops = data.shops
        })
      }
    }
}
</script>

<style scoped>

</style>
