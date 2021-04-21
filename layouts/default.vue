<template>

  <div>
    <NavBar/>
    <div class="app-body"><nuxt :nuxt-child-key="$route.fullPath" /></div>
    <Footer/>
  </div>

</template>

<script>
import NavBar from '~/components/nav-bar';
import Footer from '~/components/footer';

export default {
  components: { NavBar, Footer }
}
</script>
