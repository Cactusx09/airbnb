<template>
  <section class="about" style="background: linear-gradient(135deg, #FFE53A 0%, #FF2525 100%)">
    <div class="circle">
      <h3 class="circle__title">About Project</h3>
      <div class="circle__txt">
        <p>There is no such thing as too many Airbnb tips for professional hosts who are striving to improve their business. So, we at <a href="https://www.airgms.com" target="_blank"><span>AirGMS</span></a> took the liberty to create a database of handy tips just for you. </p>
        <p>The AirGMS team works with Airbnb hosts on a daily basis and therefore we truly understand all the different struggles that hosts typically have to face.</p>
        <p>Now we want to share our accumulated knowledge with you! Be sure to check out our Daily Airbnb Tips and remember to share these useful tips with your fellow hosts too.</p>
      </div>
      <a href="#" @click.prevent="$parent.aboutOpened = false" class="circle__close g_btn orange"><i><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><g fill="none"><g style="stroke-width:2;stroke:#FFF"><path d="M1 17L17 1"/><path d="M17 17L1 1"/></g></g></svg></i><span>Back</span></a>
    </div>
  </section>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style lang="sass">
  @import ~/assets/styles/mixins.scss
  @import ~/assets/styles/pages/about.sass
</style>
