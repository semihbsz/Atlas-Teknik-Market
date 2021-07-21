<template>
  <div class="container">
    <app-parallax/>
    <app-contact-list/>
  </div>
</template>

<script>
import contactList from "components/iletisim/contactList";
import parallax from "components/iletisim/parallax"

export default {
  components: {
    'app-parallax': parallax,
    'app-contact-list': contactList
  }
}
</script>
<style lang="sass" scoped>
.container
  border: 1px dotted black
  width: 80%
  margin: 0 auto
  text-align: center
  @media (max-width: $breakpoint-xs-max)
    width: 100%
    border: none
    margin: 0 auto
    text-align: start
</style>

