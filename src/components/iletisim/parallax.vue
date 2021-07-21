<template>
  <q-parallax src="../../assets/markalar-banner/atlas-banner.jpg">
    <h1 class="text-white text-center">İLETİŞİM</h1>
  </q-parallax>
</template>

<script>
export default {
  name: 'parallax'
}
</script>

<style lang="sass" scoped>
h1
  font-weight: 900

  @media (max-width: $breakpoint-xs-max)
    font-size: 400%

.q-parallax
  height: 320px !important

</style>
