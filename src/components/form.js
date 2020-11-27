/* global Vue, axios, API, _, moment */
import { STADIUM_LABELS } from './consts.js'
import template from './form.html.js'

export default {
  data: () => {
    return {
      nazev: '',
      popis: '',
      manager: '',
      cena: '',
      poloha: '',
      stadium: ''
    }
  },
  computed: {
    stateOpts: () => _.map(STADIUM_LABELS, (v, k) => ({ value: k, text: v }))
  },
  created () {
    if (this.$props.item) {
      Object.assign(this.$data, this.$props.item)
      this.$data.due = moment(this.$data.due).format('YYYY-MM-DD')
    }
  },
  props: ['item'],
  methods: {
    save () {
      return this.$data.id
        ? axios.put(`${API}/projectstack/projekty/${this.$data.id}`, this.$data)
        : axios.post(`${API}/projectstack/projekty`, this.$data)
    },
    handleSubmit () {
      this.save()
        .then(res => {
          this.$attrs.onSubmit(res.data)
        })
        .catch(err => {
          const message = err.response.data
          this.$store.dispatch('toast', { message, type: 'error' })
        })
    }
  },
  template
}