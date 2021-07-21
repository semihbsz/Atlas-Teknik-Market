<template>
  <div>
    <div class="row justify-between">
      <q-parallax
        src="../../assets/markalar-banner/atlas-banner.jpg"
      >
        <h1 class="text-white">ATLAS</h1>
      </q-parallax>

      <q-parallax
        src="../../assets/markalar-banner/black-decker-banner.jpg"
      >
        <h1 class="text-white">BLACK & DECKER</h1>
      </q-parallax>
      <q-parallax
        src="../../assets/markalar-banner/celik-halat-banner.jpg"
      >
        <h1 class="text-white">CELİK HALAT VE TEL SANAYİ</h1>
      </q-parallax>
      <q-parallax
        src="../../assets/markalar-banner/cermax-banner.jpg"
      >
        <h1 class="text-white">CERMAX</h1>
      </q-parallax>
      <q-parallax
        src="../../assets/markalar-banner/dewalt-banner.jpg"
      >
        <h1 class="text-white">DEWALT</h1>
      </q-parallax>
      <q-parallax
        src="../../assets/markalar-banner/kl-banner.jpg"
      >
        <h1 class="text-white">KL</h1>
      </q-parallax>
      <q-parallax
        src="../../assets/markalar-banner/ridgid-banner.jpg"
      >
        <h1 class="text-white">RIDGIT</h1>
      </q-parallax>
      <q-parallax
        src="../../assets/markalar-banner/stanley-banner.jpg"
      >
        <h1 class="text-white">STANLEY</h1>
      </q-parallax>
    </div>
  </div>
</template>

<script>
export default {
  name: 'brandsPage'
}
</script>

<style lang="sass" scoped>
h1
  line-height: 9rem
  text-align: center
  font-weight: 900
  @media (max-width: $breakpoint-xs-max)
    line-height: 5rem
    font-size: 530%
  @media (min-width: $breakpoint-sm-min)
    font-size: 950%
</style>
