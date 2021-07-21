<template>
  <q-list class="q-list">
    <q-item
      tag="a"
      href="tel:905325054694"
      clickable>
      <q-item-section avatar>
        <q-icon name="las la-phone"/>
      </q-item-section>
      <q-separator class="small-screen-only" vertical/>
      <q-item-section>
        <q-item-label>Tıkla Hemen Ara ! <br> [0532 505 4694]</q-item-label>
      </q-item-section>
    </q-item>

    <q-item
      tag="a"
      href="mailto:atlas@atlasteknikmarket.com"
      clickable>
      <q-item-section avatar>
        <q-icon name="las la-at"/>
      </q-item-section>
      <q-separator class="small-screen-only" vertical/>
      <q-item-section>
        <q-item-label>Tıkla Mail Gönder <br> [atlas@atlasteknikmarket.com]</q-item-label>
      </q-item-section>
    </q-item>

    <q-item
      tag="a"
      href="https://wa.me/905325054694/"
      clickable>
      <q-item-section avatar>
        <q-icon name="lab la-whatsapp"/>
      </q-item-section>
      <q-separator class="small-screen-only" vertical/>
      <q-item-section>
        <q-item-label>Tıkla Whatsapp Üzerinden Mesaj Gönder ! <br> [0532 505 4694]</q-item-label>
      </q-item-section>
    </q-item>

    <q-item
      tag="a"
      href="https://goo.gl/maps/L8PTomospRykjYpw6"
      clickable>
      <q-item-section avatar>
        <q-icon name="las la-map-marker-alt"/>
      </q-item-section>
      <q-separator class="small-screen-only" vertical/>
      <q-item-section>
        <q-item-label>Tıkla Yol Tarifi Al !</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
export default {
  name: 'contactPage'
}
</script>

<style lang="sass" scoped>


.q-item
  @media (max-width: $breakpoint-xs-max)
    width: 100%
    height: 142px !important
    font-size: 130%
    font-weight: 400
    text-align: center
    border-bottom: 1px solid black
</style>
