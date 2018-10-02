<template>
  <div>
    <div class="overlay" style="background: linear-gradient(135deg, #FFE53A 0%, #FF2525 100%)"></div>

    <transition name="fade">
      <section v-if="!aboutOpened" class="main">
        <div class="container" :style="{ background: $store.state.tips[n].gradient, minHeight: windowHeight + 'px' }">
          <header class="header">
            <a href="/" class="header__logo"><span><img src="~/assets/logo.svg" alt=""></span></a>
            <a href="#" @click.prevent="aboutOpened = true" class="header__about"><span>About</span></a>
          </header>

          <div class="tip">
            <div class="tip__ico">
              <img :src="$store.state.tips[n].ico" alt="">
            </div>

            <div class="tip__txt">
              <div class="tip__txt_n">
                <svg viewbox="0 0 80 30" width="80" height="30">
                  <defs>
                    <mask id="mask1" x="0" y="0" width="80" height="30">
                      <rect x="0" y="0" width="80" height="30" fill="#fff"/>
                      <text class="tip__txt_nText" text-anchor="middle" x="40" y="19" dy="1" v-text="'TIP #' + tipNumber.number">TIP </text>
                    </mask>
                  </defs>
                  <rect x="0" y="0" width="80" height="30" mask="url(#mask1)" fill="#fff" fill-opacity="1"/>
                </svg>
              </div>
              <h2 class="tip__txt_title"><span>{{ $store.state.tips[n].title }}</span></h2>
              <div class="tip__txt_content" v-html="$store.state.tips[n].content"></div>
            </div>
          </div>

          <div class="footer">
            <div class="footer__copyright">
              © 2018, <a href="https://www.airgms.com" target="_blank"><img src="~/assets/airGMS-white.svg" alt=""></a> Inc.
            </div>

            <div class="footer__next" :class="{'_active': social}" @click.prevent="onClickNext()">
              <a href="#" class="footer__next_btn">
                <svg viewbox="0 0 140 48" width="140" height="48">
                  <defs>
                    <mask id="mask2" x="0" y="0" width="140" height="48">
                      <rect x="0" y="0" width="140" height="48" fill="#fff"/>
                      <text text-anchor="middle" x="84" y="29" dy="1">Next Tip</text>
                      <path id="footer__next_i" transform="translate(15, 12)" d="M22.9 9.7L24.5 7.3C24.7 7 25.1 7 25.4 7.2 25.7 7.4 25.8 7.8 25.6 8.1L23 11.9C22.8 12.1 22.6 12.2 22.4 12.2 22.3 12.2 22.1 12.2 22 12.1L17.9 9.7C17.6 9.5 17.5 9.1 17.7 8.8 17.9 8.4 18.3 8.3 18.6 8.5L21.7 10.3C21.1 5.3 16.8 1.3 11.5 1.3 5.9 1.3 1.3 5.9 1.3 11.5 1.3 17.2 5.9 21.7 11.5 21.7 15.1 21.7 18.5 19.8 20.3 16.7 20.5 16.4 20.9 16.3 21.2 16.5 21.6 16.7 21.7 17.1 21.5 17.4 19.4 20.9 15.6 23.1 11.5 23.1 5.2 23.1 0 17.9 0 11.5 0 5.2 5.2 0 11.5 0 17.2 0 22 4.2 22.9 9.7Z"/>
                    </mask>
                  </defs>
                  <rect x="0" y="0" width="140" height="48" mask="url(#mask2)" fill="#fff" fill-opacity="1"/>
                </svg>
              </a>
              <p>or press ‘Space’</p>
            </div>

            <div class="footer__social">
              <div class="footer__social_wrp" :class="{'_active': social}">
                <a :href="`https://pinterest.com/pin/create/button/?url=&media=&description=${host}`" target="_blank"><span><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><defs><mask id="m1" width="48" height="48" x="0" y="0"><rect stroke="#FFF" x="0.5" y="0.5" width="47" height="47" rx="23.5"/><path stroke="#fff" d="M19.9 36.9C19.8 36.9 19.7 36.9 19.6 36.9 18.8 36.7 18.3 35.9 18.5 35.1L21.9 21.2C22.1 20.5 22.9 20 23.6 20.2 24.4 20.4 24.9 21.1 24.7 21.9 24.5 22.7 24.2 25.3 25.1 26.5 25.4 26.7 25.8 27.1 26.8 27.1 28.9 27.1 31.2 23.6 31.2 20.3 31.2 19.3 31 17.7 29.8 16.6 28.7 15.5 27 14.9 24.6 14.9 18.4 14.9 17.2 18.8 17 20 16.9 21.3 16.8 23.1 18 23.5 18.8 23.8 19.1 24.7 18.9 25.4 18.6 26.2 17.7 26.5 17 26.3 14.5 25.3 13.6 22.3 14.1 19.5 14.8 16 17.9 12 24.6 12 27.8 12 30.2 12.9 31.9 14.5 33.4 16 34.1 18 34.1 20.3 34.1 24.9 31 30 26.8 30 24.9 30 23.8 29.3 23.1 28.6L21.3 35.8C21.2 36.4 20.6 36.9 19.9 36.9Z" stroke-linejoin="round"/></mask></defs><g fill="none"><rect stroke="#FFF" fill="#fff" mask="url(#m1)" x="0.5" y="0.5" width="47" height="47" rx="23.5"/></g></svg></span></a>
                <a :href="`https://www.facebook.com/sharer/sharer.php?u=${host}`" target="_blank"><span><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><defs><mask id="m2" width="48" height="48" x="0" y="0"><rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#FFF"/><path d="M27.6 17.4L30.9 17.4C32.4 17.4 33.6 16.2 33.6 14.7 33.6 13.2 32.4 12 30.9 12L27.6 12C23.6 12 20.4 15.2 20.4 19.2L20.4 21.1 17.7 21.1C16.2 21.1 15 22.3 15 23.8 15 25.3 16.2 26.5 17.7 26.5L20.4 26.5 20.4 32.4C20.4 33.9 21.6 35.1 23.1 35.1 24.6 35.1 25.8 33.9 25.8 32.4L25.8 26.5 29.3 26.5C30.8 26.5 32 25.3 32 23.8 32 22.3 30.8 21.1 29.3 21.1L25.8 21.1 25.8 19.2C25.8 18.2 26.6 17.4 27.6 17.4ZM25.1 22.4L29.3 22.4C30 22.4 30.7 23 30.7 23.8 30.7 24.5 30 25.2 29.3 25.2L25.1 25.2C24.7 25.2 24.4 25.5 24.4 25.8L24.4 32.4C24.4 33.1 23.8 33.7 23.1 33.7 22.3 33.7 21.7 33.1 21.7 32.4L21.7 26.5 21.7 25.8C21.7 25.5 21.4 25.2 21 25.2L20.4 25.2 17.7 25.2C16.9 25.2 16.3 24.5 16.3 23.8 16.3 23 16.9 22.4 17.7 22.4L20.4 22.4 21 22.4C21.4 22.4 21.7 22.1 21.7 21.7 21.7 21.7 21.7 21.7 21.7 21.7 21.7 21.7 21.7 21.7 21.7 21.7L21.7 21.1 21.7 19.2C21.7 16 24.4 13.3 27.6 13.3L30.9 13.3C31.7 13.3 32.3 13.9 32.3 14.7 32.3 15.5 31.7 16.1 30.9 16.1L27.6 16.1C25.9 16.1 24.4 17.5 24.4 19.2L24.4 21.7C24.4 22.1 24.7 22.4 25.1 22.4Z" fill="#FFF"/></mask></defs><g fill="none"><rect fill="#fff" mask="url(#m2)" x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#FFF"/></g></svg></span></a>
                <a :href="`https://twitter.com/home?status=${host}`" target="_blank"><span><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><defs><mask id="m3" width="48" height="48" x="0" y="0"><rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#FFF"/><path d="M29.4 35.1L23.3 35.1C19.3 35.1 16 31.9 16 27.9L16 14.7C16 13.2 17.2 12 18.7 12 20.2 12 21.4 13.2 21.4 14.7L21.4 20.6 27.8 20.6C29.2 20.6 30.5 21.8 30.5 23.3 30.5 24.8 29.2 26 27.8 26L21.4 26 21.4 27.9C21.4 28.9 22.2 29.7 23.3 29.7L29.4 29.7C30.9 29.7 32.1 30.9 32.1 32.4 32.1 33.9 30.9 35.1 29.4 35.1ZM18.7 13.3C17.9 13.3 17.3 13.9 17.3 14.7L17.3 27.9C17.3 31.1 20 33.8 23.3 33.8L29.4 33.8C30.2 33.8 30.8 33.2 30.8 32.4 30.8 31.6 30.2 31 29.4 31L23.3 31C21.5 31 20.1 29.6 20.1 27.9L20.1 25.3C20.1 25 20.4 24.7 20.7 24.7L27.8 24.7C28.5 24.7 29.1 24.1 29.1 23.3 29.1 22.5 28.5 21.9 27.8 21.9L20.7 21.9C20.4 21.9 20.1 21.6 20.1 21.3L20.1 14.7C20.1 13.9 19.5 13.3 18.7 13.3Z" fill="#FFF"/></mask></defs><g fill="none"><rect fill="#fff" mask="url(#m3)" x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#FFF"/></g></svg></span></a>
                <a :href="`https://plus.google.com/share?url=${host}`" target="_blank"><span><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><defs><mask id="m4" width="48" height="48" x="0" y="0"><rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#FFF"/><path d="M23.3 35.6C17.1 35.6 12 30.5 12 24.3 12 18.1 17.1 13 23.3 13 25.2 13 27 13.5 28.7 14.4 29.9 15 30.3 16.5 29.7 17.7 29.2 18.6 28.4 19.1 27.5 19.1 27.1 19.1 26.7 19 26.3 18.8 25.4 18.3 24.3 18 23.3 18 19.8 18 17 20.8 17 24.3 17 27.8 19.8 30.6 23.3 30.6 25.8 30.6 28.1 29.1 29.1 26.8L26.2 26.8C24.8 26.8 23.7 25.7 23.7 24.3 23.7 22.9 24.8 21.8 26.2 21.8L32.1 21.8C33.5 21.8 34.6 22.9 34.6 24.3 34.6 30.5 29.5 35.6 23.3 35.6ZM33.6 19.5C33.2 19.5 32.8 19.1 32.8 18.7L32.8 17.5 31.7 17.5C31.2 17.5 30.9 17.1 30.9 16.7 30.9 16.3 31.2 15.9 31.7 15.9L32.8 15.9 32.8 14.7C32.8 14.3 33.2 13.9 33.6 13.9 34.1 13.9 34.4 14.3 34.4 14.7L34.4 15.9 35.6 15.9C36 15.9 36.4 16.3 36.4 16.7 36.4 17.1 36 17.5 35.6 17.5L34.4 17.5 34.4 18.7C34.4 19.1 34.1 19.5 33.6 19.5ZM23.3 14.3C17.8 14.3 13.3 18.8 13.3 24.3 13.3 29.8 17.8 34.3 23.3 34.3 28.8 34.3 33.3 29.8 33.3 24.3 33.3 23.6 32.8 23.1 32.1 23.1L26.2 23.1C25.5 23.1 25 23.6 25 24.3 25 25 25.5 25.5 26.2 25.5L30.9 25.5 30.6 26.3C29.7 29.6 26.7 31.9 23.3 31.9 19.1 31.9 15.7 28.5 15.7 24.3 15.7 20.1 19.1 16.7 23.3 16.7 24.6 16.7 25.8 17 26.9 17.6 27.1 17.7 27.3 17.7 27.5 17.7 27.9 17.7 28.3 17.5 28.5 17.1 28.8 16.5 28.6 15.8 28 15.5 26.6 14.7 25 14.3 23.3 14.3Z" fill="#FFF"/></mask></defs><g fill="none"><rect fill="#fff" mask="url(#m4)" x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#FFF"/></g></svg></span></a>
              </div>

              <a href="#" class="footer__social_mob" :class="{'_active': social}" @click="toogleSocial()">
                <svg v-if="!social" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="none"><rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#FFF"/><g fill="#FFF"><path d="M30.2 33.3L12.7 33.3C12.3 33.3 12 33 12 32.6L12 21.4C12 21 12.3 20.7 12.7 20.7L20.2 20.7C23.1 20.7 23.5 18.5 23.6 15.2 23.7 13 23.8 10.5 26 10.5 26.8 10.5 27.4 10.8 27.9 11.3 28.9 12.3 28.9 14 28.9 14.8L28.9 14.9C28.9 16.2 28.7 17.4 28.6 18.2L31.1 18.2C33.7 18.2 35.9 20.4 35.9 23.1 35.9 23.1 35.9 23.1 35.9 23.2L35 28.6C34.2 31.9 31.9 33.3 30.2 33.3ZM13.4 31.9L30.2 31.9C31.4 31.9 33 30.8 33.6 28.4L34.5 23C34.4 21.1 32.9 19.6 31.1 19.6L27.8 19.6C27.6 19.6 27.4 19.5 27.2 19.4 27.1 19.2 27 19 27.1 18.8 27.2 18.4 27.5 16.8 27.5 14.9L27.5 14.7C27.5 14.2 27.5 12.8 26.9 12.3 26.7 12 26.4 12 26 12 25.3 12 25.1 12.8 25 15.2 24.9 18 24.7 22.1 20.2 22.1L13.4 22.1 13.4 31.9Z"/><path d="M18.9 33.3L12.7 33.3C12.3 33.3 12 33 12 32.6L12 21.4C12 21 12.3 20.7 12.7 20.7L18.9 20.7C19.3 20.7 19.6 21 19.6 21.4L19.6 32.6C19.6 33 19.3 33.3 18.9 33.3ZM13.4 31.9L18.2 31.9 18.2 22.1 13.4 22.1 13.4 31.9Z"/></g></g></svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="none"><g stroke="#FFF"><rect x="0.5" y="0.5" width="47" height="47" rx="23.5"/><g stroke-width="2" stroke="#fff"><path d="M32 16L16 32" stroke="#fff"/><path d="M16 16L32 32" stroke="#fff"/></g></g></g></svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </transition>

    <transition name="fade">
      <about v-if="aboutOpened"></about>
    </transition>
  </div>
