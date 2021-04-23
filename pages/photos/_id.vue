<template>
  <div class="container">
    <div class="row" v-if="currentPhoto">
      <div class="col-sm-12">
        <div class="sandbox">
          <h1>{{ currentPhoto.title }}</h1>
          <img :src="currentPhotoPath" alt="photo" class="img-thumbnail rounded mx-auto d-block"/>
          <div class="col-sm-12 text-center">
            <div class="caption">
              {{ currentPhoto.caption }}
            </div>

            <p class="text-right">素材提供： <a href="https://www.pakutaso.com/" target="_blank">ぱくたそ</a></p>

            <div class="buttons">
              <b-button :to="'/photos/' + (id - 1)" :disabled="id - 1 === 0" variant="primary">
                <fa icon="angle-double-left"/>
              </b-button>
              <b-button :to="'/photos/' + (id + 1)" :disabled="id + 1 > photos.length" variant="primary">
                <fa icon="angle-double-right"/>
              </b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="alert-danger alert mt-5">
        ページはありません。
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
  name: "id.vue",
  data () {
    return {
      id: parseInt(this.$route.params.id),
      photos: [
        { id:  1, title: '写真１', caption: 'ジャンプする犬', file: '01.jpg' },
        { id:  2, title: '写真２', caption: 'カメラ女子', file: '02.jpg' },
        { id:  3, title: '写真３', caption: '港の夜景', file: '03.jpg' },
        { id:  4, title: '写真４', caption: '山頂へと続く道', file: '04.jpg' },
        { id:  5, title: '写真５', caption: 'お洒落なバーで', file: '05.jpg' },
        { id:  6, title: '写真６', caption: '雰囲気のあるカフェ', file: '06.jpg' },
        { id:  7, title: '写真７', caption: 'ちょっと不機嫌な猫', file: '07.jpg' },
        { id:  8, title: '写真８', caption: 'コロッケ大好き', file: '08.jpg' },
        { id:  9, title: '写真９', caption: '日本酒女子', file: '09.jpg' },
        { id: 10, title: '写真10', caption: '青い空と海', file: '10.jpg' }
      ]
    }
  },
  computed: {
    currentPhoto() {
      return this.photos.filter( (photo) => { return photo.id === this.id } )[0]
    },
    currentPhotoPath() {
      return '/images/' + this.currentPhoto.file;
    }
  }
}
</script>

<style lang="scss" scoped>
.caption {
  padding: 20px 0;
  font-size: 1.2rem;
}
.buttons {
  a.btn {
    &:first-child {
      margin-right: 5px;
    }
  }
}
</style>
