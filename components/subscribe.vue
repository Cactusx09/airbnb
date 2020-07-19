<template>
  <section class="subscribe" :style="{backgroundImage: `url(${overlay})` }">
    <form class="popup" @submit.prevent="onSubmit" name="subscribe">

      <div class="head">
        <div class="head__title">
          <b>Subscription</b>
          <small>to news and tips <a href="#" target="_blank"><span><img src="~assets/airGMS.svg" alt=""></span></a></small>
        </div>
      </div>

      <div class="top">
        <div class="field">
          <span>Email</span>
          <div class="field__input_wrp" :class="{_error: errors.has('email')}">
            <input v-validate="'required|email'" name="email" class="g_input" type="email" v-model="form.email">
            <span>{{ errors.first('email') }}</span>
            <small>You will receive emails with tips and valuable insights.</small>
          </div>
        </div>

        <div class="field">
          <span>Name</span>
          <div class="field__input_wrp" :class="{_error: errors.has('name'), _accept: !errors.has('name') && afterSubmit}">
            <input v-validate="'required|min:3'" name="name" class="g_input" type="text" v-model="form.name">
            <span>{{ errors.first('name') }}</span>
            <small>Nice to meet you!</small>
          </div>
        </div>

        <div class="field">
          <span>Number <br>of Listings</span>
          <div class="field__input_wrp" :class="{_error: errors.has('listings'), _accept: !errors.has('listings') && afterSubmit}">
            <no-ssr><input-number v-validate="'required'"
              :step="1"
              :min="1"
              v-model="form.listing"
              :placeholder="'How many listings do you manage?'"
              :inputclass="'g_input v-input-number-input'"
              @onInputNumberChange="onChange"></input-number></no-ssr>
            <small>We’ll pick up tips and info based on the size of business.</small>
            <span>{{ errors.first('listings') }}</span>
          </div>
        </div>
      </div>

      <div class="bot">
        <button type="submit"><span class="g_btn green" :class="{ _disabled: !isCompleted, _loading: afterSubmit}"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 34.7" width="32"><style>.a{fill:#FFF;}</style><path transform="translate(2,0)" d="M15.5 32.9C7 32.9 0 25.9 0 17.3 0 8.8 7 1.8 15.5 1.8c8.6 0 15.5 7 15.5 15.5 0 0.5-0.4 0.9-0.9 0.9 -0.5 0-0.9-0.4-0.9-0.9 0-7.6-6.2-13.8-13.8-13.8 -7.6 0-13.8 6.2-13.8 13.8 0 7.6 6.2 13.8 13.8 13.8 4.9 0 9.4-2.6 11.9-6.8 0.2-0.4 0.8-0.6 1.2-0.3 0.4 0.2 0.6 0.8 0.3 1.2C26.1 29.9 21 32.9 15.5 32.9z" class="a"/><path  transform="translate(2,0)" d="M30.2 18.2c-0.2 0-0.3 0-0.4-0.1l-5.6-3.3c-0.4-0.2-0.6-0.8-0.3-1.2 0.3-0.4 0.8-0.6 1.2-0.3l4.9 2.9 3.1-4.5c0.3-0.4 0.8-0.5 1.2-0.2 0.4 0.3 0.5 0.8 0.2 1.2l-3.6 5.1C30.7 18.1 30.5 18.2 30.2 18.2z" class="a"/></svg></i><span>Subscribe</span></span> <b>and Go To Tips</b></button>
        <a href="https://www.airgms.com/property-management-software/privacy-policy" target="_blank" class="bot__privacy"><span>Privacy Policy</span></a>
      </div>

    </form>
  </section>
</template>

<script>
import overlayUrl from '~/assets/overlay.svg'

export default {
  components: {
  },
  data() {
    return {
      overlay: overlayUrl,
      afterSubmit: false,
      form: {
        email: '',
        name: '',
        listing: ''
      }
    }
  },
  computed: {
    isCompleted() {
      return Object.keys(this.fields).some(key => this.fields[key].validated) && Object.keys(this.fields).every(key => this.fields[key].valid)
    }
  },
  methods: {
    onChange(value) {
    },
    onSubmit() {
      this.afterSubmit = true
      let loadingAnim = this.$anime({
        targets: '.g_btn svg',
        rotate: 360,
        loop: true,
        duration: 1500,
        elastisity: 800
      })

      this.$validator.validateAll().then(x => {
        if (this.errors.items.length == 0) {
          this.$axios.post('/subscribe', this.form)
            .then((response) => {
              if(response.data.success) {
                this.$cookies.set('logged', true)
                this.$parent.logged = true
                loadingAnim.pause
              }
            }).catch(e => {
              console.log(e)
            })

        }
      }).catch(e => {
        console.log(e)
      })
    }
  }
}
</script>

<style lang="sass">
  @import ~/assets/styles/mixins.scss
  @import ~/assets/styles/pages/subscribe.sass
</style>