</template>

<script>
import About from '~/components/about'

export default {
  data () {
    return {
      social: false,
      n: 0,
      aboutOpened: false,
      tip: null,
      host: 0
    }
  },
  computed: {
    tipNumber: function() {
      return { number: 0 }
    },
    windowHeight: function() {
      if(process.browser) {
        return window.innerHeight
      }
    }
  },
  async fetch({store, params, route}) {
    await store.dispatch('GET_TIP')
    await store.dispatch('GET_TIP')
  },
  methods: {
    getTip() {
      this.$store.dispatch('GET_TIP')
      this.tipNumber.number = this.$store.state.tips[this.n].n
    },
    toogleSocial() {
      this.social = this.social ? false : true
    },
    onClickNext() {

      this.getTip()

      // wrap each letter in span
      let text = document.getElementsByClassName('tip__txt_title')[0]
      let msg = this.$store.state.tips[this.n + 1].title
      // remove name from msg
      msg = msg.substring(0, msg.length)
      // to char array
      msg = msg.split('')

      text.innerHTML = '<span class="letter">' + msg.join('</span><span class="letter">') + '</span>'

      let nextTipAnim = this.$anime.timeline({autoplay: false})
        .add({
          targets: '.tip__ico',
          scale: [0, 1],
          easing: 'easeOutElastic',
          elastisity: 1200,
          duration: 1050
        })
        .add({
          targets: '.tip__txt_title .letter',
          opacity: [0, 1],
          easing: 'easeOutExpo',
          duration: 1550,
          offset: '-=700',
          delay: function(el, i) {
            return 40*i;
          }
        })
        .add({
          targets: '.tip__txt_content',
          opacity: [0, 1],
          translateY: [-40, 0],
          easing: 'easeOutElastic',
          duration: 750,
          offset: '-=600',
          elastisity: 1100
        })

      nextTipAnim.play()

      // animate tip number
      let tipN = this.$store.state.tips[this.n + 1].n
      this.$router.push({path: this.$route.path +`#${tipN}`})

      this.$anime.timeline()
        .add({
          targets: this.tipNumber,
          number: tipN,
          easing: 'linear',
          duration: 450,
          round: 1,
          update: () => {
            let el = document.getElementsByClassName('tip__txt_nText')[0]
            el.innerHTML = 'TIP #' + this.tipNumber.number
          }
        })
        // footer next i rotate animation
        .add({
          targets: '#footer__next_i',
          transform: ['translate(15, 12) rotate(0, 12, 12)', 'translate(15, 12) rotate(360, 12, 12)'],
          duration: 2000,
          easing: 'easeOutElastic',
          elastisity: 1000,
          offset: 100
        })

        // btn click imitation
        let btnNext = document.getElementsByClassName('footer__next_btn')[0]
        btnNext.classList.add('_active')
        setTimeout(() => {
          btnNext.classList.remove('_active')
        }, 150)

      this.n++

    },
    // async fetchData() {
    //   await store.dispatch('GET_TIP')
    //   await store.dispatch('GET_TIP')
    // }
  },
  mounted() {
    // do something before creating vue instance
    this.host = !window ? context.req.headers.host : window.location.origin

    this.tipNumber.number = this.$store.state.tips[this.n].n

    this.$cookies.set('logged', true)

    if(this.$router.history.current.hash.length) {
      this.$store.dispatch('GET_TIP_ID')
      this.tipNumber.number = this.$router.history.current.hash.substr(1)
    } else {
      this.$router.push({path: this.$route.path +`#${this.tipNumber.number}`})
    }

    setTimeout(()=>{
      document.getElementsByClassName('overlay')[0].style.opacity = 0
    }, 300)
    setTimeout(()=>{
      document.getElementsByClassName('overlay')[0].remove()
    }, 1000)

    window.onkeydown = (e) => {
      if(e.keyCode === 32) {
        e.preventDefault()
        this.onClickNext()
      }
    }


    //mobile hover disable
    function getMobileOperatingSystem(){var e=navigator.userAgent||navigator.vendor||window.opera;return/windows phone/i.test(e)?"Windows Phone":/android/i.test(e)?"Android":/iPad|iPhone|iPod/.test(e)&&!window.MSStream?"iOS":null}if(getMobileOperatingSystem())try{for(var si in document.styleSheets){var styleSheet=document.styleSheets[si];if(styleSheet.rules)for(var ri=styleSheet.rules.length-1;ri>=0;ri--)styleSheet.rules[ri].selectorText&&styleSheet.rules[ri].selectorText.match(":hover")&&styleSheet.deleteRule(ri)}}catch(e){}

    window.resize = function() {
       this.windowHeight = window.innerHeight
    }
  },
  components: {
    'about': About
  }
}
</script>

<style lang="sass">
  @import ~/assets/styles/mixins.scss
  @import ~/assets/styles/pages/index.sass
</style>
