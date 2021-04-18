<template>

  <div>
    <NavBar/>
    <Nuxt />
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
