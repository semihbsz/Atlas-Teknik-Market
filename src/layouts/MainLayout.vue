<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal elevated class="bg-white text-dark" height-hint="98">
      <div class="row justify-center full-height full-width text-center q-pa-sm">
        <q-img
          class="large-screen-only"
          src="../assets/logo.png"
          width="170px"
          height="100px"
        />
        <q-img
          class="small-screen-only"
          src="../assets/mobile-logo.jpg"
          width="100%"
        />
      </div>

      <q-tabs active-color="blue-10" class="q-pt-md large-screen-only">
        <q-route-tab class="q-mr-md" to="/" label="Ana Sayfa" icon="las la-home"/>
        <q-route-tab class="q-mr-md" to="/markalar" label="Markalar" icon="las la-tools"/>
        <q-route-tab class="q-mr-md" to="/hakkimizda" label="Hakkımızda" icon="las la-info"/>
        <q-route-tab class="q-mr-md" to="/iletisim" label="İletişim" icon="las la-envelope"/>
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view/>
    </q-page-container>

    <q-footer class="small-screen-only">
      <q-tabs
        active-color="blue-8"
        align="justify"
        class="bg-white text-dark shadow-2"
        :breakpoint="0">
        <q-route-tab class="q-mr-md" to="/" icon="las la-home"/>
        <q-route-tab class="q-mr-md" to="/markalar" icon="las la-tools"/>
        <q-route-tab class="q-mr-md" to="/hakkimizda" icon="las la-info"/>
        <q-route-tab class="q-mr-md" to="/iletisim" icon="las la-envelope"/>
      </q-tabs>
    </q-footer>
    <q-page-sticky class="add-post-mobile" position="bottom-right" :offset="[10, 0]">
      <q-btn flat type="a" href="https://wa.me/905325054694" round>
        <q-avatar size="82px">
          <img src="../assets/whatsapp-icon.png">
        </q-avatar>
      </q-btn>
    </q-page-sticky>
  </q-layout>
</template>

<script>


export default {
  name: 'MainLayout',

}
</script>

<style lang="sass">
</style>
