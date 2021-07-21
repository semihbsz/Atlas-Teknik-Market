<template>
  <div>
    <q-parallax class="q-parallax" src="../../assets/markalar-banner/atlas-banner.jpg">
      <h1 class="text-white text-center">HAKKIMIZDA</h1>
    </q-parallax>
  </div>
</template>

<script>
export default {
  name: 'Parallax'
}
</script>

<style lang="sass" scoped>
h1
  font-weight: 900

  @media (max-width: $breakpoint-xs-max)
    font-size: 400%

.q-parallax
  height: 380px !important
</style>
