<template>
<app-parallax/>
<app-brands/>
</template>

<script>
import parallax from "components/anasayfa/parallax";
import brands from "components/anasayfa/brands";

export default {
  components:{
    'app-parallax' : parallax,
    'app-brands' : brands
  }
}
</script>
