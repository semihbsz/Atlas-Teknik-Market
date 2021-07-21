<template>
  <div>
    <q-carousel
      class="large-screen-only"
      swipeable
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide class="carousel-item" :name="1" img-src="../../assets/carousel/item1.jpg"/>
      <q-carousel-slide class="carousel-item" :name="2" img-src="../../assets/carousel/item2.jpg"/>
    </q-carousel>
    <q-parallax class="small-screen-only" src="../../assets/markalar-banner/atlas-banner.jpg">
      <h1 class="text-white">ATLAS TEKNİK MARKET</h1>
    </q-parallax>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: 'parallax',
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true)
    }
  }
}
</script>

<style lang="sass">
h1
  font-weight: 900
  @media (max-width: $breakpoint-xs-max)
    font-size: 600%
</style>
