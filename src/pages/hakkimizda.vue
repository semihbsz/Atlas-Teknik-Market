<template>
  <app-parallax/>
  <app-card/>

</template>

<script>
import parallax from "components/hakkimizda/parallax";
import card from "components/hakkimizda/card";

export default {
  components: {
    'app-parallax': parallax,
    'app-card': card
  }
}
</script>
