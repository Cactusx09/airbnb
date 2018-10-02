import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    tips : []
  },
  actions: {
    async GET_TIP({ commit }) {
      const { data } = await this.$axios.get(`/tip`)
      let gradient = await this.$axios.get(`/gradient`)

      let tipTemp = {
        n: data.success.tip[Object.keys(data.success.tip)[0]],
        title: data.success.tip.Title,
        ico: data.success.tip.Icon,
        content: data.success.tip.Description,
        gradient: `linear-gradient(${Math.floor(Math.random() * 360) + 1}deg, ${gradient.data.success.gradient.Gradient})`
      }
      commit('ADD_TIP', tipTemp)
    },
    async nuxtServerInit ({ commit }, { app }) {
      const { data } = await this.$axios.get(`/tip`)
      let gradient = await this.$axios.get(`/gradient`)

      let tipTemp = {
        n: data.success.tip[Object.keys(data.success.tip)[0]],
        title: data.success.tip.Title,
        ico: data.success.tip.Icon,
        content: data.success.tip.Description,
        gradient: `linear-gradient(${Math.floor(Math.random() * 360) + 1}deg, ${gradient.data.success.gradient.Gradient})`
      }
      commit('ADD_TIP', tipTemp)
    },
    async GET_TIP_ID({ commit }) {
      const { data } = await this.$axios.get(`/tip/${this.$router.history.current.hash.substr(1)}`)
      let gradient = await this.$axios.get(`/gradient`)

      let tipTemp = {
        n: data.success.tip[Object.keys(data.success.tip)[0]],
        title: data.success.tip.Title,
        ico: data.success.tip.Icon,
        content: data.success.tip.Description,
        gradient: `linear-gradient(${Math.floor(Math.random() * 360) + 1}deg, ${gradient.data.success.gradient.Gradient})`
      }
      commit('ADD_TIP_FIRST', tipTemp)
    }
  },
  mutations: {
    ADD_TIP_FIRST(state, items) {
      state.tips.unshift(items)
    },
    ADD_TIP(state, items) {
      state.tips.push(items)
    }
  }
})

export default store


// $store.state.tips[n].gradient
