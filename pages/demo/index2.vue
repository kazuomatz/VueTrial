<template>
  <div class="container">
    <b-col>
      <h1>みしまコロッケアプリ</h1>
    </b-col>

    <b-col>
      <b-form inline class="search-option">
        <b-form-select
          selected-index="0"
          v-model="prefecture"
          :options="prefectures"
        ></b-form-select>

        <b-form-select
          v-model="city"
          selected-index="0"
          :options="cities"
        ></b-form-select>

      </b-form>
    </b-col>

    <b-col>
      <table class="table">
        <tr v-for="shop in selectedShops" :key="shop.id">
          <td><fa icon="hamburger"/>{{ shop.name }}</td>
          <td>{{ shopAddress(shop)}}</td>
          <td>
            <a class="btn btn-primary" :href="mapUrl(shop)" target="_blank"><fa icon="map"/></a>
            <a class="btn btn-primary" :href="shop.url"  target="_blank" v-if="shop.url"><fa icon="link"/></a>
          </td>
        </tr>
      </table>
    </b-col>
  </div>
</template>

<script>
export default {
  name: "croquette",
  data() {
    return {
      url: 'https://d1zo7z5hf7zka2.cloudfront.net/croquette.json',
      shops: [],
      prefecture: null,
      city: null
    }
  },
  mounted() {
    this.getData()
  },
  created() {
    this.chapter = this.$chapters['chapter3']
    this.content = this.chapter.contents[0]
  },
  computed: {
    prefectures() {
      // 都道府県をUniq抽出
      return [... new Set(this.shops.map ((shop) => { return shop.prefecture }))]
    },
    cities() {
      // 選択された都道府県の市区町村を抽出
      return [... new Set(this.shops.filter ((shop) => {
        if ( shop.prefecture === this.prefecture) {
          return true
        }
      }).map ((shop) => { return shop.city }).sort())]
    },
    selectedShops() {
      return this.shops.filter((shop) => {
        if (this.prefecture === shop.prefecture) {
          if ( !this.city ) {
            return true
          }
          else {
            return this.city === shop.city
          }
        }
        else {
          return false
        }
      })
    }
  },
  methods: {
    async getData() {
      const data = await this.$axios.$get(this.url)
      this.shops = data.shops;
      this.prefecture = this.prefectures[0];
    },
    shopAddress(shop) {
      return `${shop.prefecture}${shop.city}${shop.address1 || ''}${shop.address2 || ''}`
    },
    mapUrl(shop) {
      return `https://www.google.com/maps/search/?api=1&query=${shop.geom.lat},${shop.geom.lng}`
    }
  },
  watch: {
    cities() {
      this.city = this.cities[0];
    }
  }
}
</script>

<style lang="scss" scoped>

.table {
  tr {
    td:first-child {
      [data-icon] {
        color: #cd8e07;
        font-size: 1.5rem;
        margin-right: 15px;
      }
    }
    td:last-child {
      width: 15%;
      .btn {
        margin: 0 5px;
      }
    }
  }
}

form.search-option {
  margin: 20px 0;
  select {
    margin: 0 15px 0 0;
    width: 200px;
  }
}
</style>
