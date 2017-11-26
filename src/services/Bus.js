import Vue from 'vue'
const Bus = new Vue({
  methods: {
    beatTime (value) {
      const beat = (60 / value) * 1000
      return Math.floor(beat)
    }
  }
})
export default Bus
