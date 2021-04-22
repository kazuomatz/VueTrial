<template>
  <div>
    <img :src="imagePath" :alt="object.name" v-on:click="bark"/>
    <label>{{object.name}}</label>
  </div>
</template>

<script>
export default {
  props:[ 'object'],
  name: "animal-component",
  computed: {
    imagePath () {
      return '/images/animal/' + this.object.file
    }
  },
  methods: {
    bark() {
      this.$emit('bark', this.object.bark)
    }
  }
}
</script>

<style scoped>
div {
  text-align: center;
}
img {
  width: 100%;
  height: auto;
  cursor: pointer;
}
label {
  text-align: center;
  width: 100%;
  font-weight: bold;
}
</style>
